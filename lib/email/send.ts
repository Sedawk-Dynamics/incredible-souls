import { getTransporter, fromAddress, isEmailConfigured } from './transporter'
import { adminEnrollmentEmail, studentConfirmationEmail } from './templates'
import type { EnrollmentRecord } from '@/lib/enrollment/types'

/**
 * Send both the admin (course-lead) notification and the student confirmation.
 * Course leads go to TO_EMAIL_COURCE. Emails never throw and break the payment flow.
 */
export async function sendEnrollmentEmails(
  record: EnrollmentRecord
): Promise<{ adminSent: boolean; studentSent: boolean }> {
  if (!isEmailConfigured()) {
    console.warn('[email] SMTP not configured — skipping enrollment emails.')
    return { adminSent: false, studentSent: false }
  }

  const courseLeadInbox = process.env.TO_EMAIL_COURCE || process.env.TO_EMAIL
  const transporter = getTransporter()
  const from = fromAddress()

  const results = await Promise.allSettled([
    courseLeadInbox
      ? transporter.sendMail({ from, to: courseLeadInbox, ...adminEnrollmentEmail(record) })
      : Promise.reject(new Error('TO_EMAIL_COURCE not set')),
    transporter.sendMail({ from, to: record.email, ...studentConfirmationEmail(record) }),
  ])

  const [admin, student] = results
  if (admin.status === 'rejected') console.error('[email] course-lead email failed:', admin.reason)
  if (student.status === 'rejected') console.error('[email] student email failed:', student.reason)

  return {
    adminSent: admin.status === 'fulfilled',
    studentSent: student.status === 'fulfilled',
  }
}
