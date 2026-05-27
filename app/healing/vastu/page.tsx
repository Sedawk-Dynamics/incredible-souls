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

const directions = [
  { dir: 'North', deity: 'Kubera', quality: 'Wealth & Prosperity', color: '#D4A843' },
  { dir: 'North-East', deity: 'Shiva', quality: 'Wisdom & Spirituality', color: '#9B59B6' },
  { dir: 'East', deity: 'Indra', quality: 'Success & Growth', color: '#27AE60' },
  { dir: 'South-East', deity: 'Agni', quality: 'Energy & Vitality', color: '#E74C3C' },
  { dir: 'South', deity: 'Yama', quality: 'Order & Discipline', color: '#2D1B3D' },
  { dir: 'South-West', deity: 'Nirrti', quality: 'Stability & Relationships', color: '#8B4513' },
  { dir: 'West', deity: 'Varuna', quality: 'Gains & Savings', color: '#2980B9' },
  { dir: 'North-West', deity: 'Vayu', quality: 'Movement & Change', color: '#7F8C8D' },
]

const services = [
  { title: 'Residential Vastu', desc: 'Complete analysis of your home — from the main entrance to bedrooms, kitchen, puja room and more. We provide simple, practical remedies without demolition.' },
  { title: 'Commercial Vastu', desc: 'Align your office, shop or business space with prosperity-supporting energies to boost productivity, teamwork and financial flow.' },
  { title: 'Plot & Land Analysis', desc: 'Before you build, ensure your land is energetically suited for your goals. We assess the plot shape, slopes, soil and surrounding environment.' },
  { title: 'Vastu Energy Clearing', desc: 'Energetic deep-cleansing of a space using sacred tools, mantras and geometric corrections to remove stagnant or harmful energies.' },
]

export default function VastuPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative pt-36 pb-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #FFF8E1 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-60" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <RevealWrapper>
              <Link href="/healing" className="inline-flex items-center gap-1.5 font-body text-xs text-[#9B8BAB] hover:text-[#D4A843] transition-colors mb-8">
                <ArrowLeft className="w-3 h-3" /> Back to Healing
              </Link>
              <div className="w-20 h-20 rounded-3xl bg-[#D4A843] flex items-center justify-center text-4xl text-white mx-auto mb-6 shadow-lg shadow-[#D4A843]/30">
                ◈
              </div>
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#D4A843] uppercase">Vedic Spatial Science</span>
              </div>
              <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-6 text-balance">
                Vastu Shastra —{' '}
                <span className="italic" style={{ color: '#D4A843' }}>Sacred Space Harmonics</span>
              </h1>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-xl mx-auto">
                The ancient Vedic science of architecture and space alignment. When your environment vibrates in harmony with cosmic law, every area of life — health, wealth, relationships and peace — flourishes.
              </p>
            </RevealWrapper>
          </div>
        </section>

        {/* Directional wheel */}
        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-12">
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D]">
                The <span className="italic text-brand-gradient">8 Directions</span> of Vastu
              </h2>
              <p className="font-body text-base text-[#9B8BAB] mt-3 max-w-md mx-auto">Each direction is governed by a divine deity and carries a specific energetic quality that influences your life.</p>
            </RevealWrapper>
            <RevealWrapper>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {directions.map((d) => (
                  <div key={d.dir} className="bg-white rounded-2xl p-5 border border-[#E9DFF0] text-center hover:shadow-md transition-all premium-card">
                    <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: `${d.color}20` }}>
                      <span className="font-sans text-xs font-bold" style={{ color: d.color }}>{d.dir.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <p className="font-sans text-sm font-semibold text-[#2D1B3D]">{d.dir}</p>
                    <p className="font-body text-xs text-[#9B59B6] mt-0.5">{d.deity}</p>
                    <p className="font-body text-xs text-[#9B8BAB] mt-1 leading-tight">{d.quality}</p>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#E9DFF0]/20 texture-bg">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-12">
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D]">
                Our Vastu <span className="italic" style={{ color: '#D4A843' }}>Services</span>
              </h2>
            </RevealWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((svc, i) => (
                <RevealWrapper key={svc.title} dir="up">
                  <div className="premium-card bg-white rounded-2xl p-7 border border-[#E9DFF0] h-full" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF8E1] flex items-center justify-center mb-4">
                      <span className="text-[#D4A843] text-lg">◈</span>
                    </div>
                    <h3 className="font-sans text-lg font-medium text-[#2D1B3D] mb-3">{svc.title}</h3>
                    <p className="font-body text-sm leading-relaxed text-[#6B5B7B]">{svc.desc}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FFF9F0] text-center">
          <RevealWrapper className="max-w-lg mx-auto px-6">
            <h2 className="font-sans text-3xl font-light text-[#2D1B3D] mb-5">Transform your <span className="italic" style={{ color: '#D4A843' }}>space</span></h2>
            <p className="font-body text-base text-[#6B5B7B] mb-8 leading-relaxed">Book a Vastu consultation and experience the profound shift that comes from living in alignment with natural cosmic law.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-body text-sm font-medium rounded-full transition-all hover:shadow-md" style={{ background: '#D4A843' }}>
              Book a Vastu Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
