import { type Course } from '@/lib/courses'
import { normalizeIndianPhone } from './validation'
import { generateEnrollmentId } from './id'
import { sendEnrollmentEmails } from '@/lib/email/send'
import type { EnrollmentRecord, PaymentStatus } from './types'

export interface FinalizeInput {
  course: Course
  name: string
  email: string
  phone: string
  message?: string
  paymentId?: string | null
  orderId?: string | null
  status: PaymentStatus
  /** Amount actually charged in whole rupees (after any discount). */
  amountCharged: number
}

/**
 * Build the enrollment record and email it (admin + student).
 * No database is used — enrollment data lives only in the emails that are sent.
 * This single path is shared by both the free-enrollment and verified-payment flows.
 */
export async function finalizeEnrollment(input: FinalizeInput): Promise<{
  record: EnrollmentRecord
  emails: { adminSent: boolean; studentSent: boolean }
}> {
  const now = new Date()
  const record: EnrollmentRecord = {
    enrollmentId: generateEnrollmentId(),
    name: input.name.trim(),
    phone: normalizeIndianPhone(input.phone),
    email: input.email.trim().toLowerCase(),
    message: (input.message || '').trim(),
    courseId: input.course.id,
    courseName: input.course.title,
    price: input.amountCharged,
    paymentId: input.paymentId ?? null,
    orderId: input.orderId ?? null,
    paymentStatus: input.status,
    transactionDate: now.toISOString(),
    createdAt: now,
  }

  const emails = await sendEnrollmentEmails(record)
  return { record, emails }
}
