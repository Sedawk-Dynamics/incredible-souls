import { PolicyLayout, Section, Sub, P, UL, ContactCard, Copyright } from '@/components/policy-layout'

export const metadata = {
  title: 'Terms & Conditions | Incredible Souls',
  description: 'Course Purchase & Checkout Agreement and Terms & Conditions for Incredible Souls.',
}

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      lastUpdated="July 22, 2026"
      intro={
        <>
          <p className="mb-1 font-sans text-lg font-semibold text-[#2D1B3D]">Course Purchase &amp; Checkout Agreement</p>
          <p className="mb-1">Incredible Souls · Pune, Maharashtra, India</p>
          <p className="mb-6 text-sm text-[#9B8BAB]">
            Originally effective from 22 July 2026 · Updated to include the latest policies and provisions.
          </p>
          <p className="mb-4 font-semibold text-[#2D1B3D]">
            Please Read This Agreement Carefully Before Completing Your Purchase
          </p>
          <p className="mb-4">
            By selecting the &ldquo;I Agree&rdquo; checkbox and/or completing payment through any of our checkout
            pages, you acknowledge that you have carefully read, understood, and accepted these Terms &amp; Conditions.
            By proceeding with your purchase, you agree to be legally bound by this Agreement, together with all
            policies, notices, disclaimers, and guidelines incorporated by reference.
          </p>
          <p className="mb-4">
            These Terms &amp; Conditions govern your purchase of, and access to, all courses, workshops, coaching
            sessions, healing programs, retreats, memberships, digital products, and other services offered by
            Incredible Souls.
          </p>
          <p>
            If you do not agree with any part of these Terms &amp; Conditions, please do not select the acceptance
            checkbox, proceed with payment, or access any of our products or services.
          </p>
        </>
      }
    >
      <Section title="Payment Safety Notice">
        <P>
          For your security, all authorised payment details are displayed exclusively on the official checkout pages of
          Incredible Souls. Please make payments only through the payment links or bank account details provided on our
          official website or checkout pages.
        </P>
        <P>
          We do not request payments or share bank account details through WhatsApp or any other unofficial
          communication channel. If you receive any message requesting payment outside our official checkout process,
          please treat it as suspicious and verify its authenticity by contacting us directly at
          byincrediblesouls@gmail.com before making any payment.
        </P>
      </Section>

      <Section title="Health & Medical Disclaimer">
        <P>
          The programs, workshops, healing sessions, courses, retreats, memberships, and digital offerings provided by
          Incredible Souls are intended to support personal growth, emotional wellbeing, spiritual awareness, and
          holistic healing. They are not intended to diagnose, treat, cure, or prevent any medical, psychological, or
          psychiatric condition.
        </P>
        <P>
          If you are currently under the care of a psychiatrist, psychologist, psychotherapist, or any other qualified
          healthcare professional, or if you are experiencing significant psychological or psychiatric concerns, we
          strongly recommend consulting your treating healthcare provider before enrolling in any of our programs.
        </P>
        <P>
          Participants should never discontinue, reduce, or alter any prescribed medication—including medication for
          anxiety, depression, or any other physical or mental health condition—without the advice and supervision of
          their qualified medical practitioner.
        </P>
        <P>
          Participation in any Incredible Souls program is voluntary and should be regarded as a complementary wellness
          practice that supports, but does not replace, appropriate medical, psychological, or psychiatric treatment. By
          enrolling, you acknowledge that you understand the nature of these programs and accept full responsibility for
          your participation.
        </P>
      </Section>

      <Section title="Results Disclaimer">
        <P>
          The programs, workshops, healing sessions, retreats, courses, memberships, and digital resources offered by
          Incredible Souls are intended to support personal growth, emotional wellbeing, spiritual awareness, and
          holistic transformation. Every individual&apos;s experience is unique, and results will naturally vary based on
          personal readiness, participation, consistency of practice, lifestyle, and numerous other individual factors.
        </P>
        <P>
          We do not guarantee any specific physical, emotional, psychological, financial, spiritual, or life outcome.
          Any testimonials, case studies, or experiences shared by participants are individual experiences and should
          not be interpreted as typical or guaranteed results.
        </P>
      </Section>

      <Section title="1. The Parties & Binding Effect">
        <P>
          These Terms &amp; Conditions (&ldquo;Agreement&rdquo;) constitute a legally binding agreement between you
          (&ldquo;you&rdquo;, &ldquo;your&rdquo;, or &ldquo;Participant&rdquo;) and Incredible Souls
          (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), a holistic wellness and
          spiritual education organisation based in Pune, Maharashtra, India.
        </P>
        <P>
          This Agreement governs your access to and use of our website, online platforms, mobile applications (where
          applicable), digital content, workshops, meditation programs, healing sessions, retreats, memberships,
          coaching services, courses, downloadable resources, and all other products and services offered by Incredible
          Souls (collectively referred to as the &ldquo;Services&rdquo;).
        </P>
        <P>
          By accessing our website, enrolling in any program, making a purchase, attending a session, or using any of
          our Services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms
          &amp; Conditions, together with our Privacy Policy, Refund Policy, Disclaimer, and any other policies published
          by Incredible Souls. These Terms may be updated from time to time without prior notice, and the latest version
          will always apply.
        </P>
        <P>
          By purchasing or accessing any of our Services, you confirm that you are at least 18 years of age, or that you
          have the consent of a parent or legal guardian where permitted by applicable law, and that you are legally
          competent to enter into this Agreement.
        </P>
      </Section>

      <Section title="2. Programs, Access & Complimentary Services">
        <Sub title="2.1 Program Fees & Access">
          <P>
            The fee paid grants access to the specific program, course, workshop, healing session, retreat, membership,
            or digital content purchased.
          </P>
          <P>
            Unless expressly stated otherwise, recorded online programs remain available for the duration specified at
            the time of purchase. Certain programs, memberships, live events, or digital resources may have limited
            access periods.
          </P>
          <P>
            Incredible Souls reserves the right to update, revise, improve, replace, or discontinue any program,
            recordings, course materials, or digital content at any time in order to maintain quality and relevance.
            Such updates shall not create any entitlement to refunds, compensation, or replacement unless otherwise
            required by applicable law.
          </P>
        </Sub>

        <Sub title="2.2 Personal Access Only">
          <P>Your registration and account are strictly personal.</P>
          <P>
            Course access, healing sessions, memberships, recordings, downloadable resources, meditation audios, live
            session links, and all digital content are licensed solely to the registered participant.
          </P>
          <P>You may not:</P>
          <UL
            items={[
              'share your login credentials;',
              'allow another individual to access your account;',
              'distribute recordings or course materials;',
              'permit simultaneous logins from multiple users; or',
              'reproduce or circulate any purchased content.',
            ]}
          />
          <P>
            Incredible Souls reserves the right to monitor account activity. Any suspected unauthorised use, account
            sharing, duplication, or misuse may result in temporary suspension or permanent termination of access
            without refund.
          </P>
        </Sub>

        <Sub title="2.3 Non-Transferable Access">
          <P>
            All purchases, memberships, healing programs, workshops, retreats, bonuses, certifications, and digital
            access rights are personal, non-transferable, and non-assignable.
          </P>
          <P>
            They may not be transferred, resold, gifted, exchanged, or assigned to another individual unless required by
            applicable law or expressly approved in writing by Incredible Souls.
          </P>
        </Sub>

        <Sub title="2.4 Live Sessions & Event Schedule">
          <P>
            Certain programs may include live meditation sessions, healing circles, workshops, question-and-answer
            sessions, mentoring calls, retreats, or community interactions as complimentary additions to the purchased
            program.
          </P>
          <P>
            The scheduling of these sessions is determined solely by Incredible Souls and its facilitators. Dates,
            timings, facilitators, formats, and frequency may change due to operational, logistical, or other unforeseen
            circumstances.
          </P>
          <P>
            Unless explicitly stated as a core component of the purchased program, live sessions are offered as
            complimentary value-added services. Incredible Souls reserves the right to reschedule, modify, replace,
            pause, or discontinue such sessions without creating any entitlement to refunds, compensation, or other
            claims.
          </P>
        </Sub>

        <Sub title="2.5 Complimentary Bonus Services">
          <P>
            From time to time, Incredible Souls may offer complimentary live meditation sessions, healing circles,
            question-and-answer sessions, community interactions, mentoring calls, workshops, or other value-added
            services in addition to a purchased program.
          </P>
          <P>
            These services are provided as complimentary bonuses and are not included in the purchase price of the
            primary program or course. Incredible Souls reserves the absolute right to modify, reschedule, replace,
            pause, or discontinue any complimentary service at any time without prior notice.
          </P>
          <P>
            Changes to facilitators, schedules, formats, duration, content, or availability of these bonus services
            shall not entitle participants to any refund, credit, extension, or compensation.
          </P>
        </Sub>

        <Sub title="2.6 Participant Support">
          <P>
            Support relating to our programs is primarily provided through the learning platform, course materials,
            scheduled live sessions, and official community channels, where applicable.
          </P>
          <P>
            We do not provide individual support through personal WhatsApp chats, phone calls, or social media messaging
            unless expressly stated as part of a specific premium program or private consultation.
          </P>
        </Sub>
      </Section>

      <Section title="3. Fees, Payments & Tax Invoices">
        <P>
          All prices, payment options, and applicable taxes are displayed on the official checkout page at the time of
          purchase. By completing your purchase, you agree to pay all applicable fees and taxes associated with the
          selected program or service.
        </P>
        <P>
          Payments must be made only through the official payment links or bank account details provided by Incredible
          Souls on its authorised website or checkout pages.
        </P>
        <Sub title="Tax Invoice & Billing Information">
          <P>Participants are responsible for providing accurate billing information at the time of purchase.</P>
          <P>
            If you require a GST invoice containing your GST Number, please email your GST Registration Certificate and
            purchase details to byincrediblesouls@gmail.com within 48 hours of completing your purchase.
          </P>
          <P>
            While GST invoices may still be issued after this period, we may be unable to include or amend GST
            registration details once the invoice has been generated, except where required under applicable law.
          </P>
        </Sub>
      </Section>

      <Section title="4. Refund & Cancellation Policy">
        <Sub title="All Sales Are Final">
          <P>
            Unless expressly stated otherwise in writing, all payments made towards courses, workshops, healing
            sessions, retreats, memberships, certifications, consultations, digital products, and other services offered
            by Incredible Souls are final, non-cancellable, and non-refundable.
          </P>
          <P>
            As most of our programs provide immediate access to digital content, downloadable resources, recordings, or
            reserved participation in live experiences, no refunds, credits, transfers, or partial reimbursements will
            be provided after payment has been successfully completed.
          </P>
          <P>Participants are encouraged to carefully review all program details before making a purchase.</P>
        </Sub>
        <Sub title="Termination for Policy Violations">
          <P>
            Incredible Souls reserves the right to suspend or permanently terminate access to any program, membership,
            community, retreat, or service if a participant violates these Terms &amp; Conditions, Community Guidelines,
            Code of Conduct, Intellectual Property provisions, or engages in behaviour considered harmful, abusive,
            disruptive, fraudulent, or inappropriate.
          </P>
          <P>In such circumstances, no refund or compensation shall be payable.</P>
        </Sub>
        <Sub title="Fraudulent Payments & Chargebacks">
          <P>
            If any payment is disputed, reversed, charged back, reported as fraudulent, unauthorised, or otherwise
            determined to be invalid, Incredible Souls reserves the right to suspend or permanently revoke access to all
            associated programs and services.
          </P>
          <P>
            The participant shall remain responsible for any outstanding fees, recovery costs, banking charges, legal
            expenses, or administrative costs incurred in recovering unpaid amounts.
          </P>
        </Sub>
      </Section>

      <Section title="5. Subscription Programs">
        <P>
          Where a program or membership is offered on a recurring subscription basis, you authorise Incredible Souls to
          automatically charge the selected payment method at the agreed billing interval until the subscription is
          cancelled.
        </P>
        <P>
          Each recurring payment grants continued access for the applicable billing period and is non-refundable once
          processed.
        </P>
        <P>
          You may cancel your subscription before the next billing cycle by contacting byincrediblesouls@gmail.com.
          Cancellation will prevent future renewals but will not entitle you to a refund for payments already processed.
        </P>
      </Section>

      <Section title="6. Medical, Psychological & Emotional Wellbeing Disclaimer">
        <P>
          The programs, meditations, healing sessions, spiritual practices, coaching, and educational content provided
          by Incredible Souls are intended solely for personal growth, holistic wellbeing, self-awareness, and spiritual
          development.
        </P>
        <P>
          They are not medical advice, psychological counselling, psychiatric treatment, psychotherapy, or any other
          form of licensed healthcare, and should never be interpreted as a substitute for professional medical
          diagnosis, treatment, counselling, or therapy.
        </P>
        <P>
          Participants are encouraged to review the Health &amp; Medical Disclaimer contained within these Terms &amp;
          Conditions before enrolling in any program.
        </P>
        <Sub title="Emotional Wellbeing">
          <P>
            Personal growth and healing can involve emotional experiences that differ from one individual to another.
            Each participant remains fully responsible for their own emotional wellbeing, decisions, actions, and
            responses throughout and after participation in any Incredible Souls program.
          </P>
          <P>Where appropriate, participants are encouraged to seek guidance from qualified medical or mental health professionals.</P>
        </Sub>
        <Sub title="Complementary Healing Practices">
          <P>
            All healing modalities, meditation practices, energy work, Reiki, regression sessions, sound healing, and
            other holistic techniques offered by Incredible Souls are complementary wellness practices designed to
            support overall wellbeing.
          </P>
          <P>
            They are not intended to diagnose, treat, cure, or prevent any disease or medical condition and should
            always be used alongside appropriate medical care whenever required.
          </P>
        </Sub>
        <Sub title="Medical Disclaimer (Comprehensive)">
          <P>
            All programs, workshops, courses, meditation sessions, healing practices, coaching sessions, retreats,
            consultations, digital resources, AI-assisted responses, videos, recordings, and educational materials
            provided by Incredible Souls are intended solely for educational, informational, spiritual, and personal
            development purposes.
          </P>
          <P>
            These offerings are not intended to diagnose, treat, cure, prevent, or replace professional medical,
            psychological, psychiatric, or healthcare advice, diagnosis, or treatment.
          </P>
          <P>
            Participants should always seek the advice of a qualified physician, psychiatrist, psychologist, therapist,
            or other licensed healthcare professional regarding any physical, mental, or emotional health concerns.
            Never disregard professional medical advice or delay seeking treatment because of information or experiences
            obtained through Incredible Souls.
          </P>
          <P>
            Participation in any Incredible Souls program is entirely voluntary, and each participant accepts full
            responsibility for their own health, wellbeing, decisions, and actions.
          </P>
        </Sub>
      </Section>

      <Section title="7. Results & Personal Transformation Disclaimer">
        <P>
          Incredible Souls provides educational, spiritual, and holistic wellbeing programs designed to support
          self-awareness, personal growth, emotional balance, and inner transformation.
        </P>
        <P>
          Every participant&apos;s experience is unique. We make no guarantees, promises, warranties, or representations
          regarding any specific physical, emotional, mental, spiritual, relational, professional, or financial outcome
          from participation in our programs.
        </P>
        <P>
          Any testimonials, personal stories, demonstrations, examples, or participant experiences shared through our
          website, social media, events, workshops, or promotional materials reflect individual experiences only. They
          should not be interpreted as typical, expected, or guaranteed outcomes.
        </P>
        <Sub title="Individual Results May Vary">
          <P>The benefits you experience depend upon numerous factors, including but not limited to:</P>
          <UL
            items={[
              'your willingness to participate;',
              'consistency of practice;',
              'personal beliefs and openness;',
              'emotional readiness;',
              'lifestyle choices;',
              'existing health conditions;',
              'individual circumstances; and',
              'factors beyond the control of Incredible Souls.',
            ]}
          />
          <P>Accordingly, no assurance can be given that your experience will be similar to that of any other participant.</P>
        </Sub>
        <Sub title="Personal Responsibility">
          <P>All decisions made before, during, or after participation in our programs remain entirely your own responsibility.</P>
          <P>
            You acknowledge that Incredible Souls, its founders, facilitators, trainers, mentors, guest speakers,
            associates, employees, volunteers, and representatives shall not be responsible for any decisions, actions,
            interpretations, or outcomes arising from your participation in any program or your reliance on any
            information provided.
          </P>
        </Sub>
        <Sub title="Spiritual & Holistic Practices">
          <P>
            Meditation, energy healing, Reiki, regression, sound healing, breathwork, mindfulness practices, spiritual
            guidance, and other holistic modalities are complementary wellness practices intended to support personal
            wellbeing.
          </P>
          <P>
            Individual experiences vary considerably, and no representation is made that any participant will experience
            a particular insight, healing, emotional release, transformation, or life outcome.
          </P>
        </Sub>
        <Sub title="Independent Judgment">
          <P>
            Participants are encouraged to exercise their own judgment and, where appropriate, seek advice from
            qualified legal, financial, medical, psychological, or other professional advisers before making significant
            personal, health, legal, financial, or lifestyle decisions.
          </P>
          <P>Nothing provided by Incredible Souls should be interpreted as medical, legal, financial, psychological, or other professional advice.</P>
        </Sub>
        <Sub title="Acceptance of Risk">
          <P>
            Participation in spiritual, emotional, and personal development programs may involve deep self-reflection and
            emotional processing. By voluntarily participating, you acknowledge that you understand the nature of these
            experiences and accept full responsibility for your participation and any outcomes resulting from it.
          </P>
        </Sub>
        <Sub title="Value of the Programs">
          <P>
            Program fees reflect the educational content, facilitation, resources, and participant experience provided
            by Incredible Souls. Payment of such fees does not constitute a guarantee of any specific result,
            achievement, or transformation.
          </P>
        </Sub>
      </Section>

      <Section title="8. Disclosure">
        <P>
          Incredible Souls is a holistic wellness and spiritual education platform offering meditation, healing,
          coaching, retreats, workshops, and personal development programs.
        </P>
        <P>
          Any articles, blogs, videos, podcasts, social media posts, newsletters, or educational content published by
          Incredible Souls reflect our professional knowledge, experience, research, and spiritual perspectives. Such
          content is intended solely for educational and informational purposes.
        </P>
        <P>
          We do not publish sponsored content or paid endorsements unless expressly disclosed. Where we review,
          recommend, or discuss any product, service, practitioner, or organisation, such opinions are based on our
          genuine professional judgment and experience. Participants are encouraged to independently verify any product
          claims, scientific information, medical statements, or third-party representations before relying upon them.
        </P>
      </Section>

      <Section title="9. Community Guidelines">
        <P>
          To maintain a safe, respectful, confidential, and growth-oriented learning environment, all participants agree
          to observe the following guidelines.
        </P>
        <P>The following activities are strictly prohibited:</P>
        <UL
          items={[
            'Promoting or selling personal products, services, businesses, events, or courses without prior written approval.',
            'Sending unsolicited promotional or personal messages to other participants.',
            'Harassment, bullying, intimidation, discrimination, hate speech, abusive language, or inappropriate behaviour.',
            'Sharing confidential discussions, personal stories, healing experiences, participant information, or session content outside the community without permission.',
            'Disruptive behaviour during live sessions or community discussions.',
            'Impersonating another participant or facilitator.',
            'Any unlawful, fraudulent, or unethical activity.',
          ]}
        />
        <P>
          Incredible Souls reserves the right to remove any participant from a program, membership, retreat, community,
          or live session, without prior notice or refund, where these guidelines are violated.
        </P>
      </Section>

      <Section title="10. Community & Comment Policy">
        <P>We welcome respectful discussion, thoughtful questions, and diverse perspectives.</P>
        <P>
          Constructive disagreement is encouraged; however, participants must communicate respectfully and refrain from
          personal attacks, abusive language, defamatory statements, discriminatory remarks, or content that may harm
          other participants or facilitators.
        </P>
        <P>
          Incredible Souls reserves the right to edit, moderate, restrict, or remove comments, posts, recordings, or
          community content that violate these guidelines.
        </P>
        <P>Repeated violations may result in suspension or permanent removal from our communities and programs.</P>
      </Section>

      <Section title="11. Intellectual Property Licence">
        <P>
          All content provided by Incredible Souls, including but not limited to videos, meditation recordings, healing
          scripts, course materials, manuals, PDFs, presentations, audio recordings, graphics, illustrations, logos,
          written content, downloads, and educational resources, remains the exclusive intellectual property of
          Incredible Souls unless otherwise stated.
        </P>
        <P>
          Participants receive a limited, non-exclusive, non-transferable, revocable licence to access and use the
          purchased materials solely for their own personal learning and development.
        </P>
        <P>No ownership rights are transferred through the purchase of any program or service.</P>
      </Section>

      <Section title="12. Copyright & Intellectual Property Protection">
        <Sub title="12.1 Copyright">
          <P>
            All materials created or provided by Incredible Souls are protected by applicable copyright, trademark, and
            intellectual property laws.
          </P>
          <P>
            Participants may not reproduce, modify, translate, distribute, publish, upload, share, sell, sublicense,
            commercially exploit, or otherwise reproduce any portion of the content without prior written permission from
            Incredible Souls.
          </P>
          <P>Unauthorised use may result in immediate termination of access, legal proceedings, and claims for damages where applicable.</P>
          <P>Questions regarding copyright or intellectual property may be directed to: byincrediblesouls@gmail.com</P>
        </Sub>
        <Sub title="12.2 Recording & Redistribution">
          <P>Participants may not:</P>
          <UL
            items={[
              'record live sessions;',
              'screen-record or download videos;',
              'copy meditation narrations or healing scripts;',
              'use software, browser extensions, AI tools, transcription services, or third-party applications to capture content;',
              'share course material, PDFs, recordings, audio files, presentations, community discussions, or retreat content with others.',
            ]}
          />
          <P>
            Any unauthorised recording, copying, sharing, or redistribution may result in immediate termination of
            access without refund and may lead to legal action.
          </P>
        </Sub>
        <Sub title="12.3 Artificial Intelligence Usage">
          <P>
            No content provided by Incredible Souls—including meditation narrations, healing scripts, videos, audio
            recordings, written material, course manuals, AI-generated responses, community discussions, retreat
            materials, or educational resources—may be used to train, develop, fine-tune, improve, or create artificial
            intelligence systems, machine learning models, datasets, automated coaching systems, or similar technologies
            without prior written permission from Incredible Souls.
          </P>
        </Sub>
      </Section>

      <Section title="13. Confidentiality">
        <P>
          Participants acknowledge that certain information shared during healing sessions, coaching programs, retreats,
          workshops, community discussions, and educational programs may be confidential.
        </P>
        <P>
          Participants agree to maintain the privacy of fellow participants and shall not disclose, reproduce, record,
          publish, or distribute confidential discussions, personal experiences, healing processes, or proprietary
          teaching methodologies without prior written consent.
        </P>
        <P>This obligation continues even after completion of the program.</P>
      </Section>

      <Section title="14. Acceptable Use">
        <P>
          Participants agree to use Incredible Souls&apos; website, programs, services, and community platforms lawfully,
          respectfully, and ethically.
        </P>
        <P>Participants shall not:</P>
        <UL
          items={[
            'interfere with the operation or security of our website or platforms;',
            'gain unauthorised access to systems or accounts;',
            'upload malicious software or harmful code;',
            'impersonate another individual;',
            'misuse participant information;',
            'attempt to copy or reverse engineer our digital platforms;',
            'harvest participant data;',
            'engage in spam or unsolicited promotions;',
            'use Incredible Souls content for commercial purposes without written permission.',
          ]}
        />
        <P>
          Participants further agree not to make knowingly false, defamatory, malicious, or misleading statements
          regarding Incredible Souls, its founders, facilitators, programs, or participants.
        </P>
        <P>
          Each participant is responsible for maintaining the confidentiality of their account credentials and all
          activity conducted through their account.
        </P>
        <P>
          Where testimonials, reviews, or feedback are shared publicly, participants agree that such statements will
          accurately reflect their genuine personal experience and will comply with applicable consumer protection and
          advertising laws.
        </P>
      </Section>

      <Section title={'15. Artificial Intelligence ("Incredible Souls AI")'}>
        <P>
          Incredible Souls may provide access to an Artificial Intelligence (&ldquo;AI&rdquo;) assistant designed to
          support participants by answering general questions related to our courses, meditation practices, healing
          modalities, workshops, retreats, and educational content.
        </P>
        <P>Please read this section carefully, as it governs your use of any AI services provided by Incredible Souls.</P>
        <Sub title="15.1 Limited Access">
          <P>
            Access to Incredible Souls AI is provided only to eligible participants and may vary depending on the
            program, membership, or service purchased.
          </P>
          <P>
            AI access is offered as a complimentary feature where applicable. Incredible Souls reserves the right to
            modify, limit, suspend, replace, or discontinue AI services at any time without prior notice and without
            creating any entitlement to refunds, credits, or compensation.
          </P>
        </Sub>
        <Sub title="15.2 Artificial Intelligence Is Not a Human Being">
          <P>Incredible Souls AI is computer software powered by artificial intelligence.</P>
          <P>
            It is not a human facilitator, healer, coach, therapist, counsellor, doctor, lawyer, financial adviser, or
            any other licensed professional.
          </P>
          <P>
            Your use of the AI does not create any therapeutic, medical, legal, financial, counselling, coaching, or
            professional relationship with Incredible Souls or any of its facilitators.
          </P>
        </Sub>
        <Sub title="15.3 AI Responses May Be Inaccurate">
          <P>Artificial Intelligence generates responses automatically.</P>
          <P>
            Although every effort is made to provide helpful information, AI-generated responses may occasionally be
            incomplete, inaccurate, outdated, misleading, biased, or inappropriate for your individual circumstances.
          </P>
          <P>Responses should always be treated as general educational information and never as verified facts or personalised professional advice.</P>
        </Sub>
        <Sub title="15.4 Exercise Independent Judgment">
          <P>Participants should exercise their own judgment before acting upon any AI-generated response.</P>
          <P>
            Important decisions relating to health, emotional wellbeing, relationships, finances, legal matters, or
            other significant life matters should always be discussed with an appropriately qualified professional.
          </P>
        </Sub>
        <Sub title="15.5 Not a Substitute for Professional Care">
          <P>
            The AI assistant is not intended to diagnose, treat, cure, or prevent any medical, psychological,
            psychiatric, or healthcare condition.
          </P>
          <P>
            Participants should never begin, discontinue, or modify medication, therapy, counselling, or other
            professional treatment based solely upon information generated by the AI assistant.
          </P>
          <P>
            If you believe you require urgent medical, psychological, or emergency assistance, please contact an
            appropriately qualified healthcare professional or your local emergency services immediately.
          </P>
        </Sub>
        <Sub title="15.6 Confidential Information">
          <P>
            Participants are advised not to enter passwords, banking information, government identification numbers,
            confidential business information, or any other highly sensitive personal information into the AI assistant.
          </P>
          <P>
            Interactions may be processed and securely stored to improve the quality, safety, and performance of the AI
            service, in accordance with our Privacy Policy.
          </P>
        </Sub>
        <Sub title="15.7 Ownership of AI Content">
          <P>AI-generated responses are provided solely for the personal use of the participant.</P>
          <P>
            Participants may not commercially reproduce, publish, redistribute, licence, sell, or otherwise exploit
            AI-generated content without the prior written consent of Incredible Souls.
          </P>
        </Sub>
        <Sub title="15.8 Limitation of Liability">
          <P>You acknowledge that your use of Incredible Souls AI is entirely voluntary and at your own discretion.</P>
          <P>
            To the fullest extent permitted by applicable law, Incredible Souls, its founders, facilitators, trainers,
            employees, associates, volunteers, affiliates, and representatives shall not be liable for any action,
            decision, loss, injury, damage, expense, or consequence arising from your use of, or reliance upon, any
            AI-generated response.
          </P>
          <P>The AI service is provided on an &ldquo;as available&rdquo; and &ldquo;as is&rdquo; basis without warranties of any kind, whether express or implied.</P>
        </Sub>
      </Section>

      <Section title="16. Facilitators & Support Sessions">
        <Sub title="16.1 Guidance During Support Sessions">
          <P>
            Guidance, explanations, demonstrations, meditation instructions, healing guidance, and responses provided
            during support sessions, workshops, community meetings, or mentoring sessions are intended solely to assist
            participants in understanding and practising the teachings of Incredible Souls.
          </P>
          <P>Such guidance should not be interpreted as medical, legal, financial, psychological, or other professional advice.</P>
        </Sub>
        <Sub title="16.2 Role of Facilitators">
          <P>
            Facilitators, mentors, volunteers, and community leaders are appointed to support participants in learning
            and practising the teachings of Incredible Souls.
          </P>
          <P>
            Unless expressly stated otherwise, they are not authorised to modify policies, offer contractual
            commitments, approve refunds, make legal representations, or act as official spokespersons on behalf of
            Incredible Souls.
          </P>
        </Sub>
      </Section>

      <Section title="17. User Content">
        <P>
          &ldquo;User Content&rdquo; includes any material submitted by participants through our website, community
          platforms, events, workshops, retreats, online sessions, or digital services, including text, comments,
          photographs, videos, audio recordings, artwork, testimonials, feedback, journal entries, questions,
          assignments, and other materials.
        </P>
        <P>
          By voluntarily submitting User Content, you grant Incredible Souls a non-exclusive, worldwide, perpetual,
          royalty-free licence to use, reproduce, display, publish, translate, adapt, distribute, and reproduce such
          content for educational, promotional, operational, or community purposes unless you expressly request
          otherwise in writing.
        </P>
        <P>You confirm that you own, or have the necessary rights to submit, the content you provide.</P>
        <P>You retain ownership of your original intellectual property while granting Incredible Souls the licence described above.</P>
      </Section>

      <Section title="18. Intellectual Property Compliance">
        <P>Participants agree to respect the intellectual property rights of Incredible Souls and all third parties.</P>
        <P>
          You may not upload, publish, transmit, distribute, or otherwise use any material that infringes another
          person&apos;s copyright, trademark, trade secret, privacy rights, or other intellectual property rights.
        </P>
        <P>Participants remain solely responsible for any material they upload or share through Incredible Souls platforms.</P>
      </Section>

      <Section title="19. Inappropriate Content & Suspension of Access">
        <Sub title="19.1 Inappropriate Content">
          <P>
            Participants shall not upload, publish, transmit, distribute, or share any material that is unlawful,
            abusive, defamatory, discriminatory, hateful, threatening, obscene, sexually explicit, fraudulent,
            misleading, or otherwise inappropriate.
          </P>
          <P>
            Incredible Souls reserves the right to remove any such content and cooperate with lawful investigations
            where required by applicable law.
          </P>
        </Sub>
        <Sub title="19.2 Suspension or Termination of Access">
          <P>
            Incredible Souls reserves the right, at its sole discretion, to suspend or permanently terminate access to
            any program, course, membership, retreat, community platform, event, or digital service where a participant
            violates these Terms &amp; Conditions, Community Guidelines, applicable laws, or engages in conduct that may
            negatively affect other participants or the organisation.
          </P>
          <P>
            Such decisions shall be final. Where access is terminated due to a violation of these Terms, no refund,
            credit, or compensation shall be payable.
          </P>
        </Sub>
      </Section>

      <Section title="20. Privacy Policy">
        <P>We respect your privacy and are committed to protecting the personal information you share with us.</P>
        <P>
          Our Privacy Policy, available on the official Incredible Souls website at
          https://www.incrediblesouls.co.in/, is incorporated into this Agreement by reference and explains how we
          collect, use, process, store and protect your personal information.
        </P>
        <P>
          When you register for an account, enrol in a program, purchase a service, submit a form, participate in a
          session or otherwise use our website, content or services, you may be required to provide certain personal
          information.
        </P>
        <P>
          By providing such information, you confirm that it is accurate and consent to its collection and use in
          accordance with our Privacy Policy and applicable law.
        </P>
      </Section>

      <Section title="21. Your Representations and Warranties">
        <P>By accessing or using the website, content or services of Incredible Souls, you represent and warrant that:</P>
        <UL
          items={[
            'you have the legal capacity, authority and competence to enter into this Agreement;',
            'your acceptance and performance of this Agreement do not violate any other agreement or legal obligation binding upon you;',
            'the information submitted by you is complete, accurate and current;',
            'your use of the website, content and services is lawful in the jurisdiction from which you access them;',
            'you will use the website, content and services only for lawful, ethical and permitted purposes;',
            'you will not infringe the intellectual property, privacy or other legal rights of Incredible Souls or any third party;',
            'you understand the nature of the programs and voluntarily accept the risks associated with your participation;',
            'you will exercise independent judgment before acting upon any information, guidance or practice provided through our programs; and',
            'you will seek advice from an appropriately qualified professional wherever medical, psychological, psychiatric, legal, financial or other professional assistance may be required.',
          ]}
        />
        <P>
          Where you independently create or publish content referring to or promoting Incredible Souls, you remain
          responsible for ensuring that such content is accurate, lawful and compliant with applicable advertising,
          intellectual property and consumer-protection laws.
        </P>
        <P>
          Unless Incredible Souls has expressly approved the content in writing, such content shall not be represented
          as an official statement, endorsement or publication of Incredible Souls.
        </P>
        <Sub title="Age Restriction">
          <P>You must be at least 18 years of age and legally competent to enter into this Agreement.</P>
          <P>
            A person below the age of 18 may participate only where the applicable program expressly permits
            participation by minors and where prior consent, supervision and responsibility are provided by a parent or
            legal guardian in accordance with applicable law.
          </P>
          <P>
            The parent or legal guardian assumes responsibility for the minor&apos;s participation, conduct, wellbeing
            and compliance with these Terms &amp; Conditions.
          </P>
        </Sub>
      </Section>

      <Section title="22. Disclaimer of Warranties">
        <P>
          To the fullest extent permitted by applicable law, Incredible Souls makes no express or implied
          representations or warranties concerning its website, programs, content, digital platforms, recordings,
          materials, healing practices, workshops, retreats, coaching sessions, community services, AI-assisted features
          or other offerings.
        </P>
        <P>This includes any implied warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, availability or suitability.</P>
        <P>All websites, content, programs, services, software and products are provided on an &ldquo;as is,&rdquo; &ldquo;with all faults&rdquo; and &ldquo;as available&rdquo; basis.</P>
        <P>Your use of the website, content and services is at your own discretion and risk.</P>
        <P>
          Although reasonable efforts are made to keep information accurate and current, the content may occasionally
          contain errors, omissions, outdated information or typographical inaccuracies.
        </P>
        <P>Incredible Souls does not warrant that:</P>
        <UL
          items={[
            'the website or services will remain uninterrupted, secure or error-free;',
            'all technical defects will be corrected;',
            'the website or services will be compatible with every device, browser, network, hardware or software system;',
            'recordings, sessions or digital content will always remain available;',
            'any program will produce a specific physical, emotional, psychological, spiritual, relational, professional or financial result; or',
            'your experience will be similar to the experience of another participant.',
          ]}
        />
        <P>Individual results vary and depend on several personal and external factors beyond the control of Incredible Souls.</P>
        <P>You remain responsible for obtaining appropriate professional advice in relation to your individual circumstances.</P>
      </Section>

      <Section title="23. Limitation of Liability">
        <P>
          To the maximum extent permitted by applicable law, Incredible Souls, its founders, facilitators, trainers,
          employees, contractors, associates, volunteers, affiliates and representatives shall not be liable for any
          direct, indirect, incidental, special, exemplary, punitive or consequential loss or damage arising from or
          connected with:
        </P>
        <UL
          items={[
            'your access to or use of the website, content or services;',
            'your inability to access any website, recording, platform or service;',
            'your participation in any course, healing session, meditation, retreat, workshop, coaching session or community activity;',
            'any action, decision or omission based on information, guidance, practices or content provided by Incredible Souls;',
            'any emotional, physical, psychological, spiritual, relational, professional or financial consequence associated with your participation;',
            'any unauthorised access to, alteration of or loss of your data;',
            'any third-party website, service, payment gateway, application or communication platform; or',
            'any interruption, delay, network failure, server issue, technical malfunction, data loss or cybersecurity incident beyond our reasonable control.',
          ]}
        />
        <P>This limitation applies even where Incredible Souls has been informed of the possibility of such loss or damage.</P>
        <P>
          Where liability cannot lawfully be excluded, the total cumulative liability of Incredible Souls for any claim
          arising from a particular purchase or service shall not exceed the lower of: (1) the actual direct loss
          established by the participant; or (2) the total amount paid by the participant to Incredible Souls for the
          specific program or service giving rise to the claim during the two months immediately preceding the event.
        </P>
        <P>Nothing in this Agreement excludes or limits any liability that cannot legally be excluded under applicable law.</P>
        <P>
          If any provision of this section is found invalid or unenforceable, that provision shall be interpreted or
          limited to the minimum extent necessary, and the remaining provisions shall continue in full force.
        </P>
      </Section>

      <Section title="24. Additional Restrictions and Participant Commitments">
        <Sub title="24.1 Purpose and Scope of the Services">
          <P>
            The website, content and services of Incredible Souls are intended to support education, meditation,
            self-awareness, emotional wellbeing, spiritual development and complementary holistic practices.
          </P>
          <P>
            They are provided for personal learning and development and are not intended to replace licensed medical,
            psychiatric, psychological, legal, financial or other professional services.
          </P>
          <P>You acknowledge that Incredible Souls does not:</P>
          <UL
            items={[
              'make decisions on your behalf;',
              'guarantee healing, transformation or any particular outcome;',
              'prescribe or modify medicines or medical treatment;',
              'provide emergency medical or mental-health intervention;',
              'guarantee improvements in relationships, finances, career, health or personal circumstances;',
              'assume responsibility for implementing the teachings or practices in your life; or',
              'provide personalised professional advice unless expressly stated in a separate written agreement.',
            ]}
          />
          <P>You remain responsible for determining whether a program or practice is suitable for you and for seeking appropriate professional guidance where required.</P>
          <P>The content and services may not be used to establish, operate or promote a healing, coaching, counselling or training practice by representing Incredible Souls materials as your own.</P>
          <P>
            No course purchase authorises you to teach, certify, reproduce, commercially use or provide Incredible Souls
            methodologies, scripts, recordings or course materials to others unless separate written permission or an
            authorised facilitator agreement has been issued by Incredible Souls.
          </P>
        </Sub>
        <Sub title="24.2 No Reliance on Verbal Statements">
          <P>
            You acknowledge that your decision to purchase, enrol in or participate in any Incredible Souls program has
            been made on the basis of the written information provided on our official website, checkout pages, program
            materials and official written communications.
          </P>
          <P>
            You confirm that you have not relied upon any verbal statement, promise, opinion, assurance, representation
            or commitment made by any facilitator, employee, associate, affiliate, volunteer, community member,
            participant or third party unless that statement has been expressly confirmed in writing by an authorised
            representative of Incredible Souls.
          </P>
        </Sub>
      </Section>

      <Section title="25. Third-Party Websites, Affiliates and Facilitator Disclosures">
        <Sub title="25.1 Third-Party Websites and Services">
          <P>
            Our website, content, emails, community platforms or services may include links to third-party websites,
            applications, payment gateways, service providers, products or external resources.
          </P>
          <P>
            Incredible Souls does not control and is not responsible for the availability, accuracy, security, legality,
            privacy practices, content, quality or reliability of any third-party website or service.
          </P>
          <P>
            Accessing or using any third-party website, platform, product or service is entirely at your own discretion
            and risk. The inclusion of a link does not necessarily imply endorsement, sponsorship, partnership or
            approval by Incredible Souls.
          </P>
          <P>Participants should independently review the terms, privacy policies and suitability of all third-party services before using them or making any purchase.</P>
        </Sub>
        <Sub title="25.2 Affiliate Commissions and Commercial Relationships">
          <P>
            Incredible Souls, its founders, facilitators or associates may occasionally recommend third-party products,
            services, books, wellness resources, event venues, practitioners, technology platforms or other offerings.
          </P>
          <P>
            Where permitted by applicable law, Incredible Souls or its representatives may receive a referral fee,
            affiliate commission or other benefit when a participant purchases through a recommended link.
          </P>
          <P>
            Where such a material commercial relationship exists, reasonable efforts will be made to disclose it. Any
            recommendation shall remain subject to the participant&apos;s independent assessment and judgment.
          </P>
        </Sub>
        <Sub title="25.3 Affiliate, Volunteer and Facilitator Authority">
          <P>Facilitators, volunteers, affiliates, community leaders, moderators, associates and third-party representatives are not authorised to:</P>
          <UL
            items={[
              'modify these Terms & Conditions;',
              'change any refund, cancellation or payment policy;',
              'approve exceptions or transfers;',
              'make legally binding commitments;',
              'guarantee results or outcomes;',
              'make representations on behalf of Incredible Souls; or',
              'enter into contracts in the name of Incredible Souls.',
            ]}
          />
          <P>Only a written communication issued or expressly approved by an authorised representative of Incredible Souls shall be treated as an official commitment or policy decision.</P>
        </Sub>
      </Section>

      <Section title="26. Alleged Violations and Investigation">
        <P>
          Incredible Souls reserves the right to review and investigate any complaint, suspected violation, misuse,
          unauthorised access, infringement, abusive conduct, fraudulent activity or breach of these Terms &amp;
          Conditions.
        </P>
        <P>
          For this purpose, and to the extent permitted by applicable law, Incredible Souls or its authorised service
          providers may review relevant account information, login records, communications, submissions, community
          activity and other records connected with the alleged violation.
        </P>
        <P>We are not required to disclose the existence or details of an investigation unless disclosure is required by law.</P>
        <P>Incredible Souls may temporarily suspend or permanently terminate access, with or without prior notice, where we reasonably believe that a participant has:</P>
        <UL
          items={[
            'violated this Agreement or any incorporated policy;',
            'provided false, incomplete or misleading information;',
            'shared or misused course access;',
            'infringed intellectual property rights;',
            'engaged in harassment, abuse or disruptive conduct;',
            'interfered with another participant’s use of the services;',
            'compromised the security of the website or platform; or',
            'used the services for unlawful or unauthorised purposes.',
          ]}
        />
        <P>Any action taken under this section will be subject to applicable law.</P>
      </Section>

      <Section title="27. Suspension and Termination">
        <P>
          Incredible Souls may suspend, restrict or terminate your access to its website, content, courses, programs,
          memberships, communities, recordings or services if you breach these Terms &amp; Conditions or engage in
          conduct that may harm the organisation, its facilitators, its participants, its intellectual property or its
          digital platforms.
        </P>
        <P>Incredible Souls shall not be liable to you or any third party for a lawful suspension or termination carried out under this Agreement.</P>
        <P>Upon termination:</P>
        <UL
          items={[
            'your licence to access and use the relevant website, content and services will end immediately;',
            'you must stop using, copying, storing, sharing or distributing the protected materials;',
            'any outstanding payment obligations will remain payable; and',
            'provisions concerning intellectual property, confidentiality, disclaimers, indemnity, liability and governing law will continue to apply.',
          ]}
        />
        <P>
          Where reasonably practicable, Incredible Souls may make User Content inaccessible after termination. However,
          backup copies, archived records, cached data or content previously shared by other users may remain
          temporarily available or be retained where required for legal, regulatory, security or operational purposes.
        </P>
      </Section>

      <Section title="28. Notices and Official Communications">
        <P>All formal notices under this Agreement must be made in writing and delivered by email, registered post or recognised courier service.</P>
        <P>
          Notices to Incredible Souls must be sent to: Incredible Souls, Pune, Maharashtra, India. Email:
          byincrediblesouls@gmail.com
        </P>
        <P>Any future registered office or correspondence address published on the official Incredible Souls website shall be treated as the current address for formal notices.</P>
        <P>Notices to participants will be sent using the email address, postal address or contact information provided during registration or purchase.</P>
        <P>Unless applicable law provides otherwise, a notice will be considered received:</P>
        <UL
          items={[
            'for registered post, within seven business days after dispatch;',
            'for courier, on confirmed delivery; and',
            'for email, within 24 hours of sending, provided no delivery-failure notification is received.',
          ]}
        />
        <P>You agree that electronic communications and email notices satisfy any legal requirement that a communication be made in writing, to the extent permitted by applicable law.</P>
      </Section>

      <Section title="29. Indemnity">
        <P>
          To the fullest extent permitted by applicable law, you agree to indemnify, defend and hold harmless Incredible
          Souls, its founders, directors, facilitators, employees, contractors, associates, volunteers, affiliates,
          service providers and authorised representatives from claims, demands, proceedings, liabilities, damages,
          losses, judgments, penalties, costs and reasonable legal expenses arising from or connected with:
        </P>
        <UL
          items={[
            'your breach of these Terms & Conditions;',
            'your unlawful, negligent, fraudulent or wrongful act or omission;',
            'your misuse of the website, content or services;',
            'your violation of another person’s privacy, intellectual property or legal rights;',
            'content uploaded, submitted, published or distributed by you;',
            'your unauthorised recording, copying, teaching, resale or distribution of our materials; or',
            'any inaccurate representation made by you regarding Incredible Souls or its services.',
          ]}
        />
        <P>Where indemnification is sought, Incredible Souls will provide reasonable notice of the relevant claim where practicable.</P>
        <P>
          You agree to provide reasonable cooperation in the defence of the claim. You shall not enter into any
          settlement that imposes liability, admission, obligation or reputational harm upon Incredible Souls without our
          prior written consent.
        </P>
        <P>Nothing in this section requires a participant to indemnify Incredible Souls for liability that cannot legally be transferred or excluded.</P>
      </Section>

      <Section title="30. Governing Law, Jurisdiction and International Compliance">
        <Sub title="30.1 Governing Law and Jurisdiction">
          <P>This Agreement shall be governed by and interpreted in accordance with the laws of India.</P>
          <P>
            Subject to any mandatory consumer-protection rights and any applicable dispute-resolution requirements, the
            competent courts at Pune, Maharashtra, India shall have jurisdiction over disputes arising from or relating
            to the website, content, programs, purchases or services of Incredible Souls.
          </P>
        </Sub>
        <Sub title="30.2 Equitable and Protective Relief">
          <P>
            Nothing in this Agreement prevents Incredible Souls from approaching any court of competent jurisdiction to
            seek an injunction, restraining order or other equitable relief for the protection of its intellectual
            property, confidential information, privacy rights, digital systems or proprietary materials.
          </P>
          <P>
            Nothing in this Agreement excludes any consumer right or legal remedy that cannot lawfully be excluded or
            waived under applicable law.
          </P>
        </Sub>
        <Sub title="30.3 International Participants">
          <P>
            Participants accessing or purchasing Incredible Souls services from outside India are responsible for
            ensuring that their participation complies with the laws, regulations, tax requirements, import
            restrictions, digital-access rules and other legal obligations applicable in their own country or
            jurisdiction.
          </P>
          <P>
            The availability of a website or service in a particular country does not constitute a representation that
            the service is lawful, suitable or permitted in every jurisdiction.
          </P>
        </Sub>
      </Section>

      <Section title="31. Severability and Waiver">
        <P>
          If any provision of this Agreement is held to be unlawful, invalid or unenforceable by a court or authority of
          competent jurisdiction, that provision shall be interpreted, modified or limited to the minimum extent
          necessary to make it enforceable.
        </P>
        <P>The remaining provisions shall continue in full force and effect.</P>
        <P>
          A failure or delay by Incredible Souls in enforcing any right or provision shall not constitute a waiver of
          that right or provision.
        </P>
        <P>
          A waiver will be effective only when made in writing by an authorised representative of Incredible Souls and
          will apply only to the specific matter for which it was given.
        </P>
      </Section>

      <Section title="32. Modifications to These Terms">
        <P>
          Incredible Souls may revise these Terms &amp; Conditions, its policies, website, content, programs, access
          arrangements or services from time to time.
        </P>
        <P>
          Updated Terms will be published on the official website or communicated through an appropriate official
          channel. Unless a later date is specified, revisions will take effect upon publication.
        </P>
        <P>
          Changes will apply prospectively to the extent required by applicable law. Material changes affecting an
          existing paid service may be communicated to participants where reasonably necessary.
        </P>
        <P>
          Your continued access to or use of the website or services after the effective date of revised Terms
          constitutes acceptance of the updated Terms.
        </P>
        <P>
          Where you do not agree to a revision, you should discontinue future use of the relevant website or service.
          Any refund or cancellation entitlement will remain subject to the policy applicable to your purchase and to
          mandatory law.
        </P>
      </Section>

      <Section title="33. Entire Agreement and Electronic Acceptance">
        <Sub title="33.1 Entire Agreement">
          <P>
            These Terms &amp; Conditions, together with the Privacy Policy, Refund and Cancellation Policy, Medical
            Disclaimer, Community Guidelines and all other policies expressly incorporated by reference, constitute the
            entire agreement between you and Incredible Souls concerning the website, content and services.
          </P>
          <P>
            They supersede all prior oral or written discussions, understandings, communications, representations and
            agreements relating to the same subject matter.
          </P>
          <P>Any right not expressly granted under this Agreement is reserved by Incredible Souls.</P>
          <P>
            You may not assign, transfer, sublicense or delegate your rights or obligations under this Agreement without
            the prior written consent of Incredible Souls.
          </P>
          <P>
            Nothing in this Agreement creates an employment, agency, partnership, joint-venture, franchise, fiduciary or
            representative relationship between you and Incredible Souls.
          </P>
          <P>
            The provisions relating to intellectual property, confidentiality, payment obligations, disclaimers,
            limitation of liability, indemnity, dispute resolution and governing law shall survive the termination or
            expiry of this Agreement.
          </P>
        </Sub>
        <Sub title="33.2 Electronic Acceptance">
          <P>
            By ticking an acceptance checkbox, clicking a payment or enrolment button, submitting an online
            registration, making payment, creating an account, accessing course materials or participating in a program,
            you provide your electronic acceptance of this Agreement.
          </P>
          <P>You acknowledge that electronic acceptance has the same effect as a handwritten signature to the extent recognised by applicable law.</P>
          <P>You are encouraged to download or retain a copy of these Terms &amp; Conditions for your records.</P>
          <P>
            By selecting the acceptance checkbox, completing payment, registering for a program, creating an account,
            accessing course materials or using any Incredible Souls service, you acknowledge that your electronic
            acceptance constitutes a valid electronic signature and creates a legally binding agreement between you and
            Incredible Souls, to the extent permitted by applicable law.
          </P>
        </Sub>
      </Section>

      <Section title="34. How to Contact Us">
        <P>
          For all official communications, notices, payment verification, support requests and policy-related enquiries,
          please contact:
        </P>
        <ContactCard
          name="Incredible Souls"
          company="Pune, Maharashtra, India"
          address=""
          website="www.incrediblesouls.co.in"
          email="byincrediblesouls@gmail.com"
        />
        <P>
          Email is the primary official communication channel of Incredible Souls. Participants should verify any
          payment request, policy communication or commitment received through another platform by contacting us through
          the official email address above.
        </P>
        <P>
          The complete registered or correspondence address of Incredible Souls, where applicable, may be published on
          the official website and updated from time to time.
        </P>
      </Section>

      <Section title="Acknowledgement and Acceptance">
        <P>
          By selecting &ldquo;I have read and agree to the Terms &amp; Conditions&rdquo; and completing your
          registration or payment, you acknowledge and confirm that:
        </P>
        <UL
          items={[
            'you have read and understood this Agreement;',
            'you voluntarily agree to be legally bound by these Terms & Conditions and the policies incorporated within them;',
            'all purchases are subject to the applicable refund and cancellation policy;',
            'no specific healing, emotional, spiritual, personal, professional, financial or other result is promised or guaranteed;',
            'the programs and services of Incredible Souls are intended for educational, spiritual, personal-development and complementary wellbeing purposes;',
            'the programs do not replace medical, psychiatric, psychological, legal, financial or other qualified professional advice or treatment;',
            'you remain responsible for your health, decisions, participation and use of the information provided; and',
            'these Terms & Conditions may be updated from time to time in accordance with the modification provisions contained in this Agreement.',
          ]}
        />
        <P>
          By proceeding with payment, enrolment, access or participation, you provide your complete electronic
          acknowledgement and acceptance of this Agreement.
        </P>
      </Section>

      <Section title="© Copyright Incredible Souls. All Rights Reserved.">
        <P>
          All website content, course materials, healing methodologies, meditation narrations, recordings, videos, audio
          files, written resources, designs, graphics, trademarks and other intellectual property belonging to
          Incredible Souls are protected under applicable intellectual property laws.
        </P>
        <P>
          Unauthorised copying, recording, reproduction, publication, distribution, commercial use or redistribution is
          strictly prohibited.
        </P>
      </Section>
    </PolicyLayout>
  )
}
