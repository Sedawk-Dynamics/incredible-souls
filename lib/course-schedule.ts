/**
 * Automatic month grouping + chronological sorting for courses/workshops.
 *
 * Each item exposes a list of batch dates (ISO strings). The engine:
 *   1. Ignores past dates and picks each item's NEAREST FUTURE batch.
 *   2. Groups items by the month of that nearest batch.
 *   3. Orders the month groups chronologically (current month first).
 *   4. Sorts items within a month by nearest batch date.
 *   5. Sends items whose every batch has passed to a "completed" bucket (always last).
 *
 * No months are hardcoded — grouping is derived from today's date, so the ordering
 * updates itself automatically as time passes.
 */

export interface CourseMonthGroup<T> {
  /** Stable key, e.g. "2026-07". */
  key: string
  /** e.g. "July". */
  monthName: string
  year: number
  /** e.g. "Upcoming in July" (year appended when it differs from the current year). */
  label: string
  items: T[]
}

export interface GroupedSchedule<T> {
  upcoming: CourseMonthGroup<T>[]
  completed: T[]
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

/** Nearest batch date that is today or later; null when all batches are in the past. */
export function nextUpcomingBatch(batches: string[], today: Date): Date | null {
  const t = startOfDay(today).getTime()
  const future = batches
    .map((b) => new Date(b))
    .filter((d) => !Number.isNaN(d.getTime()) && d.getTime() >= t)
    .sort((a, b) => a.getTime() - b.getTime())
  return future[0] ?? null
}

export interface GroupOptions<T> {
  today?: Date
  /** Recurring items (e.g. weekly meditation) are always treated as current-month/next-up. */
  isRecurring?: (item: T) => boolean
}

export function groupBySchedule<T>(
  items: T[],
  getBatches: (item: T) => string[],
  options: GroupOptions<T> = {}
): GroupedSchedule<T> {
  const today = startOfDay(options.today ?? new Date())
  const groups = new Map<string, { first: Date; entries: { item: T; next: Date }[] }>()
  const completed: T[] = []

  for (const item of items) {
    const next = options.isRecurring?.(item)
      ? today // recurring → always "next up" in the current month
      : nextUpcomingBatch(getBatches(item), today)

    if (!next) {
      completed.push(item)
      continue
    }

    const key = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, '0')}`
    if (!groups.has(key)) {
      groups.set(key, { first: new Date(next.getFullYear(), next.getMonth(), 1), entries: [] })
    }
    groups.get(key)!.entries.push({ item, next })
  }

  const upcoming: CourseMonthGroup<T>[] = [...groups.entries()]
    .sort((a, b) => a[1].first.getTime() - b[1].first.getTime())
    .map(([key, g]) => {
      const monthName = g.first.toLocaleString('en-US', { month: 'long' })
      const year = g.first.getFullYear()
      const label = `Upcoming in ${monthName}${year !== today.getFullYear() ? ` ${year}` : ''}`
      const sortedItems = g.entries
        .sort((a, b) => a.next.getTime() - b.next.getTime())
        .map((e) => e.item)
      return { key, monthName, year, label, items: sortedItems }
    })

  return { upcoming, completed }
}
