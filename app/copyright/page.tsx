import { PolicyLayout, Section, P, UL, ContactCard, Copyright as CopyrightLine } from '@/components/policy-layout'

export const metadata = {
  title: 'Copyright & Intellectual Property | Incredible Souls',
  description: 'Copyright and intellectual property notice for all Incredible Souls materials.',
}

export default function CopyrightPage() {
  return (
    <PolicyLayout title="Copyright & Intellectual Property">
      <Section title="Copyright & Intellectual Property Notice">
        <P>
          All training materials, course content, meditation recordings, healing scripts, videos, audio sessions,
          workbooks, presentations, manuals, digital resources and any other educational materials provided by{' '}
          <strong>Incredible Souls</strong> are the exclusive intellectual property of Incredible Souls and are
          protected under applicable Indian and international copyright, trademark and intellectual property laws.
        </P>
        <P>
          Your enrolment grants you a limited, personal, non-exclusive and non-transferable licence to access these
          materials solely for your own individual learning and personal use.
        </P>
      </Section>

      <Section title="Except With Prior Written Permission, You May Not:">
        <UL
          items={[
            'Copy, reproduce or duplicate any part of the materials.',
            'Share, distribute, publish or transmit the content to any individual or organization.',
            'Sell, resell, sublicense or commercially exploit the materials.',
            'Modify, edit, translate, adapt or create derivative works from the content.',
            'Upload any material to websites, social media platforms, cloud storage, file-sharing services or other public or private platforms.',
            'Record, download, screen-capture or reproduce live sessions or digital content except where expressly permitted.',
            'Allow any third party to access, use or benefit from your purchased materials or course account.',
          ]}
        />
      </Section>

      <Section title="Enforcement">
        <P>
          Any unauthorized use, reproduction, distribution or commercial exploitation of our intellectual property
          constitutes a violation of this Agreement and may result in immediate suspension or termination of your
          access without refund.
        </P>
        <P>
          Incredible Souls reserves all legal rights and remedies available under applicable copyright, intellectual
          property and contract laws. Unauthorized use of our proprietary materials may lead to civil proceedings,
          claims for damages, injunctive relief and, where applicable, criminal action under the relevant laws.
        </P>
      </Section>

      <Section title="Support & Contact">
        <P>
          Our team is available to assist you with enquiries relating to courses, healing sessions, workshops,
          retreats, memberships and general support.
        </P>
        <P>
          <strong>Support Hours:</strong> Monday to Saturday, 10:00 AM – 6:00 PM (Indian Standard Time – IST)
        </P>
        <ContactCard
          name="Incredible Souls"
          company="Registered Office"
          address="Pune 411021, Maharashtra, India"
          website="www.incrediblesouls.co.in"
          email="byincrediblesouls@gmail.com"
          note="For the quickest response, please include your full name, registered email address, contact number and the details of your enquiry when contacting us."
        />
      </Section>

      <CopyrightLine text="© 2026 Incredible Souls. All Rights Reserved." />
    </PolicyLayout>
  )
}
