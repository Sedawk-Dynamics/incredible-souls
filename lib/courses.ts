/**
 * Central course catalog — the single source of truth for course data and pricing.
 *
 * IMPORTANT: `price` (in whole rupees) is the ONLY authoritative amount used for
 * payments. The backend always re-derives the amount from this catalog by course
 * id/slug and never trusts any amount sent from the client.
 *
 * A price of 0 marks a free offering (no Razorpay checkout — direct enrollment).
 */

export type Course = {
  id: string
  slug: string
  title: string
  duration: string
  time: string
  dates: string[]
  mode: string
  /** Whole rupees. 0 = free. Never expose paise here — convert at the API layer. */
  price: number
  level: string
  desc: string
  highlights: string[]
  tag: string | null
  tagColor: string
}

export const COURSES: Course[] = [
  {
    id: 'karmic-clearance-karuna-reiki',
    slug: 'karmic-clearance-karuna-reiki',
    title: 'Karmic Clearance & Karuna Reiki',
    duration: '4 Hours',
    time: '10am – 2pm',
    dates: ['12th July', '11th Oct', '10th Jan'],
    mode: 'Online / In-person',
    price: 6300,
    level: 'Beginner–Intermediate',
    desc: 'Learn to identify and clear karmic patterns while channelling the compassionate energy of Karuna Reiki for deep emotional and soul-level healing.',
    highlights: ['Karmic pattern identification', 'Karuna Reiki attunement', 'Energy healing techniques', 'Self-healing practices'],
    tag: 'Popular',
    tagColor: '#9B59B6',
  },
  {
    id: 'psychic-surgery-psychic-being',
    slug: 'psychic-surgery-psychic-being',
    title: 'Psychic Surgery & Psychic Being',
    duration: '3 Hours',
    time: '10am – 1pm',
    dates: ['19th July', '18th Oct', '17th Jan'],
    mode: 'Online / In-person',
    price: 6300,
    level: 'Intermediate',
    desc: 'An advanced healing course that teaches the art of psychic surgery — removing energetic blockages, entities and trauma from the auric field at the deepest levels.',
    highlights: ['Auric field scanning', 'Entity removal techniques', 'Psychic protection practices', 'Psychic development'],
    tag: 'Advanced',
    tagColor: '#E87BB0',
  },
  {
    id: 'money-abundance',
    slug: 'money-abundance',
    title: 'Money & Abundance',
    duration: '3 Hours',
    time: '10am – 1pm',
    dates: ['26th July', '25th Oct', '24th Jan'],
    mode: 'Online',
    price: 3459,
    level: 'All Levels',
    desc: 'Break free from scarcity mindset and karmic money blocks. Align your energy with the natural flow of abundance through spiritual and practical tools.',
    highlights: ['Abundance mindset rewiring', 'Karmic money block clearing', 'Prosperity mantras & practices', 'Manifestation techniques'],
    tag: 'Bestseller',
    tagColor: '#D4A843',
  },
  {
    id: 'standard-lama-healing',
    slug: 'standard-lama-healing',
    title: 'Standard Lama Healing',
    duration: '2 Days',
    time: '8pm – 10pm',
    dates: ['8th–9th June', '7th–8th Sept', '7th–8th Dec'],
    mode: 'Online',
    price: 5550,
    level: 'Beginner–Intermediate',
    desc: 'A foundational introduction to Lama Fera Healing with chakra science, healing techniques, and six sacred symbols for self and others energy healing.',
    highlights: ['History & benefits of Lama Fera', 'Healing kit & chakra science', '6 core Lama Fera symbols', 'Distance healing & attunement'],
    tag: null,
    tagColor: '',
  },
  {
    id: 'advanced-lama-healing',
    slug: 'advanced-lama-healing',
    title: 'Advanced Lama Healing',
    duration: '2 Days',
    time: '8pm – 10pm',
    dates: ['10th–11th June', '9th–10th Sept', '9th–10th Dec'],
    mode: 'Online',
    price: 5550,
    level: 'Intermediate–Advanced',
    desc: 'Advanced Lama Fera healing with powerful symbols for deep emotional, karmic and energetic cleansing.',
    highlights: ['6 advanced Lama Fera symbols', 'Bandhan Mokshi Kriya', 'Space & Vastu Dosh healing', 'Toran Kriya & crystal cleansing'],
    tag: 'Advanced',
    tagColor: '#E87BB0',
  },
  {
    id: 'reiki-level-1',
    slug: 'reiki-level-1',
    title: 'Reiki Level 1',
    duration: '2 Hours',
    time: '8pm – 10pm',
    dates: ['6th July', '5th Oct', '4th Jan'],
    mode: 'Online',
    price: 0,
    level: 'Beginner',
    desc: 'A foundational Reiki healing course focused on self-healing, chakra balancing, aura cleansing and energy healing techniques for self and others.',
    highlights: ['Universal Life Force Energy', 'Chakra & aura healing', 'Hand positions & energy scanning', 'Self-healing techniques'],
    tag: 'Free',
    tagColor: '#0B8C87',
  },
  {
    id: 'reiki-level-2',
    slug: 'reiki-level-2',
    title: 'Reiki Level 2',
    duration: '2 Days',
    time: '8pm – 10pm',
    dates: ['7th–8th July', '6th–7th Oct', '5th–6th Jan'],
    mode: 'Online',
    price: 3459,
    level: 'Intermediate',
    desc: 'An advanced Reiki healing course focused on sacred symbols, emotional healing, distance healing, energy protection and intuitive expansion.',
    highlights: ['Sacred Reiki symbols', 'Distance healing', 'Mental & emotional healing', 'Aura protection & manifestation'],
    tag: null,
    tagColor: '',
  },
  {
    id: 'harmony-zero-state',
    slug: 'harmony-zero-state',
    title: 'Harmony & Zero State',
    duration: '2 Hours',
    time: '3pm – 5pm',
    dates: ['26th July', '25th Oct', '24th Jan'],
    mode: 'Online',
    price: 3459,
    level: 'All Levels',
    desc: 'Return to your natural state of zero — a place of complete harmony, stillness and inner peace. Learn powerful techniques to reset your energetic frequency.',
    highlights: ['Zero point energy practices', 'Harmonising relationships', 'Stress & anxiety release', 'Inner stillness techniques'],
    tag: null,
    tagColor: '',
  },
  {
    id: 'relationships-inner-child-healing',
    slug: 'relationships-inner-child-healing',
    title: 'Relationships & Inner Child Healing',
    duration: '5 Days',
    time: '7pm – 10pm',
    dates: ['29th June – 3rd July', '14th–18th Dec'],
    mode: 'Online / In-person',
    price: 15000,
    level: 'All Levels',
    desc: 'Heal the root wounds that create painful relationship patterns. Connect with and nurture your inner child to restore joy, trust and healthy love in your life.',
    highlights: ['Inner child reconnection', 'Relationship pattern healing', 'Emotional wound clearing', 'Healthy love practices'],
    tag: null,
    tagColor: '',
  },
  {
    id: 'past-life-regression-therapy',
    slug: 'past-life-regression-therapy',
    title: 'Past Life Regression Therapy Course',
    duration: '8 Days',
    time: '7pm – 10pm',
    dates: ['31st July – 7th Aug', '30th Oct – 6th Nov'],
    mode: 'In-person / Online',
    price: 21600,
    level: 'Professional',
    desc: 'A comprehensive professional training in Past Life Regression Therapy. Learn to guide clients through past life journeys to heal deep karmic wounds and patterns.',
    highlights: ['Induction & regression techniques', 'Karmic healing protocols', 'Professional case studies', 'Certification upon completion'],
    tag: 'Flagship',
    tagColor: '#6B2D8B',
  },
  {
    id: 'free-weekend-meditation',
    slug: 'free-weekend-meditation',
    title: 'Free Weekend Meditation',
    duration: 'Every Sat & Sun',
    time: '9pm – 10pm',
    dates: ['Every Saturday', 'Every Sunday'],
    mode: 'Online',
    price: 0,
    level: 'All Levels',
    desc: 'A peaceful weekly space to relax, heal and reconnect with your inner self through guided meditation. Open to everyone, every Saturday and Sunday.',
    highlights: ['Guided relaxation', 'Energy reconnection', 'Stress relief', 'Open to all — no experience needed'],
    tag: 'Free',
    tagColor: '#0B8C87',
  },
]

/** Look up a course by its slug/id. Returns undefined when not found. */
export function getCourseBySlug(slug: string | null | undefined): Course | undefined {
  if (!slug) return undefined
  return COURSES.find((c) => c.slug === slug || c.id === slug)
}

/** Format a whole-rupee amount using the Indian numbering system, e.g. 21600 -> "21,600". */
export function formatINR(amount: number): string {
  return amount.toLocaleString('en-IN')
}

/** Human-readable price label used across the UI, e.g. "₹6,300" or "Free". */
export function priceLabel(course: Pick<Course, 'price'>): string {
  return course.price > 0 ? `₹${formatINR(course.price)}` : 'Free'
}

/** True when the course requires no payment. */
export function isFreeCourse(course: Pick<Course, 'price'>): boolean {
  return course.price <= 0
}
