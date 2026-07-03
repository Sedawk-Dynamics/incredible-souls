import { z } from 'zod'

/**
 * Shared validation for the enrollment flow.
 * Used both on the client (react-hook-form) and re-run on the server (never trust the client).
 */

// Indian mobile: 10 digits starting 6-9, optionally prefixed with +91 / 0 / spaces / dashes.
const INDIAN_MOBILE_REGEX = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/

export const enrollmentFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name')
    .max(80, 'Name is too long'),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s\-]/g, ''))
    .refine((v) => INDIAN_MOBILE_REGEX.test(v), 'Enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Enter a valid email address')
    .max(120, 'Email is too long'),
  message: z
    .string()
    .trim()
    .max(1000, 'Message is too long')
    .optional()
    .or(z.literal('')),
  // Optional coupon code — structure only for future use.
  coupon: z.string().trim().max(40).optional().or(z.literal('')),
})

export type EnrollmentFormValues = z.infer<typeof enrollmentFormSchema>

/** Server-side payload for creating an order / verifying a payment (includes the course id). */
export const enrollmentRequestSchema = enrollmentFormSchema.extend({
  courseId: z.string().trim().min(1, 'Missing course'),
})

export type EnrollmentRequest = z.infer<typeof enrollmentRequestSchema>

/** Fields returned by Razorpay checkout that the backend must verify. */
export const verifyPaymentSchema = enrollmentRequestSchema.extend({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
})

export type VerifyPaymentRequest = z.infer<typeof verifyPaymentSchema>

/** Normalise a phone number to a clean +91XXXXXXXXXX form for storage/prefill. */
export function normalizeIndianPhone(raw: string): string {
  const digits = raw.replace(/[\s\-]/g, '').replace(/^\+?91/, '').replace(/^0/, '')
  return `+91${digits}`
}
