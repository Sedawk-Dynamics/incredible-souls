'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight, Wheat, Briefcase, GraduationCap, Heart, Leaf } from 'lucide-react'
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

const pillars = [
  {
    letter: 'F',
    title: 'Food',
    subtitle: 'Nourishment & Annapurna Seva',
    icon: Wheat,
    color: '#D4A843',
    bg: '#FFF8E1',
    border: '#D4A843',
    description:
      'We believe wholesome food is a sacred right and the foundation of a healthy life. Through our Annapurna Seva programme, we provide nourishing meals to communities in need, support organic community farmlands, and promote conscious, sattvic eating as a pathway to healing.',
    initiatives: [
      'Annapurna Seva — community meal distribution',
      'Organic community farmland cultivation',
      'Sattvic food education and workshops',
      'Food security for underprivileged families',
    ],
  },
  {
    letter: 'E',
    title: 'Employment',
    subtitle: 'Livelihood & Empowerment',
    icon: Briefcase,
    color: '#9B59B6',
    bg: '#F5EFF8',
    border: '#9B59B6',
    description:
      'Meaningful livelihood is essential to dignity and self-reliance. We empower individuals with vocational training, entrepreneurship support, and skill development — enabling them to build sustainable careers aligned with conscious living and personal growth.',
    initiatives: [
      'Vocational skill development programmes',
      'Spiritual entrepreneurship mentorship',
      'Women empowerment and livelihood workshops',
      'Community cooperative initiatives',
    ],
  },
  {
    letter: 'E',
    title: 'Education',
    subtitle: 'Wisdom & Inner Growth',
    icon: GraduationCap,
    color: '#E87BB0',
    bg: '#FFF0F8',
    border: '#E87BB0',
    description:
      'True education awakens both skill and inner wisdom. We champion learning that combines practical knowledge with self-awareness and spiritual growth — from childhood literacy and conscious parenting to adult learning programmes rooted in Indian wisdom traditions.',
    initiatives: [
      'Conscious education and child development',
      'Spiritual wisdom workshops and seminars',
      'Parenting with awareness programmes',
      'Ancient wisdom — modern skills integration',
    ],
  },
  {
    letter: 'H',
    title: 'Health',
    subtitle: 'Holistic Well-being',
    icon: Heart,
    color: '#C0392B',
    bg: '#FFF5F5',
    border: '#E87070',
    description:
      'Health is not merely physical but an integration of body, mind, energy and spirit. We offer holistic healing services, preventive health camps, yoga and meditation programmes, and energy healing to support communities in achieving complete well-being.',
    initiatives: [
      'Holistic healing sessions and camps',
      'Yoga, pranayama and meditation classes',
      'Energy medicine — Reiki, chakra healing',
      'Preventive health awareness programmes',
    ],
  },
  {
    letter: 'E',
    title: 'Environment',
    subtitle: 'Ecological Harmony',
    icon: Leaf,
    color: '#27AE60',
    bg: '#F0FFF4',
    border: '#27AE60',
    description:
      'We honour our deep connection to the Earth and strive to create systems aligned with ecological balance. Through tree planting, sustainable living education, water conservation and eco-village development, we nurture the environment as a living, sacred partner in our healing mission.',
    initiatives: [
      'Tree plantation and reforestation drives',
      'Water conservation and rainwater harvesting',
      'Eco-village and sustainable living models',
      'Environmental healing and earth ceremonies',
    ],
  },
]

export default function FEEHEPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F0FFF4 50%, #E9DFF0 100%)' }}>
          <div className="absolute inset-0 texture-bg opacity-50" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <RevealWrapper>
              <div className="ornament-divider justify-center mb-6">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Our Community Mission</span>
              </div>
              <h1 className="font-sans text-6xl lg:text-8xl font-semibold tracking-widest text-brand-gradient mb-4">
                F.E.E.H.E.
              </h1>
              <h2 className="font-sans text-2xl lg:text-3xl font-light text-[#2D1B3D] mb-6 text-balance">
                Food · Employment · Education · Health · Environment
              </h2>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-2xl mx-auto">
                At Incredible Souls Nature Wellness Foundation, our mission transcends individual healing. FEEHE represents our commitment to nurturing conscious, self-sustaining communities — where well-being, livelihood and inner growth coexist in harmony.
              </p>
            </RevealWrapper>
          </div>
        </section>

        {/* ── FEEHE IMAGE ──────────────────────────────────────────── */}
        <section className="bg-[#FFF9F0]">
          <RevealWrapper className="max-w-6xl mx-auto px-6 lg:px-12 -mt-8 pb-16">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <Image src="/images/feehe-hero.jpg" alt="FEEHE — Incredible Souls community programme" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2D1B3D]/40 to-transparent" />
              <div className="absolute left-8 bottom-8 max-w-sm">
                <p className="font-sans text-2xl lg:text-3xl font-light text-white italic leading-snug">
                  &ldquo;Healing the self, healing the community, healing the Earth.&rdquo;
                </p>
              </div>
            </div>
          </RevealWrapper>
        </section>

        {/* ── OVERVIEW ─────────────────────────────────────────────── */}
        <section className="py-16 bg-[#FFF9F0]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <RevealWrapper>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] mb-6">
                The FEEHE framework is the backbone of Incredible Souls Nature Wellness Foundation. It represents a bold vision — to move beyond purely spiritual healing and build a living ecosystem where communities are nourished at every level.
              </p>
              <p className="font-body text-base leading-relaxed text-[#6B5B7B]">
                Through healing, awareness and community-driven initiatives, we empower individuals to live with dignity, purpose and balance — restoring not only the self, but also the collective and the Earth we are deeply connected to.
              </p>
            </RevealWrapper>
          </div>
        </section>

        {/* ── THE 5 PILLARS ────────────────────────────────────────── */}
        <section className="py-16 bg-[#E9DFF0]/20 texture-bg">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-16">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">The Five Pillars</span>
              </div>
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D]">
                A holistic framework for{' '}
                <span className="italic text-brand-gradient">community flourishing</span>
              </h2>
            </RevealWrapper>

            <div className="flex flex-col gap-10">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon
                const isEven = i % 2 === 0
                return (
                  <RevealWrapper key={pillar.title + i} dir={isEven ? 'left' : 'right'}>
                    <div className={cn(
                      'flex flex-col lg:flex-row gap-8 items-center bg-white rounded-3xl p-8 lg:p-10 border shadow-sm hover:shadow-md transition-all',
                      !isEven && 'lg:flex-row-reverse'
                    )} style={{ borderColor: `${pillar.border}30` }}>
                      {/* Letter & Icon Block */}
                      <div className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-48 gap-4">
                        <div
                          className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl font-sans font-bold text-white shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}99)` }}
                        >
                          {pillar.letter}
                        </div>
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: pillar.bg }}>
                          <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-sans text-2xl lg:text-3xl font-medium text-[#2D1B3D]">{pillar.title}</h3>
                          <span className="font-body text-sm text-white px-3 py-1 rounded-full" style={{ background: pillar.color }}>
                            {pillar.subtitle}
                          </span>
                        </div>
                        <p className="font-body text-base leading-relaxed text-[#6B5B7B] mb-5">{pillar.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {pillar.initiatives.map((init) => (
                            <div key={init} className="flex items-start gap-2 text-sm font-body text-[#6B5B7B]">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: pillar.color }} />
                              {init}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </RevealWrapper>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── MISSION CTA ──────────────────────────────────────────── */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #2D1B3D 0%, #6B2D8B 100%)' }}
        >
          <div className="max-w-2xl mx-auto px-6">
            <RevealWrapper>
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-white mb-5 text-balance">
                Join us in building a{' '}
                <span className="italic text-brand-gradient">conscious community</span>
              </h2>
              <p className="font-body text-base text-[#C5B8D0] leading-relaxed mb-10">
                Through healing, awareness and community-driven action, we empower individuals to live with dignity, purpose and balance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="px-8 py-3.5 bg-white text-[#6B2D8B] font-body text-sm font-semibold rounded-full hover:bg-[#FFF9F0] transition-all">
                  Get Involved
                </Link>
                <Link href="/about" className="px-8 py-3.5 border border-white/40 text-white font-body text-sm rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
