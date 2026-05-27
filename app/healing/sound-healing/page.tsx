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

const instruments = [
  { name: 'Tibetan Singing Bowls', note: '432 Hz', desc: 'Hand-hammered bowls from the Himalayan tradition that produce rich, sustained tones promoting deep relaxation and cellular healing.' },
  { name: 'Crystal Bowls', note: '528 Hz', desc: 'Quartz crystal bowls tuned to specific chakra frequencies, creating powerful resonance that clears energetic blockages.' },
  { name: 'Tuning Forks', note: 'Binaural', desc: 'Calibrated metal forks applied to acupuncture points and energy meridians, rebalancing the nervous system and biofield.' },
  { name: 'Gong Bath', note: 'Full spectrum', desc: 'The gong produces an all-encompassing wash of sound that deeply relaxes, releases tension and induces altered states of healing.' },
  { name: 'Nada Yoga', note: 'Sacred chant', desc: 'The yoga of sound — using the voice itself as a healing instrument through Vedic chants, mantras and tonal breathing.' },
  { name: 'Binaural Beats', note: 'Delta–Gamma', desc: 'Two slightly different frequencies played in each ear, guiding the brain into specific brainwave states for healing and meditation.' },
]

const benefits = [
  'Reduces stress, anxiety and cortisol levels',
  'Promotes deep relaxation of the nervous system',
  'Clears energetic blockages in the chakra system',
  'Supports emotional release and trauma healing',
  'Improves sleep quality and depth',
  'Raises vibrational frequency and consciousness',
  'Enhances meditation and spiritual awareness',
  'Supports physical healing and pain relief',
]

export default function SoundHealingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative pt-36 pb-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #FFF0F8 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-60" />
          {/* Animated sound rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#E87BB0]/20"
                style={{
                  width: i * 200,
                  height: i * 200,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `ripple ${2 + i}s ease-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <RevealWrapper>
              <Link href="/healing" className="inline-flex items-center gap-1.5 font-body text-xs text-[#9B8BAB] hover:text-[#E87BB0] transition-colors mb-8">
                <ArrowLeft className="w-3 h-3" /> Back to Healing
              </Link>
              <div className="w-20 h-20 rounded-3xl bg-[#E87BB0] flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg shadow-[#E87BB0]/30">
                ◎
              </div>
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#E87BB0] uppercase">Vibrational Medicine</span>
              </div>
              <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-6 text-balance">
                Sound Healing —{' '}
                <span className="italic" style={{ background: 'linear-gradient(90deg, #E87BB0, #9B59B6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Vibrational Restoration</span>
              </h1>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-xl mx-auto">
                &ldquo;In the beginning was the Word, and the Word was sound.&rdquo; Sound is the original medicine — a universal language the body deeply understands and responds to.
              </p>
            </RevealWrapper>
          </div>
        </section>

        {/* Instruments */}
        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-12">
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D]">
                Our healing <span className="italic" style={{ color: '#E87BB0' }}>instruments & modalities</span>
              </h2>
            </RevealWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {instruments.map((inst, i) => (
                <RevealWrapper key={inst.name} dir="up">
                  <div className="premium-card bg-white rounded-2xl p-6 border border-[#E9DFF0] h-full flex flex-col gap-3" style={{ transitionDelay: `${i * 0.07}s` }}>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF0F8] flex items-center justify-center text-[#E87BB0] text-xl">◎</div>
                      <span className="font-body text-xs font-medium text-[#E87BB0] bg-[#FFF0F8] px-3 py-1 rounded-full">{inst.note}</span>
                    </div>
                    <h3 className="font-sans text-base font-medium text-[#2D1B3D]">{inst.name}</h3>
                    <p className="font-body text-sm leading-relaxed text-[#6B5B7B] flex-1">{inst.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#E9DFF0]/30 texture-bg">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-12">
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D]">
                Benefits of <span className="italic" style={{ color: '#E87BB0' }}>Sound Healing</span>
              </h2>
            </RevealWrapper>
            <RevealWrapper>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={b} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-[#E9DFF0]" style={{ transitionDelay: `${i * 0.04}s` }}>
                    <div className="w-5 h-5 rounded-full bg-[#FFF0F8] flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E87BB0]" />
                    </div>
                    <span className="font-body text-sm text-[#2D1B3D]">{b}</span>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        <section className="py-16 bg-[#FFF9F0] text-center">
          <RevealWrapper className="max-w-lg mx-auto px-6">
            <h2 className="font-sans text-3xl font-light text-[#2D1B3D] mb-5">
              Experience the <span className="italic" style={{ color: '#E87BB0' }}>healing power of sound</span>
            </h2>
            <p className="font-body text-base text-[#6B5B7B] mb-8 leading-relaxed">Book a private session or join one of our sacred group sound bath ceremonies.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-body text-sm font-medium rounded-full transition-all hover:shadow-md hover:opacity-90" style={{ background: 'linear-gradient(135deg, #E87BB0, #9B59B6)' }}>
              Book a Sound Healing Session <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
