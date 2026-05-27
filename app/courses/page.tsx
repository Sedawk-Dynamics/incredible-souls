'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowRight, Clock, Monitor, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

function RevealWrapper({ children, className, dir = 'up' }: { children: React.ReactNode, className?: string, dir?: 'up' | 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  const cls = dir === 'left' ? 'reveal-left' : dir === 'right' ? 'reveal-right' : 'reveal'
  return <div ref={ref} className={cn(cls, className)}>{children}</div>
}

const courses = [
  {
    title: 'Karmic Clearance & Karuna Reiki',
    duration: '4 Hours',
    mode: 'Online / In-person',
    price: '₹3,459',
    level: 'Beginner–Intermediate',
    desc: 'Learn to identify and clear karmic patterns while channelling the compassionate energy of Karuna Reiki for deep emotional and soul-level healing.',
    highlights: ['Karmic pattern identification', 'Karuna Reiki attunement', 'Energy healing techniques', 'Self-healing practices'],
    tag: 'Popular',
    tagColor: '#9B59B6',
  },
  {
    title: 'Psychic Surgery & Psychic Being',
    duration: '4 Hours',
    mode: 'Online / In-person',
    price: '₹6,300',
    level: 'Intermediate',
    desc: 'An advanced healing course that teaches the art of psychic surgery — removing energetic blockages, entities and trauma from the auric field at the deepest levels.',
    highlights: ['Auric field scanning', 'Entity removal techniques', 'Psychic protection practices', 'Psychic development'],
    tag: 'Advanced',
    tagColor: '#E87BB0',
  },
  {
    title: 'Money & Abundance',
    duration: '3 Hours',
    mode: 'Online',
    price: '₹3,459',
    level: 'All Levels',
    desc: 'Break free from scarcity mindset and karmic money blocks. Align your energy with the natural flow of abundance through spiritual and practical tools.',
    highlights: ['Abundance mindset rewiring', 'Karmic money block clearing', 'Prosperity mantras & practices', 'Manifestation techniques'],
    tag: 'Bestseller',
    tagColor: '#D4A843',
  },
  {
    title: 'Lama Fera',
    duration: '5 Hours',
    mode: 'Online / In-person',
    price: '₹5,550',
    level: 'Beginner–Intermediate',
    desc: 'Lama Fera is a powerful Tibetan Buddhist healing system that uses sacred symbols and universal energy for deep healing, protection and spiritual awakening.',
    highlights: ['Lama Fera attunement', 'Sacred symbol activation', 'Distance healing application', 'Protection techniques'],
    tag: null,
    tagColor: '',
  },
  {
    title: 'Harmony & Zero State',
    duration: '4 Hours',
    mode: 'Online',
    price: '₹3,459',
    level: 'All Levels',
    desc: 'Return to your natural state of zero — a place of complete harmony, stillness and inner peace. Learn powerful techniques to reset your energetic frequency.',
    highlights: ['Zero point energy practices', 'Harmonising relationships', 'Stress & anxiety release', 'Inner stillness techniques'],
    tag: null,
    tagColor: '',
  },
  {
    title: 'Relationships & Inner Child Healing',
    duration: '4 Hours',
    mode: 'Online / In-person',
    price: 'On Request',
    level: 'All Levels',
    desc: 'Heal the root wounds that create painful relationship patterns. Connect with and nurture your inner child to restore joy, trust and healthy love in your life.',
    highlights: ['Inner child reconnection', 'Relationship pattern healing', 'Emotional wound clearing', 'Healthy love practices'],
    tag: null,
    tagColor: '',
  },
  {
    title: 'Past Life Regression Therapy Course',
    duration: '8 Days',
    mode: 'In-person / Online',
    price: '₹21,000',
    level: 'Professional',
    desc: 'A comprehensive professional training in Past Life Regression Therapy. Learn to guide clients through past life journeys to heal deep karmic wounds and patterns.',
    highlights: ['Induction & regression techniques', 'Karmic healing protocols', 'Professional case studies', 'Certification upon completion'],
    tag: 'Flagship',
    tagColor: '#6B2D8B',
  },
]

const workshops = [
  { title: 'Healing Workshops', desc: 'Intensive group healing experiences on specific themes.', icon: Users },
  { title: 'Residential Retreats', desc: 'Immersive multi-day healing and awakening retreats.', icon: Monitor },
  { title: 'Yoga & Asana', desc: 'Sacred movement practices for body, mind and soul.', icon: Users },
  { title: 'Annapurna Seva', desc: 'Community nourishment and conscious eating workshops.', icon: Clock },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="relative pt-36 pb-20 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <RevealWrapper>
              <div className="ornament-divider justify-center mb-6">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Learning & Transformation</span>
              </div>
              <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-6 text-balance">
                Courses &{' '}
                <span className="italic text-brand-gradient">Workshops</span>
              </h1>
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-xl mx-auto">
                Deepen your practice, expand your wisdom and transform your life through our carefully curated healing and spiritual development programmes.
              </p>
            </RevealWrapper>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-14">
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D]">
                Our <span className="italic text-brand-gradient">learning programmes</span>
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <RevealWrapper key={course.title} dir="up">
                  <div
                    className="premium-card bg-white rounded-3xl border border-[#E9DFF0] overflow-hidden flex flex-col h-full hover:border-[#9B59B6]/30"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    {/* Card header */}
                    <div className="p-6 pb-4" style={{ background: 'linear-gradient(135deg, #F5EFF8, #FFF9F0)' }}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <span className="text-[#9B59B6] font-sans font-bold text-sm">{i + 1}</span>
                        </div>
                        {course.tag && (
                          <span className="font-body text-[10px] font-semibold px-3 py-1 rounded-full text-white uppercase tracking-wider" style={{ background: course.tagColor }}>
                            {course.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="font-sans text-lg font-medium text-[#2D1B3D] leading-snug">{course.title}</h3>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 px-6 py-3 border-t border-b border-[#E9DFF0] bg-[#FAFAFA]">
                      <div className="flex items-center gap-1.5 font-body text-xs text-[#9B8BAB]">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 font-body text-xs text-[#9B8BAB]">
                        <Monitor className="w-3.5 h-3.5" />
                        {course.mode}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <p className="font-body text-sm leading-relaxed text-[#6B5B7B]">{course.desc}</p>
                      <div>
                        <p className="font-body text-xs font-semibold text-[#2D1B3D] uppercase tracking-widest mb-2">You will learn:</p>
                        <ul className="flex flex-col gap-1.5">
                          {course.highlights.map((h) => (
                            <li key={h} className="flex items-center gap-2 font-body text-xs text-[#6B5B7B]">
                              <span className="w-1 h-1 rounded-full bg-[#9B59B6] flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6 flex items-center justify-between mt-auto pt-4 border-t border-[#E9DFF0]">
                      <div>
                        <p className="font-body text-xs text-[#9B8BAB]">{course.level}</p>
                        <p className="font-sans text-xl font-semibold text-brand-gradient">{course.price}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="flex items-center gap-1.5 px-4 py-2.5 bg-[#6B2D8B] text-white font-body text-xs font-medium rounded-full hover:bg-[#9B59B6] transition-all"
                      >
                        Enrol <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops & Events */}
        <section className="py-20 bg-[#E9DFF0]/30 texture-bg">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-12">
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D]">
                Workshops, Retreats &{' '}
                <span className="italic text-brand-gradient">Events</span>
              </h2>
            </RevealWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {workshops.map((w, i) => {
                const Icon = w.icon
                return (
                  <RevealWrapper key={w.title} dir="up">
                    <div className="premium-card bg-white rounded-2xl p-6 border border-[#E9DFF0] text-center flex flex-col items-center gap-3" style={{ transitionDelay: `${i * 0.1}s` }}>
                      <div className="w-12 h-12 rounded-2xl bg-[#E9DFF0] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#9B59B6]" />
                      </div>
                      <h3 className="font-sans text-sm font-semibold text-[#2D1B3D]">{w.title}</h3>
                      <p className="font-body text-xs leading-relaxed text-[#9B8BAB]">{w.desc}</p>
                    </div>
                  </RevealWrapper>
                )
              })}
            </div>
          </div>
        </section>

        {/* Divine Shop */}
        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <RevealWrapper>
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Sacred Products</span>
              </div>
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D] mb-5">
                The Divine Shop
              </h2>
              <p className="font-body text-base text-[#6B5B7B] leading-relaxed mb-4">
                Explore our curated collection of healing products — Crystals, Healing Powders, Aroma Oils, Lama Fera Kits, Rudraksha and more. Each item is carefully selected and energetically charged for your healing journey.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                {['Crystals', 'Healing Powders', 'Aroma Oils', 'Lama Fera Kit', 'Rudraksha'].map((item) => (
                  <span key={item} className="px-4 py-2 bg-[#E9DFF0] text-[#6B2D8B] font-body text-sm rounded-full">{item}</span>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all">
                Enquire About Products <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
