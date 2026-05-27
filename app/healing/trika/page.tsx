'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

function RevealWrapper({ children, className, dir = 'up' }: { children: React.ReactNode, className?: string, dir?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : 'reveal'
  return <div ref={ref} className={cn(cls, className)}>{children}</div>
}

const aspects = [
  {
    name: 'Tantra',
    subtitle: 'The Science of Energy & Consciousness',
    icon: '✦',
    desc: 'Tantra is not what popular culture portrays it to be — it is a vast, profound body of spiritual knowledge that explores the relationship between consciousness (Shiva) and energy (Shakti). It encompasses practices that awaken the dormant spiritual power within every human being, leading to liberation and wholeness.',
    practices: ['Shakti awakening practices', 'Chakra activation through tantric methods', 'Energy transmutation and alchemy', 'Mandalas and sacred visualisation'],
  },
  {
    name: 'Mantra',
    subtitle: 'Sacred Sound & Vibrational Science',
    icon: '♪',
    desc: 'Mantras are sacred syllables, words and phrases that carry specific vibrational frequencies capable of transforming consciousness. When chanted with awareness and devotion, they align the mind with divine energies, clear karmic blockages and invoke the protection and grace of higher forces.',
    practices: ['Beeja (seed) mantra initiation', 'Deity mantra chanting and japa', 'Mantra meditation for healing', 'Protective mantra invocations'],
  },
  {
    name: 'Yantra',
    subtitle: 'Sacred Geometry & Divine Architecture',
    icon: '◈',
    desc: 'Yantras are two-dimensional geometric diagrams that serve as visual representations of divine energies. They act as instruments of focus and meditation, drawing specific cosmic energies into a space or person. When properly consecrated, a Yantra becomes a living tool for transformation.',
    practices: ['Sri Yantra and Maha Meru', 'Planetary and deity Yantras', 'Yantra consecration ceremonies', 'Yantra placement for home and workspace'],
  },
]

export default function TrikaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative pt-36 pb-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-60" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <RevealWrapper>
              <Link href="/healing" className="inline-flex items-center gap-1.5 font-body text-xs text-[#9B8BAB] hover:text-[#6B2D8B] transition-colors mb-8">
                <ArrowLeft className="w-3 h-3" /> Back to Healing
              </Link>
              <div className="w-20 h-20 rounded-3xl bg-[#9B59B6] flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg shadow-[#9B59B6]/30">
                ✦
              </div>
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">The Ancient Trinity</span>
              </div>
              <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-4 text-balance">
                Trika — <span className="italic text-brand-gradient">The Three-Fold Path</span>
              </h1>
              <p className="font-body text-sm tracking-widest text-[#9B59B6] uppercase mb-6">Tantra · Mantra · Yantra</p>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-xl mx-auto">
                Trika (meaning &ldquo;triad&rdquo;) is a profound system from Kashmir Shaivism that unifies three sacred sciences to awaken consciousness and align the soul with universal divine forces.
              </p>
            </RevealWrapper>
          </div>
        </section>

        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
            {aspects.map((aspect, i) => (
              <RevealWrapper key={aspect.name} dir={i % 2 === 0 ? 'left' : 'right'}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl p-8 lg:p-10 border border-[#E9DFF0] shadow-sm">
                  <div className="flex flex-col items-center justify-center gap-4 text-center p-6 bg-[#F5EFF8] rounded-2xl">
                    <div className="w-16 h-16 rounded-2xl bg-[#9B59B6] flex items-center justify-center text-3xl text-white shadow-sm">
                      {aspect.icon}
                    </div>
                    <h2 className="font-sans text-3xl font-semibold text-brand-gradient">{aspect.name}</h2>
                    <p className="font-body text-xs text-[#9B59B6] uppercase tracking-wider">{aspect.subtitle}</p>
                  </div>
                  <div className="lg:col-span-2 flex flex-col gap-5">
                    <p className="font-body text-base leading-relaxed text-[#6B5B7B]">{aspect.desc}</p>
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#2D1B3D] mb-3">Key Practices:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {aspect.practices.map((p) => (
                          <li key={p} className="flex items-center gap-2 font-body text-sm text-[#6B5B7B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9B59B6] flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#E9DFF0]/30 text-center">
          <RevealWrapper className="max-w-lg mx-auto px-6">
            <h2 className="font-sans text-3xl font-light text-[#2D1B3D] mb-5">
              Embark on the <span className="italic text-brand-gradient">Trika path</span>
            </h2>
            <p className="font-body text-base text-[#6B5B7B] leading-relaxed mb-8">
              Whether you are new to these sciences or deepening an existing practice, our sessions are tailored to your unique spiritual journey.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#9B59B6] text-white font-body text-sm font-medium rounded-full hover:bg-[#6B2D8B] transition-all">
              Book a Trika Session <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
