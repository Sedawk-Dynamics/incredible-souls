import Link from 'next/link'
import { Toaster } from 'sonner'
import { Clock, CalendarClock, Monitor, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import EnrollmentForm from '@/components/enrollment/enrollment-form'
import { getCourseBySlug, priceLabel, isFreeCourse } from '@/lib/courses'

export const metadata = {
  title: 'Enroll | Incredible Souls',
  description: 'Enroll in a healing course or workshop with Incredible Souls.',
}

// searchParams is async in the Next.js App Router (Next 15/16).
export default async function EnrollPage({
  searchParams,
}: {
  searchParams: Promise<{ course?: string }>
}) {
  const { course: slug } = await searchParams
  const course = getCourseBySlug(slug)

  // Unknown / missing course — graceful fallback, don't crash the flow.
  if (!course) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20" style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 100%)' }}>
          <div className="text-center max-w-md">
            <h1 className="font-sans text-3xl font-light text-[#2D1B3D] mb-3">Course not found</h1>
            <p className="font-body text-[#6B5B7B] mb-8">
              We couldn&apos;t find the course you&apos;re trying to enroll in. Please choose one from our programmes.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Browse Courses
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const free = isFreeCourse(course)

  return (
    <>
      <Navbar />
      <Toaster position="top-center" richColors />
      <main>
        {/* Header */}
        <section className="relative pt-32 pb-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 40%, #E9DFF0 100%)' }}>
          <div className="absolute inset-0 texture-bg opacity-20" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <Link href="/courses" className="inline-flex items-center gap-1.5 font-body text-sm text-[#6B2D8B] hover:text-[#9B59B6] transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Courses
            </Link>
            <div className="ornament-divider mb-3">
              <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Enrollment</span>
            </div>
            <h1 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance">
              Enroll in <span className="italic text-brand-gradient">{course.title}</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 bg-[#FFF9F0]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Course summary */}
            <aside className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-[#E9DFF0] overflow-hidden sticky top-28">
                <div className="p-6" style={{ background: 'linear-gradient(135deg, #F5EFF8, #FFF9F0)' }}>
                  <h2 className="font-sans text-xl font-medium text-[#2D1B3D] leading-snug mb-4">{course.title}</h2>
                  <div className="flex items-baseline gap-2">
                    <span className="font-body text-xs text-[#9B8BAB] uppercase tracking-widest">{free ? 'Fee' : 'Total'}</span>
                    <span className="font-sans text-3xl font-semibold text-brand-gradient">{priceLabel(course)}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-3 border-t border-[#E9DFF0]">
                  <div className="flex items-center gap-2 font-body text-sm text-[#6B5B7B]">
                    <Clock className="w-4 h-4 text-[#9B59B6]" /> {course.duration} · {course.time}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-[#6B5B7B]">
                    <Monitor className="w-4 h-4 text-[#9B59B6]" /> {course.mode}
                  </div>
                  <div className="flex items-start gap-2 font-body text-sm text-[#6B5B7B]">
                    <CalendarClock className="w-4 h-4 text-[#9B59B6] mt-0.5 shrink-0" />
                    <span>{course.dates.join(' · ')}</span>
                  </div>
                </div>

                <div className="p-6 border-t border-[#E9DFF0]">
                  <p className="font-body text-xs font-semibold text-[#2D1B3D] uppercase tracking-widest mb-3">You will learn</p>
                  <ul className="flex flex-col gap-2">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 font-body text-sm text-[#6B5B7B]">
                        <CheckCircle2 className="w-4 h-4 text-[#9B59B6] mt-0.5 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-[#E9DFF0] p-6 lg:p-8">
                <h2 className="font-sans text-2xl font-light text-[#2D1B3D] mb-1">Your details</h2>
                <p className="font-body text-sm text-[#9B8BAB] mb-6">
                  {free
                    ? 'Fill in your details to confirm your free enrollment.'
                    : 'Fill in your details, then complete secure payment to confirm your seat.'}
                </p>
                <EnrollmentForm course={course} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
