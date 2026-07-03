/** Persisted shape of an enrollment record. */
export type PaymentStatus = 'success' | 'failed' | 'free'

export interface EnrollmentRecord {
  /** Human-friendly unique enrollment id, e.g. IS-ABCD-1234. */
  enrollmentId: string
  name: string
  phone: string
  email: string
  message: string
  courseId: string
  courseName: string
  /** Whole rupees charged (0 for free courses). */
  price: number
  paymentId: string | null
  orderId: string | null
  paymentStatus: PaymentStatus
  /** ISO timestamp of the transaction. */
  transactionDate: string
  createdAt: Date
}
