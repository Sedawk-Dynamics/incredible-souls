import Razorpay from 'razorpay'
import { createHmac, timingSafeEqual } from 'crypto'

/**
 * Server-only Razorpay helpers.
 * Secrets (RAZORPAY_KEY_SECRET) live only here / in env — never sent to the client.
 * The client only ever sees NEXT_PUBLIC_RAZORPAY_KEY_ID.
 */

const keyId = process.env.RAZORPAY_KEY_ID
const keySecret = process.env.RAZORPAY_KEY_SECRET

let instance: Razorpay | null = null

/** Lazily create the Razorpay client so the app builds without keys present. */
export function getRazorpay(): Razorpay {
  if (!keyId || !keySecret) {
    throw new Error('Razorpay keys are not configured (RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET).')
  }
  if (!instance) {
    instance = new Razorpay({ key_id: keyId, key_secret: keySecret })
  }
  return instance
}

export function isRazorpayConfigured(): boolean {
  return Boolean(keyId && keySecret)
}

export interface CreateOrderInput {
  /** Amount in whole rupees. Converted to paise internally. */
  amountInRupees: number
  receipt: string
  notes?: Record<string, string>
}

export async function createOrder({ amountInRupees, receipt, notes }: CreateOrderInput) {
  const razorpay = getRazorpay()
  return razorpay.orders.create({
    amount: Math.round(amountInRupees * 100), // paise
    currency: 'INR',
    receipt,
    notes,
  })
}

/**
 * Verify the payment signature returned by Razorpay checkout.
 * signature === HMAC_SHA256(order_id + "|" + payment_id, key_secret).
 * Uses a constant-time comparison to avoid timing attacks.
 */
export function verifyPaymentSignature(params: {
  orderId: string
  paymentId: string
  signature: string
}): boolean {
  if (!keySecret) {
    throw new Error('RAZORPAY_KEY_SECRET is not configured.')
  }
  const expected = createHmac('sha256', keySecret)
    .update(`${params.orderId}|${params.paymentId}`)
    .digest('hex')

  const a = Buffer.from(expected, 'utf8')
  const b = Buffer.from(params.signature, 'utf8')
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}
