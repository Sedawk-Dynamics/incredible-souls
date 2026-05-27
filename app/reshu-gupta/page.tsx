'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowLeft } from 'lucide-react'

export default function ReshuGuptaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── BACK BUTTON ──────────────────────────────────────── */}
        <section className="pt-28 pb-6 px-6 max-w-7xl mx-auto">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#9B59B6] hover:text-[#6B2D8B] transition-colors font-body text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>
        </section>

        {/* ── HERO WITH IMAGE & BASIC INFO ──────────────────────– */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 50%, #E9DFF0 100%)' }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Image */}
              <div className="lg:col-span-1">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(107,45,139,0.15)]">
                  <Image
                    src="/images/reshu-gupta-portrait.jpg"
                    alt="Reshu Gupta"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B3D]/30 to-transparent" />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="ornament-divider mb-4">
                  <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Meet Our Founder</span>
                </div>
                <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-2">
                  Reshu Gupta
                </h1>
                <p className="font-body text-lg text-[#9B59B6] font-medium mb-4">
                  Founder & Director
                </p>
                <p className="font-body text-sm font-medium text-[#9B59B6] uppercase tracking-widest mb-6">
                  Spiritual Coach · Soul Alchemist
                </p>
                <p className="font-body text-base leading-relaxed text-[#6B5B7B] mb-6">
                  Reshu Gupta is a visionary spiritual healer and intuitive mentor who guides individuals through deep transformation and awakening. Her mission is to create a space where every soul feels safe to return to its essence.
                </p>

                {/* Contact */}
                <div className="space-y-2">
                  <a
                    href="tel:+917709008011"
                    className="block font-body text-sm text-[#9B8BAB] hover:text-[#6B2D8B] transition-colors"
                  >
                    +91 7709008011
                  </a>
                  <a
                    href="mailto:incrediblesouls@gmail.com"
                    className="block font-body text-sm text-[#9B8BAB] hover:text-[#6B2D8B] transition-colors break-all"
                  >
                    incrediblesouls@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FULL STORY ──────────────────────────────────────── */}
        <section className="py-24 bg-[#FFF9F0]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="font-sans text-4xl font-light text-[#2D1B3D] mb-12">
              <span className="italic text-brand-gradient">A Powerful Remembrance</span> of Who You Truly Are
            </h2>

            <div className="space-y-6 font-body text-base leading-relaxed text-[#6B5B7B]">
              <p>
                There are moments in life that arrive quietly, yet change everything.
              </p>

              <p>
                One afternoon, I was sitting at my home in Pune, unaware that life was about to open a new doorway for me. I received a call from my father, inviting me to attend a Yagya event in Vrindavan. I heard his words, but beyond them, something deeper stirred within me — a soft inner whisper, almost like a sacred calling.
              </p>

              <p>
                It felt as if something within me was saying, "The time has come… grace and blessings are waiting." I did not fully understand it then, but I trusted the pull. Soon, I found myself in Vrindavan, surrounded by the sacred fire of 108 Yagyas, with mantras filling the air and divine vibrations all around me.
              </p>

              <p>
                In that space, something awakened within my soul. It was not something the mind could explain. Grace moved through me, beyond logic, beyond thought. A quiet message arose from within: "Move inward… towards your deep knowing." That moment marked the beginning of my inner journey.
              </p>

              <p className="pt-4">
                Before this awakening, my life was deeply connected to the outer world. As an architect, I designed spaces — homes, hotels, schools, hospitals — spaces that carried beauty, function, and purpose. I studied in Delft, Netherlands, and Venice, Italy, and spent meaningful years across Europe and the United States. I lived among different cultures, absorbing their ways, their rhythms, their traditions, and their understanding of life.
              </p>

              <p>
                Yet, somewhere deep within, another journey was waiting for me.
              </p>

              <p className="pt-4">
                When I returned to India, I began to feel the sacredness of this land in a new way — the temples, the mantras, the rituals, the silence, the devotion. During a visit to Pondicherry, I sat quietly at the Samadhi of The Mother and Sri Aurobindo. Their presence was deeply powerful. In that stillness, questions began to rise within me.
              </p>

              <p className="pl-6 italic border-l-4 border-[#9B59B6]">
                What lies beyond fear?<br />
                What is faith?<br />
                What does it truly mean to surrender?<br />
                What is divine timing?<br />
                How do we trust the plan of the Divine?
              </p>

              <p className="pt-4">
                The answers did not come all at once. They came slowly — through silence, through retreats, through meditation, through healing, and through my own inner experiences.
              </p>

              <p>
                I began exploring past life regression, womb healing, inner child work, ancestral clearing, and deeper energy practices. In one powerful fire-based regression, I saw karmic heaviness dissolving like smoke. It felt as if my soul was releasing what it no longer needed to carry. That experience changed something fundamental within me.
              </p>

              <p>
                I started recognizing karmic patterns, soul memories, and the unseen influences that shape our lives. A deeper thirst arose in me — to understand what happens between lifetimes, how the soul remembers, and how healing unfolds through grace. These were not just mystical experiences for me. They were moments of recognition — moments where I felt I was reclaiming something I had always known.
              </p>

              <p className="pt-4">
                My pilgrimages continued.
              </p>

              <p>
                I was called to Tiruvannamalai, Rishikesh, Ujjain, Dakshineswar Kali in Kolkata, Shirdi, and the sacred caves of Vashishta and Mahavatar Babaji. At Neem Karoli Baba's Ashram and Pujya Niruma's Samadhi, I experienced silent transmissions that gently dissolved layers of fear, ego, and doubt. Each sacred place gave me something different — not just peace, but initiation.
              </p>

              <p>
                At Sarnath, where Gautama Buddha first shared the Dhamma, I meditated in deep stillness. A vast cosmic peace surrounded me. In Kashi, I bowed to the eternal presence of Lord Shiva. And through the fierce grace of the Dus Mahavidyas, I began witnessing the shattering of illusions and the rising of divine feminine wisdom within me.
              </p>

              <p className="pt-4">
                Over time, I understood that healing is not about becoming someone else. It is about remembering who we truly are.
              </p>

              <p className="pt-4 px-6 bg-[#E9DFF0]/30 py-6 rounded-2xl border border-[#E9DFF0]">
                <strong className="text-[#2D1B3D]">Today, I walk this path in service.</strong> Through soul-aligned healing, past life regression, energy work, spiritual coaching, workshops, and teachings, I support others in reconnecting with their own inner light, divine truth, and soul power.
              </p>

              <p className="pt-4">
                My work brings together intuition and intellect, compassion and clarity, grace and grounded understanding. Every session is an invitation to pause, look within, release what no longer serves you, and return to the wisdom already present in your soul.
              </p>

              <p className="pt-8">
                So, as you listen to this, I invite you to remember:
              </p>

              <div className="pl-6 space-y-3 pt-4">
                <p className="font-medium text-[#2D1B3D]">The light you seek is already within you.</p>
                <p className="font-medium text-[#2D1B3D]">The answers you search for are waiting in your own inner silence.</p>
                <p className="font-medium text-[#2D1B3D]">And the journey of healing is, truly, a powerful remembrance of who you are.</p>
              </div>

              <p className="pt-8 italic text-[#9B59B6]">
                With love and grace,<br />
                Reshu Gupta<br />
                <span className="font-medium">Founder | Spiritual Coach | Soul Alchemist</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #E9DFF0 0%, #FFF9F0 100%)' }}
        >
          <div className="max-w-lg mx-auto px-6">
            <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D] mb-5">
              Ready to begin your{' '}
              <span className="italic text-brand-gradient">healing journey?</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6B2D8B] text-[#FFF9F0] font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(107,45,139,0.4)]"
            >
              Book a Session
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
