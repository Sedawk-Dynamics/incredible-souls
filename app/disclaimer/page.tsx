import { PolicyLayout, Section, P, ContactCard, Copyright } from '@/components/policy-layout'

export const metadata = {
  title: 'Disclaimer | Incredible Souls',
  description: 'Disclaimer for services, programs and content provided by Incredible Souls.',
}

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Disclaimer"
      lastUpdated="July 22, 2026"
      intro={
        <>
          <p className="mb-4">
            The information, services, programs, courses, meditations, workshops, healing sessions, retreats, and
            educational content provided by <strong>Incredible Souls</strong> are intended for personal growth,
            spiritual exploration, self-awareness, and holistic well-being.
          </p>
          <p>
            By accessing our website or participating in any of our offerings, you acknowledge and agree to the
            following:
          </p>
        </>
      }
    >
      <Section title="Personal Responsibility">
        <P>
          Every individual experiences personal growth and healing differently. Your progress, insights, and outcomes
          depend upon many factors, including your willingness to participate, personal circumstances, mindset, and
          consistent practice.
        </P>
        <P>
          While we strive to provide high-quality guidance and educational experiences, we cannot guarantee any
          specific personal, emotional, spiritual, financial, professional, or relationship outcomes.
        </P>
      </Section>

      <Section title="No Medical, Psychological, or Legal Advice">
        <P>
          Our services are intended to complement personal development and spiritual well-being. They are{' '}
          <strong>not</strong> intended to replace professional medical, psychiatric, psychological, legal, financial,
          or therapeutic advice, diagnosis, or treatment.
        </P>
        <P>
          If you have a medical or mental health condition, or any concerns regarding your well-being, we encourage
          you to seek guidance from a qualified healthcare professional before participating in our programs.
        </P>
        <P>
          Never discontinue prescribed medical treatment or ignore professional advice based on information provided
          through our website or services.
        </P>
      </Section>

      <Section title="Educational and Spiritual Purposes">
        <P>
          All content published on this website—including articles, videos, guided meditations, healing sessions,
          workshops, online courses, downloadable resources, and live events—is provided solely for educational,
          informational, and spiritual purposes.
        </P>
        <P>
          The information shared reflects the experience, knowledge, and perspectives of the facilitators and should
          not be interpreted as guaranteed results or universally applicable outcomes.
        </P>
      </Section>

      <Section title="No Guarantees of Results">
        <P>
          Healing, meditation, energy work, Reiki, Lama Fera, Akashic Records, Past Life Regression, Inner Child
          Healing, and other holistic modalities are highly individual experiences.
        </P>
        <P>
          Although many participants report meaningful personal transformation, individual experiences vary
          significantly. Incredible Souls makes no guarantees, promises, or representations regarding specific
          results or benefits.
        </P>
      </Section>

      <Section title="Testimonials">
        <P>
          Testimonials and participant experiences shared on our website or social media represent individual
          experiences and are provided for illustrative purposes only.
        </P>
        <P>
          They should not be interpreted as a promise or guarantee that every participant will experience similar
          outcomes.
        </P>
      </Section>

      <Section title="Third-Party Content">
        <P>
          Our website may contain links to third-party websites, articles, videos, or resources for your convenience.
        </P>
        <P>
          Incredible Souls does not control or endorse the content, policies, or practices of these external
          websites and is not responsible for their accuracy, availability, or services.
        </P>
      </Section>

      <Section title="Limitation of Liability">
        <P>
          By using this website or participating in our programs, you accept full responsibility for your own
          decisions and actions.
        </P>
        <P>
          To the maximum extent permitted by applicable law, Incredible Souls, its founders, facilitators,
          employees, affiliates, and representatives shall not be liable for any direct, indirect, incidental,
          consequential, or special damages arising from the use of our website, products, services, courses,
          workshops, healing sessions, or educational materials.
        </P>
      </Section>

      <Section title="Changes to This Disclaimer">
        <P>
          We may revise this Disclaimer from time to time to reflect changes in our services, legal requirements, or
          operational practices. Any updates will be published on this page along with the revised effective date.
        </P>
      </Section>

      <Section title="Contact Us">
        <P>If you have any questions regarding this Disclaimer, please contact us:</P>
        <ContactCard
          name="Reshu Gupta"
          note="By using this website and participating in our services, you acknowledge that you have read, understood, and agreed to this Disclaimer."
        />
      </Section>

      <Copyright />
    </PolicyLayout>
  )
}
