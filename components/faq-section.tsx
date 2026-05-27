'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'What is a spiritual healing centre?',
    answer:
      "A spiritual healing centre is a sacred space where energy-based therapies and ancient wisdom come together to restore balance in mind, body, emotions and soul. Along with therapy, it's a journey of inner transformation and self-remembrance.",
  },
  {
    question: 'Who is the healer or guide at your centre?',
    answer:
      'Our sessions and programs are led by Reshu Gupta, an experienced spiritual coach, energy healer, and intuitive guide who integrates multiple healing modalities with deep compassion and insight. There are a few other healers in the team as well.',
  },
  {
    question: 'Is spiritual healing right for me?',
    answer:
      "Yes. Whether you're facing emotional pain, relationship struggles, physical imbalances or simply seeking spiritual growth, healing can support you. All you need is an open heart and the intention to heal.",
  },
  {
    question: 'What types of healing do you offer?',
    answer:
      'We offer a wide range of modalities including Energy Healing, Chakra Balancing, Past Life Regression, Karuna Reiki, Psychic Surgery, Inner Child Healing, Aura Clearance, Distance Healing, Vastu & Space Healing and more.',
  },
  {
    question: 'Are the sessions online or in-person?',
    answer:
      'We offer both. You can choose to attend healing sessions in-person at our centre or connect with us remotely through online sessions or via distance healing, which is equally effective.',
  },
  {
    question: 'What happens in a session?',
    answer:
      'Each session is a gentle, guided process. You may experience relaxation, emotional release, clarity or energetic shifts. All practices are non-invasive, safe and deeply nourishing.',
  },
  {
    question: 'How should I prepare for a session?',
    answer:
      'Just come with an open mind and heart. Wear comfortable clothing, stay hydrated and allow yourself some quiet time before and after the session to integrate the healing.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      "Each person's journey is unique. Some feel shifts in one session, while others choose a deeper path with multiple sessions. We guide you based on your intention and readiness.",
  },
  {
    question: 'Will I feel anything during or after healing?',
    answer:
      'You may feel warmth, tingling, emotional releases, lightness or deep peace. Sometimes, a healing detox may occur as old energy releases—this is natural and temporary.',
  },
  {
    question: 'Can you help with karmic patterns or past life healing?',
    answer:
      'Through Past Life Regression, Akashic Readings, and Bandhan Moksha Kriya, we support the clearing of karmic imprints, soul contracts and past life memories that may be affecting your present.',
  },
  {
    question: "What if I don't believe in past lives—will this still work?",
    answer:
      'Absolutely. The subconscious mind stores memories and energy imprints that impact your present. Healing works through intention, not belief.',
  },
  {
    question: 'What are your session charges?',
    answer:
      'Pricing varies depending on the modality and session length. We offer single sessions and discounted healing packages. Kindly connect with us for current rates.',
  },
  {
    question: 'Do you offer free or sliding-scale sessions?',
    answer:
      'We believe healing is for everyone. Yes, we offer free sessions periodically, details of which are posted on the website under the upcoming events section. In special cases, we also offer support-based pricing. Please reach out to discuss your situation.',
  },
  {
    question: 'Do you heal homes, spaces or relationships?',
    answer:
      'Yes. We offer Vastu Healing, Space Energy Clearing and Relationship & Inner Child Healing to restore harmony in your surroundings and emotional life.',
  },
  {
    question: 'Can my partner or family member also attend?',
    answer:
      'Certainly. Healing as a couple or family can deepen bonds and clear shared karmic or emotional patterns. Group and individual sessions are both available.',
  },
  {
    question: 'What happens after the session?',
    answer:
      "You'll receive guidance to integrate the healing through affirmations, rituals, meditations or follow-up practices. We're here to support you beyond the session.",
  },
  {
    question: 'Is there a community or support group?',
    answer:
      "Yes. Incredible Souls is more than a healing centre—it's a spiritual family. We hold regular workshops, sharing circles and retreats where you can grow and connect.",
  },
  {
    question: 'Can I learn healing or become a practitioner?',
    answer:
      'Yes! We offer practitioner-level courses in Past Life Regression, Reiki, Karuna Healing, Inner Child Work and more. These trainings empower you to heal yourself and others.',
  },
  {
    question: 'Do I need any background to join a course?',
    answer:
      'No prior experience is needed. All our programs begin with the basics and progress into deeper knowledge. Your willingness to learn is all you need.',
  },
  {
    question: 'Is this a replacement for medical treatment?',
    answer:
      'Spiritual healing complements, not replaces, medical care. We encourage an integrative approach where healing works alongside doctors and therapy for holistic wellness.',
  },
]

interface FAQSectionProps {
  initialCount?: number
}

function FAQItem({
  faq,
  idx,
  expanded,
  setExpanded,
}: {
  faq: FAQ
  idx: number
  expanded: number | null
  setExpanded: (value: number | null) => void
}) {
  const isOpen = expanded === idx

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        onClick={() => setExpanded(isOpen ? null : idx)}
        className="w-full text-left"
      >
        <div className="bg-white rounded-lg px-6 py-5 hover:shadow-md transition-shadow duration-300">
          {/* Question */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-body text-[#2D1B3D] leading-relaxed flex-1">
              {faq.question}
            </h3>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-[#6B5B7B]" />
            </motion.div>
          </div>

          {/* Answer */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-[#E9DFF0]">
                  <p className="text-base font-body text-[#6B5B7B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </motion.div>
  )
}

export default function FAQSection({
  initialCount = 6,
}: FAQSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedFAQs = showAll ? faqs : faqs.slice(0, initialCount)

  return (
    <section className="py-20 bg-[#F5F1ED]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-[#2D1B3D]">
            FAQs
          </h2>
        </div>

        {/* FAQ Items - Full Width Stacked */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              idx={idx}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>

        {/* Load More Button */}
        {faqs.length > initialCount && (
          <div className="flex justify-center mt-12 pt-8 border-t border-[#E9DFF0]">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#6B8CBB] font-body text-lg hover:underline transition-all duration-300"
            >
              {showAll ? 'Load Less' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
