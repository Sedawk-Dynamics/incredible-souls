import { NextResponse } from 'next/server'
import { getCourseBySlug } from '@/lib/courses'
import { verifyPaymentSchema } from '@/lib/enrollment/validation'
import { verifyPaymentSignature } from '@/lib/payments/razorpay'
import { finalizeEnrollment } from '@/lib/enrollment/service'
import { applyCoupon } from '@/lib/coupons'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/enrollment/verify-payment
 *
 * Verifies the Razorpay signature ON THE SERVER (frontend success is never trusted).
 * On success: emails admin (course lead) + student. No database is used.
 * On failure: logs the failure to the server console for debugging and returns 400.
 */
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = verifyPaymentSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const {
    courseId,
    name,
    email,
    phone,
    message,
    coupon,
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = parsed.data

  const course = getCourseBySlug(courseId)
  if (!course) {
    return NextResponse.json({ error: 'Unknown course' }, { status: 404 })
  }

  // 1) Verify the signature — the single source of payment truth.
  const isValid = verifyPaymentSignature({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
  })

  if (!isValid) {
    console.error('[verify-payment] Signature verification failed', {
      courseId: course.id,
      email,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    })
    return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 })
  }

  // 2) Re-derive the charged amount server-side (never trust the client).
  const { finalAmount } = applyCoupon(course.price, coupon)

  // 3) Email admin (course lead) + student.
  try {
    const { record, emails } = await finalizeEnrollment({
      course,
      name,
      email,
      phone,
      message,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      status: 'success',
      amountCharged: finalAmount,
    })

    return NextResponse.json({
      success: true,
      enrollmentId: record.enrollmentId,
      courseName: record.courseName,
      amount: record.price,
      paymentId: record.paymentId,
      name: record.name,
      emailSent: emails.studentSent,
    })
  } catch (err) {
    console.error('[verify-payment] post-payment processing error:', err)
    // Payment was valid — return a soft success so the user isn't asked to pay again.
    return NextResponse.json({
      success: true,
      warning: 'Payment received. Confirmation email is being processed.',
      paymentId: razorpay_payment_id,
      courseName: course.title,
      amount: finalAmount,
    })
  }
}
