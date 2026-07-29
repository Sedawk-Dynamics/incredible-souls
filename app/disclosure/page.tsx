import { PolicyLayout, Section, P, ContactCard, Copyright } from '@/components/policy-layout'

export const metadata = {
  title: 'Disclosure | Incredible Souls',
  description: 'Editorial independence, collaborations and affiliate disclosure for Incredible Souls.',
}

export default function DisclosurePage() {
  return (
    <PolicyLayout
      title="Disclosure"
      lastUpdated="July 22, 2026"
      intro={
        <p>
          At <strong>Incredible Souls</strong>, we believe in transparency, authenticity, and integrity in
          everything we share with our community. This Disclosure Policy explains how content published on our website
          is created and how any collaborations or affiliations are handled.
        </p>
      }
    >
      <Section title="Editorial Independence">
        <P>
          The articles, blogs, guided meditations, educational resources, videos, and other content published on this
          website are created by <strong>Reshu Gupta</strong> and the Incredible Souls team.
        </P>
        <P>
          The views and opinions expressed are based on personal experience, professional knowledge, research, and
          spiritual understanding. They are shared for educational and informational purposes and are intended to
          support personal growth and self-awareness.
        </P>
      </Section>

      <Section title="Collaborations and Recommendations">
        <P>
          From time to time, Incredible Souls may collaborate with organizations, wellness practitioners,
          educational institutions, event organizers, or other professionals whose values align with our mission.
        </P>
        <P>
          If we recommend a product, service, book, course, or resource, it is because we genuinely believe it may
          provide value to our community. Any opinions expressed remain our own and are not influenced by external
          parties.
        </P>
        <P>
          Whenever a collaboration, sponsorship, gifted service, or affiliate relationship exists, we will make
          reasonable efforts to disclose it clearly within the relevant content.
        </P>
      </Section>

      <Section title="Sponsored Content">
        <P>
          We may occasionally publish sponsored articles or collaborate on educational initiatives. Any sponsored
          content will be clearly identified so that visitors can distinguish it from our independent editorial
          content.
        </P>
        <P>Our commitment is to maintain honesty, transparency, and editorial integrity regardless of any partnership.</P>
      </Section>

      <Section title="Affiliate Links">
        <P>
          Some pages on this website may contain affiliate links. If you choose to purchase a product or service
          through one of these links, Incredible Souls may receive a small commission at no additional cost to
          you.
        </P>
        <P>We only recommend products, services, or resources that we believe are relevant and beneficial to our audience.</P>
      </Section>

      <Section title="Professional Relationships">
        <P>Reshu Gupta is the Founder and Lead Healing Facilitator of <strong>Incredible Souls</strong>.</P>
        <P>
          Through Incredible Souls, we offer holistic healing sessions, meditation programs, spiritual education,
          wellness workshops, retreats, certifications, and personal development initiatives for individuals,
          organizations, and communities.
        </P>
        <P>
          These professional activities may naturally influence the topics discussed on this website. However, our
          commitment remains to provide balanced, ethical, and authentic information.
        </P>
      </Section>

      <Section title="Accuracy of Information">
        <P>
          We make every reasonable effort to ensure that the information published on this website is accurate and up
          to date. However, knowledge, research, and best practices continue to evolve, and we cannot guarantee that
          all information will always remain complete or current.
        </P>
        <P>
          Visitors are encouraged to exercise their own judgment and, where appropriate, seek advice from qualified
          professionals before making personal, financial, legal, medical, or other important decisions.
        </P>
      </Section>

      <Section title="Contact Us">
        <P>
          If you have any questions regarding this Disclosure Policy or any content published on this website, please
          contact us:
        </P>
        <ContactCard name="Reshu Gupta" role="Founder & Lead Healing Facilitator" />
      </Section>

      <Copyright />
    </PolicyLayout>
  )
}
