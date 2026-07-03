import { NextResponse } from 'next/server'
import { getCourseBySlug, isFreeCourse } from '@/lib/courses'
import { enrollmentRequestSchema } from '@/lib/enrollment/validation'
import { finalizeEnrollment } from '@/lib/enrollment/service'
import { createOrder, isRazorpayConfigured } from '@/lib/payments/razorpay'
import { applyCoupon } from '@/lib/coupons'
import { generateEnrollmentId } from '@/lib/enrollment/id'

// This route talks to Razorpay — must run on the Node.js runtime, never edge-cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * POST /api/enrollment/create-order
 *
 * Validates the enrollment, derives the authoritative amount from the course catalog
 * (never trusting any client-sent amount), and either:
 *  - free course  -> finalizes immediately (sends emails), returns { free: true }
 *  - paid course  -> creates a Razorpay order and returns order details for checkout.
 */
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = enrollmentRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { courseId, name, email, phone, message, coupon } = parsed.data
  const course = getCourseBySlug(courseId)
  if (!course) {
    return NextResponse.json({ error: 'Unknown course' }, { status: 404 })
  }

  // Authoritative amount comes from the catalog; coupon (structure-only) may reduce it.
  const { finalAmount } = applyCoupon(course.price, coupon)

  // --- Free course: no payment needed, email immediately. ---
  if (isFreeCourse(course) || finalAmount <= 0) {
    const { record, emails } = await finalizeEnrollment({
      course,
      name,
      email,
      phone,
      message,
      status: 'free',
      amountCharged: 0,
    })
    return NextResponse.json({
      free: true,
      enrollmentId: record.enrollmentId,
      courseName: course.title,
      amount: 0,
      emailSent: emails.studentSent || emails.adminSent,
    })
  }

  // --- Paid course: create a Razorpay order. ---
  if (!isRazorpayConfigured()) {
    return NextResponse.json(
      { error: 'Payments are not configured on the server.' },
      { status: 503 }
    )
  }

  try {
    const receipt = generateEnrollmentId()
    const order = await createOrder({
      amountInRupees: finalAmount,
      receipt,
      notes: { courseId: course.id, courseName: course.title, email },
    })

    return NextResponse.json({
      free: false,
      orderId: order.id,
      amount: order.amount, // paise
      currency: order.currency,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      courseName: course.title,
      priceInRupees: finalAmount,
      receipt,
    })
  } catch (err) {
    console.error('[create-order] Razorpay order creation failed:', err)
    return NextResponse.json({ error: 'Could not create payment order' }, { status: 502 })
  }
}
