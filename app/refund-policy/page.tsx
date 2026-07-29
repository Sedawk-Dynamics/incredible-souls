import { PolicyLayout, Section, P, UL, ContactCard, Copyright } from '@/components/policy-layout'

export const metadata = {
  title: 'Refund Policy | Incredible Souls',
  description: 'Refund, rescheduling and cancellation terms for Incredible Souls programs.',
}

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      lastUpdated="July 22, 2026"
      intro={
        <>
          <p className="mb-4">
            At <strong>Incredible Souls</strong>, we are committed to offering transformational learning
            experiences, healing programs, workshops, courses, and memberships designed with care and dedication. We
            sincerely appreciate the trust you place in us.
          </p>
          <p>
            We encourage all participants to carefully review the program details, eligibility, schedule, and
            suitability before completing their registration.
          </p>
        </>
      }
    >
      <Section title="Refund Policy">
        <P>
          Unless expressly stated otherwise for a specific program,{' '}
          <strong>all purchases made through Incredible Souls are final and non-refundable.</strong>
        </P>
        <P>This includes, but is not limited to:</P>
        <UL
          items={[
            'Healing Sessions',
            'Past Life Regression (PLR) Sessions',
            'Akashic Records Sessions',
            'Reiki Courses',
            'Lama Fera Courses',
            'Meditation Programs',
            'Workshops and Retreats',
            'Online and Offline Courses',
            'Certification Programs',
            'Memberships and Subscription Plans',
            'Digital Products and Downloadable Resources',
            'Event Registrations',
          ]}
        />
        <P>
          As many of our offerings involve immediate access to digital content, reserved session slots, personalized
          preparation, or limited-capacity events, we are unable to provide refunds once a registration or purchase
          has been confirmed.
        </P>
      </Section>

      <Section title="Rescheduling">
        <P>
          Where applicable, requests to reschedule a healing session or consultation may be accommodated at the sole
          discretion of Incredible Souls, subject to availability and sufficient prior notice.
        </P>
      </Section>

      <Section title="Exceptional Circumstances">
        <P>
          In rare and exceptional situations, Incredible Souls may review individual requests on a case-by-case
          basis. Any decision regarding refunds, credits, transfers, or rescheduling shall remain solely at the
          discretion of Incredible Souls.
        </P>
      </Section>

      <Section title="Contact Us">
        <P>
          If you have any questions regarding this Refund Policy or require assistance with your booking, please
          contact us:
        </P>
        <ContactCard
          name="Reshu Gupta"
          note="We appreciate your understanding and thank you for choosing Incredible Souls to be a part of your personal growth and healing journey."
        />
      </Section>

      <Copyright />
    </PolicyLayout>
  )
}
