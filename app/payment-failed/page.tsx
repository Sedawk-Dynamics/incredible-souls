import Link from 'next/link'
import { XCircle, RefreshCw, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { getCourseBySlug } from '@/lib/courses'

export const metadata = {
  title: 'Payment Failed | Incredible Souls',
}

const REASONS: Record<string, string> = {
  verification: 'We could not verify your payment. If any amount was deducted, it will be refunded automatically.',
  cancelled: 'The payment was cancelled before completion.',
  default: 'Your payment could not be completed. Please try again.',
}

export default async function PaymentFailedPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string; reason?: string }>
}) {
  const { course: slug, reason } = await searchParams
  const course = getCourseBySlug(slug)
  const message = REASONS[reason || 'default'] || REASONS.default
  const retryHref = course ? `/enroll?course=${course.slug}` : '/courses'

  return (
    <>
      <Navbar />
      <main
        className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20"
        style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 40%, #E9DFF0 100%)' }}
      >
        <div className="w-full max-w-lg bg-white rounded-3xl border border-[#E9DFF0] shadow-[0_20px_60px_rgba(107,45,139,0.12)] p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
            <XCircle className="w-11 h-11 text-red-500" />
          </div>
          <h1 className="font-sans text-3xl font-light text-[#2D1B3D] mb-2">Payment Failed</h1>
          <p className="font-body text-[#6B5B7B] mb-8">{message}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={retryHref}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Retry Payment
            </Link>
            <Link
              href="/courses"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#9B59B6]/40 text-[#6B2D8B] font-body text-sm font-medium rounded-full hover:bg-[#E9DFF0]/60 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
