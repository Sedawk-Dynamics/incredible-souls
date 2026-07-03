/**
 * Coupon support — STRUCTURE ONLY (scaffolding for future work).
 *
 * The API already threads an optional `coupon` code through validation. When real
 * coupons are needed, populate COUPONS (or back it with the DB) and the create-order
 * route will automatically apply the discount because it calls `applyCoupon`.
 */

export interface Coupon {
  code: string
  /** 'percent' => percent off, 'flat' => flat rupees off. */
  type: 'percent' | 'flat'
  value: number
  active: boolean
}

// Intentionally empty for now — no live coupons.
const COUPONS: Record<string, Coupon> = {}

export interface CouponResult {
  applied: boolean
  code: string | null
  discount: number
  finalAmount: number
  reason?: string
}

/**
 * Apply a coupon to a base amount (whole rupees).
 * With no coupon (or an unknown/inactive one) it returns the amount unchanged.
 */
export function applyCoupon(baseAmount: number, code?: string | null): CouponResult {
  if (!code) {
    return { applied: false, code: null, discount: 0, finalAmount: baseAmount }
  }
  const coupon = COUPONS[code.trim().toUpperCase()]
  if (!coupon || !coupon.active) {
    return { applied: false, code, discount: 0, finalAmount: baseAmount, reason: 'Invalid coupon' }
  }
  const discount =
    coupon.type === 'percent'
      ? Math.round((baseAmount * coupon.value) / 100)
      : Math.min(coupon.value, baseAmount)
  return { applied: true, code: coupon.code, discount, finalAmount: Math.max(0, baseAmount - discount) }
}
