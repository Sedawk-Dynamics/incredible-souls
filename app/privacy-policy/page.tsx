import { PolicyLayout, Section, Sub, P, UL, ContactCard, Copyright } from '@/components/policy-layout'

export const metadata = {
  title: 'Privacy Policy | Incredible Souls',
  description: 'How Incredible Souls collects, uses, stores and safeguards your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="July 22, 2026"
      intro={
        <>
          <p className="mb-4">
            At <strong>Incredible Souls</strong>, we value your privacy and are committed to protecting the
            personal information you choose to share with us. This Privacy Policy explains how we collect, use,
            store, and safeguard your information when you visit our website or use our services.
          </p>
          <p>
            By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </>
      }
    >
      <Section title="Information We Collect">
        <Sub title="Personal Information">
          <P>We may collect personal information that you voluntarily provide, including:</P>
          <UL
            items={[
              'Name',
              'Email address',
              'Phone number',
              'Postal or mailing address',
              'Any other information you choose to share through forms, registrations, bookings, or inquiries',
            ]}
          />
          <P>
            You may browse certain sections of our website without providing personal information. However, some
            features or services may not be available unless the required information is provided.
          </P>
        </Sub>

        <Sub title="Non-Personal Information">
          <P>When you visit our website, we may automatically collect certain technical information, such as:</P>
          <UL
            items={[
              'Browser type and version',
              'Device type',
              'Operating system',
              'IP address',
              'Pages visited',
              'Date and time of access',
              'Internet service provider',
              'Other standard website analytics information',
            ]}
          />
          <P>
            This information helps us understand how visitors use our website and improve their overall experience.
          </P>
        </Sub>

        <Sub title="Cookies">
          <P>
            Our website may use cookies and similar technologies to improve functionality, enhance user experience,
            remember preferences, and analyze website performance.
          </P>
          <P>
            Most web browsers allow you to manage or disable cookies through their settings. Please note that
            disabling cookies may affect the functionality of certain features of the website.
          </P>
        </Sub>
      </Section>

      <Section title="How We Use Your Information">
        <P>The information we collect may be used to:</P>
        <UL
          items={[
            'Provide and improve our services.',
            'Personalize your experience on our website.',
            'Respond to your inquiries and support requests.',
            'Process registrations, bookings, or service requests.',
            'Send important updates related to our services.',
            'Improve website functionality and user experience.',
            'Maintain website security and prevent misuse.',
            'Comply with applicable legal obligations.',
          ]}
        />
        <P>
          We will only use your personal information for purposes consistent with this Privacy Policy or as otherwise
          permitted by law.
        </P>
      </Section>

      <Section title="Data Security">
        <P>
          We implement appropriate administrative, technical, and organizational measures to protect your personal
          information against unauthorized access, misuse, alteration, disclosure, or loss.
        </P>
        <P>
          While we strive to maintain a secure environment, no method of internet transmission or electronic storage
          can guarantee absolute security. We encourage users to take reasonable precautions when sharing personal
          information online.
        </P>
      </Section>

      <Section title="Sharing of Information">
        <P>We respect your privacy and do not sell, rent, or trade your personal information.</P>
        <P>
          We may share limited information with trusted service providers or business partners who assist in
          operating our website or delivering our services, provided they are required to maintain the
          confidentiality of your information.
        </P>
        <P>We may also disclose information where required by applicable law or to protect our legal rights.</P>
      </Section>

      <Section title="Advertising and Third-Party Services">
        <P>
          Our website may display advertisements or include links to third-party websites or services. These third
          parties may use cookies or similar technologies according to their own privacy policies.
        </P>
        <P>
          We encourage users to review the privacy policies of any third-party websites they visit, as we are not
          responsible for their privacy practices.
        </P>
      </Section>

      <Section title="Google Advertising Services">
        <P>
          If Google advertising services are used on our website, Google may use cookies and similar technologies to
          display advertisements based on your browsing activity.
        </P>
        <P>
          For more information about Google&apos;s advertising and privacy practices, please refer to Google&apos;s
          Privacy Policy.
        </P>
      </Section>

      <Section title="Changes to This Privacy Policy">
        <P>
          We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal
          requirements, or business practices.
        </P>
        <P>
          Any updates will be published on this page along with the revised effective date. We encourage you to
          review this page periodically to stay informed.
        </P>
      </Section>

      <Section title="Your Acceptance">
        <P>
          By continuing to use our website, you acknowledge and agree to the terms of this Privacy Policy and any
          future updates.
        </P>
      </Section>

      <Section title="Contact Us">
        <P>
          If you have any questions, requests, or concerns regarding this Privacy Policy or our data practices, please
          contact:
        </P>
        <ContactCard
          name="Reshu Gupta"
          company="Incredible Souls"
          note="We will make every reasonable effort to respond to your inquiry promptly."
        />
      </Section>

      <Copyright />
    </PolicyLayout>
  )
}
