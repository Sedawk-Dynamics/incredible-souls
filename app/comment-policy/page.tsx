import { PolicyLayout, Section, Sub, P, UL, ContactCard, Copyright } from '@/components/policy-layout'

export const metadata = {
  title: 'Comment Policy | Incredible Souls',
  description: 'Community guidelines and comment policy for the Incredible Souls website and blog.',
}

export default function CommentPolicyPage() {
  return (
    <PolicyLayout
      title="Comment Policy"
      lastUpdated="July 22, 2026"
      intro={
        <>
          <p className="mb-4">
            At <strong>Incredible Souls</strong>, we believe that meaningful conversations create opportunities for
            learning, healing, and personal growth. Our website and blog are intended to be safe and respectful spaces
            where people from diverse backgrounds can share thoughts, experiences, and perspectives.
          </p>
          <p>
            We warmly welcome constructive discussions and encourage every visitor to contribute with kindness and
            authenticity.
          </p>
        </>
      }
    >
      <Section title="Our Community Guidelines">
        <P>When participating in discussions, we request that you:</P>
        <UL
          items={[
            'Be respectful and courteous toward all members of the community.',
            'Share your thoughts in a constructive and meaningful manner.',
            'Respect differing opinions, beliefs, and life experiences.',
            'Focus on ideas and discussions rather than personal criticism.',
            'Use language that contributes positively to the community.',
          ]}
        />
        <P>Healthy discussions are encouraged, and differing viewpoints are welcome when expressed respectfully.</P>
      </Section>

      <Section title="Comments That May Be Removed">
        <P>To maintain a positive environment, we reserve the right to edit, moderate, or remove comments that include:</P>
        <UL
          items={[
            'Personal attacks, harassment, or intimidation.',
            'Hate speech, discrimination, or abusive language.',
            'Defamatory, misleading, or unlawful statements.',
            'Obscene, offensive, or inappropriate content.',
            'Spam, promotional material, or unsolicited advertisements.',
            'Repetitive posts or irrelevant comments.',
            'Links intended solely for self-promotion or search engine manipulation.',
          ]}
        />
        <P>Repeated violations of these guidelines may result in temporary or permanent restriction from commenting on our website.</P>
      </Section>

      <Section title="Responsibility for Comments">
        <P>The opinions expressed by visitors are their own and do not necessarily reflect the views of Incredible Souls or its team.</P>
        <P>
          While we encourage open dialogue, we reserve the right to moderate discussions whenever necessary to maintain
          a respectful, safe, and welcoming environment.
        </P>
      </Section>

      <Section title="Use of Real Identity">
        <P>
          Where possible, we encourage participants to use their real names or a consistent identity when commenting.
          Authentic conversations help build trust within our community.
        </P>
      </Section>

      <Section title="Policy Updates">
        <P>
          This Comment Policy may be updated from time to time to reflect changes in our community standards or
          operational practices. Any revisions will be published on this page with the updated effective date.
        </P>
      </Section>

      <Section title="Contact Us">
        <P>If you have any questions regarding this Comment Policy or wish to report inappropriate content, please contact us:</P>
        <ContactCard
          name="Reshu Gupta"
          note="Thank you for helping us create a respectful, compassionate, and inspiring community where everyone feels welcome to learn, share, and grow."
        />
      </Section>

      <Copyright />
    </PolicyLayout>
  )
}
