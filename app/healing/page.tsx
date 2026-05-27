'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

function RevealWrapper({ children, className, dir = 'up' }: { children: React.ReactNode, className?: string, dir?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : 'reveal'
  return <div ref={ref} className={cn(cls, className)}>{children}</div>
}

const healingModalities = [
  {
    href: '/healing/trika',
    title: 'Trika',
    subtitle: 'Tantra, Mantra & Yantra',
    icon: '✦',
    description: 'An ancient three-fold path that unifies sacred sound (Mantra), sacred geometry (Yantra) and the science of divine energy (Tantra) to awaken consciousness and align the soul with universal forces.',
    highlights: ['Mantra initiation & chanting', 'Yantra consecration & activation', 'Tantric energy practices', 'Kundalini awareness'],
    accent: '#9B59B6',
    bg: '#F5EFF8',
  },
  {
    href: '/healing/vastu',
    title: 'Vastu',
    subtitle: 'Sacred Space Harmonics',
    icon: '◈',
    description: 'Vastu Shastra is the ancient Vedic science of architecture and spatial harmony. We assess and rectify the energetic blueprint of your home or workplace to align it with natural cosmic laws — creating environments that support health, prosperity and peace.',
    highlights: ['Home & office Vastu analysis', 'Energy clearing & rebalancing', 'Sacred geometry placement', 'Directional harmonics'],
    accent: '#D4A843',
    bg: '#FFF8E1',
  },
  {
    href: '/healing/sound-healing',
    title: 'Sound Healing',
    subtitle: 'Vibrational Restoration',
    icon: '◎',
    description: 'Sound is one of the most powerful and ancient healing modalities. Using Tibetan singing bowls, crystal bowls, tuning forks and sacred chants, we guide the body and mind into deep states of relaxation and cellular restoration.',
    highlights: ['Tibetan & crystal bowl sessions', 'Nada yoga & sacred chanting', 'Binaural & frequency healing', 'Group sound bath ceremonies'],
    accent: '#E87BB0',
    bg: '#FFF0F8',
  },
]

const healingSessions = [
  { title: 'Distance Healing', desc: 'Remote energy healing for emotional, physical and spiritual balance across space and time.' },
  { title: 'Aura Clearance & Chakra Alignment', desc: 'Cleanse and realign your energy field to restore harmony in body, mind and spirit.' },
  { title: 'Akashic Records', desc: "Access your soul's journey and karmic patterns for deep insight and clarity." },
  { title: 'Bandhan Moksha Kriya', desc: 'Release karmic bonds and energetic blockages that hold you back from freedom.' },
  { title: 'Past Life Regression', desc: 'Heal deep past life imbalances, trauma and patterns that shape your present reality.' },
  { title: 'Psychic Surgery', desc: 'Deep energetic removal of imbalances, entities and blockages from the auric field.' },
  { title: 'Inner Child Healing', desc: 'Gently heal the wounded inner child to restore joy, innocence and self-love.' },
  { title: 'Karmic Clearance', desc: 'Release karmic debts and ancestral patterns to step into your highest expression.' },
]

export default function HealingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="relative pt-36 pb-24 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 50%, #E9DFF0 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <RevealWrapper>
              <div className="ornament-divider justify-center mb-6">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Healing Modalities</span>
              </div>
              <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-6 text-balance leading-tight">
                Sacred pathways to{' '}
                <span className="italic text-brand-gradient">wholeness</span>
              </h1>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-xl mx-auto">
                We offer a rich tapestry of ancient and contemporary healing modalities — each one a doorway back to your truest, most radiant self.
              </p>
            </RevealWrapper>
          </div>
        </section>

        {/* ── 3 MAIN MODALITIES ────────────────────────────────────── */}
        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-14">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Specialised Sciences</span>
              </div>
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D]">
                Trika · Vastu ·{' '}
                <span className="italic text-brand-gradient">Sound Healing</span>
              </h2>
            </RevealWrapper>

            <div className="flex flex-col gap-10">
              {healingModalities.map((mod, i) => {
                const isEven = i % 2 === 0
                return (
                  <RevealWrapper key={mod.title} dir={isEven ? 'left' : 'right'}>
                    <div className={cn(
                      'grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border shadow-sm hover:shadow-lg transition-all',
                    )} style={{ borderColor: `${mod.accent}30` }}>
                      {/* Accent panel */}
                      <div
                        className={cn(
                          'flex flex-col justify-between p-10 lg:p-12',
                          !isEven && 'lg:order-2'
                        )}
                        style={{ background: mod.bg }}
                      >
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-sm"
                              style={{ background: `linear-gradient(135deg, ${mod.accent}, ${mod.accent}80)` }}
                            >
                              {mod.icon}
                            </div>
                            <div>
                              <h3 className="font-sans text-2xl lg:text-3xl font-medium text-[#2D1B3D]">{mod.title}</h3>
                              <p className="font-body text-sm" style={{ color: mod.accent }}>{mod.subtitle}</p>
                            </div>
                          </div>
                          <p className="font-body text-base leading-relaxed text-[#6B5B7B] mb-6">{mod.description}</p>
                        </div>
                        <Link
                          href={mod.href}
                          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-body text-sm font-medium transition-all self-start hover:shadow-md"
                          style={{ background: mod.accent }}
                        >
                          Explore {mod.title}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Highlights panel */}
                      <div className={cn(
                        'bg-white p-10 lg:p-12 flex flex-col justify-center gap-4',
                        !isEven && 'lg:order-1'
                      )}>
                        <p className="font-sans text-lg font-medium text-[#2D1B3D] mb-2">What this includes:</p>
                        <ul className="flex flex-col gap-3">
                          {mod.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-3 font-body text-sm text-[#6B5B7B]">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${mod.accent}20` }}>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ background: mod.accent }} />
                              </div>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 p-4 rounded-2xl" style={{ background: `${mod.accent}10`, borderLeft: `3px solid ${mod.accent}` }}>
                          <p className="font-body text-sm italic text-[#6B5B7B]">
                            &ldquo;Each session is guided with intuitive insight, compassion and deep presence — ensuring you feel safe, supported and truly seen.&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealWrapper>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── HEALING SESSIONS ─────────────────────────────────────── */}
        <section className="py-20 bg-[#E9DFF0]/30 texture-bg">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-14">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Healing Sessions</span>
              </div>
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D]">
                Individual{' '}
                <span className="italic text-brand-gradient">healing sessions</span>
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {healingSessions.map((session, i) => (
                <RevealWrapper key={session.title} dir="up">
                  <div
                    className="premium-card bg-white rounded-2xl p-6 border border-[#E9DFF0] flex flex-col gap-3 hover:border-[#9B59B6]/30 h-full"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E9DFF0] flex items-center justify-center text-[#9B59B6] font-sans font-semibold text-sm">
                      {i + 1}
                    </div>
                    <h3 className="font-sans text-base font-medium text-[#2D1B3D]">{session.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-[#9B8BAB] flex-1">{session.desc}</p>
                    <Link href="/contact" className="font-body text-xs font-medium text-[#9B59B6] hover:text-[#6B2D8B] transition-colors flex items-center gap-1 mt-auto">
                      Book now <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #6B2D8B 0%, #E87BB0 100%)' }}
        >
          <div className="max-w-xl mx-auto px-6">
            <RevealWrapper>
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-white mb-5">
                Ready to <span className="italic">heal</span> and <span className="italic">awaken?</span>
              </h2>
              <p className="font-body text-base text-white/80 mb-8 leading-relaxed">
                Every healing journey begins with a single step. We walk beside you with love.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#6B2D8B] font-body text-sm font-semibold rounded-full hover:bg-[#FFF9F0] transition-all">
                Book a Healing Session <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
