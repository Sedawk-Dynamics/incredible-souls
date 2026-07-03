import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SuccessCard from '@/components/enrollment/success-card'

export const metadata = {
  title: 'Enrollment Successful | Incredible Souls',
}

export default async function EnrollmentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ eid?: string; course?: string; amount?: string; name?: string; pid?: string }>
}) {
  const sp = await searchParams

  return (
    <>
      <Navbar />
      <main
        className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20"
        style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 40%, #E9DFF0 100%)' }}
      >
        <SuccessCard
          name={sp.name || ''}
          course={sp.course || ''}
          amount={sp.amount || '0'}
          txnId={sp.pid || sp.eid || ''}
        />
      </main>
      <Footer />
    </>
  )
}
