'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TestimonialCarousel from '@/components/testimonial-carousel'
import ShopCarousel from '@/components/shop-carousel'
import HealingModalities from '@/components/healing-modalities'
import { HealingModalitiesList } from '@/components/healing-modalities-list'
import { HealingModalitiesList1 } from '@/components/healing-modalities-list1'
import { CoursesCarousel } from '@/components/courses-carousel'
import { GenericCarousel } from '@/components/generic-carousel'
import { PrinciplesCarousel } from '@/components/principles-carousel'
import VerticalsGrid from '@/components/verticals-grid'
import FAQSection from '@/components/faq-section'
import ImageSlider from '@/components/image-slider'
import { ArrowRight, Star, Sparkles, Leaf, Heart, Sun, Users, BookOpen, Award, Calendar, Clock, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const stats = [
  { value: '720+', label: 'Souls Healed', icon: Heart },
  { value: '350+', label: 'Workshops', icon: BookOpen },
  { value: '8+', label: 'Years Experience', icon: Award },
  { value: '251+', label: 'Seminars', icon: Calendar },
]

const services = [
  {
    title: 'Distance Healing',
    desc: 'Remote energy healing for emotional, physical and spiritual balance across space and time.',
    icon: '◎',
    href: '/healing',
  },
  {
    title: 'Aura Clearance & Chakra Alignment',
    desc: 'Cleanse and realign your energy field to restore harmony in body, mind and spirit.',
    icon: '✦',
    href: '/healing',
  },
  {
    title: 'Akashic Records',
    desc: "Access your soul's journey, karmic patterns and higher wisdom through sacred records.",
    icon: '◈',
    href: '/healing',
  },
  {
    title: 'Past Life Regression',
    desc: 'Heal deep past life imbalances, trauma and patterns that shape your present reality.',
    icon: '⟁',
    href: '/healing',
  },
  {
    title: 'Trika — Tantra, Mantra & Yantra',
    desc: 'Ancient tantric sciences of vibration, sacred geometry and divine invocation.',
    icon: '☸',
    href: '/healing/trika',
  },
  {
    title: 'Sound Healing',
    desc: 'Restore inner harmony through the powerful vibrational frequencies of sacred sound.',
    icon: '♪',
    href: '/healing/sound-healing',
  },
]

const whyUs = [
  { title: 'Personalized Healing Journeys', desc: 'Every session is intuitively tailored to your unique soul path and healing needs.', icon: Sparkles },
  { title: 'Root-Level Transformation', desc: 'We address the karmic and energetic root of imbalances for lasting, deep shifts.', icon: Leaf },
  { title: 'Ancient & Modern Modalities', desc: 'A sacred blend of time-tested wisdom and contemporary healing techniques.', icon: Sun },
  { title: 'Conscious Community', desc: 'Held within a nurturing community that walks beside you every step of the way.', icon: Users },
]

const testimonials = [
  {
    name: 'Sumit Arora',
    review: 'A truly life-changing experience. Reshu is warm, compassionate, and incredibly gifted. The PLR sessions were deeply insightful and eye-opening. Trust me, you will never be the same person again.',
    stars: 5,
  },
  {
    name: 'Shallu Panwar',
    review: 'The Lama Fera class was truly transformative. The energy was powerful yet peaceful. I left feeling lighter, more balanced, and spiritually uplifted. Highly recommended for anyone seeking deep healing.',
    stars: 5,
  },
  {
    name: 'Sonal Priya',
    review: 'Reshu is an incredible soul with a true gift for healing. Every session brings deep emotional release, clarity, and a beautiful sense of peace. She is a blessing for anyone seeking genuine inner transformation.',
    stars: 5,
  },
]

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

function ParticleOrb({ size, x, y, delay }: { size: number, x: string, y: string, delay: number }) {
  return (
    <div
      className="absolute rounded-full opacity-30 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: 'radial-gradient(circle, #E87BB0 0%, #9B59B6 50%, transparent 100%)',
        animation: `float ${4 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        filter: 'blur(1px)',
      }}
    />
  )
}

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO (50/50 Video) ───────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-16 lg:pb-16"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 40%, #E9DFF0 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-20" />
          {/* <ParticleOrb size={120} x="8%" y="15%" delay={0} />
          <ParticleOrb size={80} x="85%" y="10%" delay={1.5} /> */}

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-15">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6 animate-fadeInLeft">
              <div className="inline-flex items-center gap-2 px-5 py-2 pt-4 rounded-full bg-[#E9DFF0]/70 backdrop-blur-sm border border-[#9B59B6]/20 w-fit mt-3">
  <span className="w-1.5 h-1.5 rounded-full bg-[#9B59B6]" />
  <span className="font-body text-xs font-medium tracking-[0.2em] text-[#6B2D8B] uppercase">
    Heal Deeply. Awaken Fully.
  </span>
</div>

              <h1 className="font-sans text-5xl lg:text-6xl font-light leading-[1.1] text-[#2D1B3D] text-balance">
                The light that <span className="text-brand-gradient font-medium italic">you seek</span> lives within you
              </h1>

              <p className="font-body text-base text-[#6B5B7B] leading-relaxed">
                At Incredible Souls, we support you across four core dimensions of growth and awakening - Holistic Health, Loving Relationships, Money & Abundance and Spiritual Awakening.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-8 py-3.5 bg-[#6B2D8B] text-[#FFF9F0] font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(107,45,139,0.4)]"
                >
                  Book a Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/healing"
                  className="flex items-center gap-2 px-8 py-3.5 bg-transparent text-[#6B2D8B] font-body text-sm font-medium rounded-full border border-[#9B59B6]/40 hover:bg-[#E9DFF0]/60 hover:border-[#9B59B6] transition-all duration-300"
                >
                  Explore Healing
                </Link>
              </div>
            </div>

            {/* Right: Video */}
            <div className="relative animate-fadeInRight">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(107,45,139,0.2)] bg-black">
                <video
                  src="/videos/hero-banner.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6B2D8B]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#9B59B6]/20 blur-2xl" />
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────── */}
        <section className="bg-[#E9DFF0]/40 py-10 texture-bg">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <RevealWrapper key={stat.label} className="text-center" dir="up">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FFF9F0] shadow-sm mb-3 mx-auto"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <Icon className="w-5 h-5 text-[#9B59B6]" />
                  </div>
                  <p className="font-sans text-4xl font-semibold text-brand-gradient mb-1">{stat.value}</p>
                  <p className="font-body text-sm text-[#9B8BAB]">{stat.label}</p>
                </RevealWrapper>
              )
            })}
          </div>
        </section>



{/* ── LEARNING COURSES ─────────────────────────────────────── */}
<section className="py-12 bg-[#E9DFF0]/30 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-8 hidden lg:block">
      <span className="text-xs tracking-[0.25em] text-[#9B59B6] uppercase">
        Learning Courses
      </span>

      <h2 className="text-4xl lg:text-5xl font-light text-[#2D1B3D] mt-3">
        Upcoming{" "}
        <span className="italic text-[#8B4BB3]">
          Workshops
        </span>
      </h2>
    </div>

    {/* Courses */}
    <div className="space-y-6">
      {[
        {
          id: "1",
          title: "Standard Lama Healing",
          description:
            "A foundational introduction to Lama Fera Healing with chakra science, healing techniques, and six sacred symbols for self and others energy healing.",
          image: "/images/standard-lama-healing.jpg",
          date: "8th June – 9th June",
          language: "Online",
          price: "₹5,550",
          startsIn: "3 Days",
        },
        {
          id: "2",
          title: "Advanced Lama Healing",
          description:
            "Advanced Lama Fera healing with powerful symbols for deep emotional, karmic, and energetic cleansing.",
          image: "/lama-fera-advanced-healing .jpeg",
          date: "10th June – 11th June",
          language: "Online",
          price: "₹5,550",
          startsIn: "5 Days",
        },
        {
          id: "3",
          title: "Relationships & Inner Child Healing",
          description:
            "Healing childhood wounds and emotional patterns to restore love, trust, and inner harmony.",
          image: "/Relationships & Inner Child Healing 01.png",
          date: "29th June – 3rd July",
          language: "Online",
          price: "₹15,000",
          startsIn: "10 Days",
        },
        {
          id: "4",
          title: "Past Life Regressions Therapy Course",
          description:
            "An 8-day transformative journey into Past Life Regression to heal karmic patterns, release emotional blocks, awaken intuition, and reconnect with your soul wisdom.",
          image: "/images/past-life-regression.jpg",
          date: "31st July – 7th August",
          language: "Online",
          price: "₹21,600",
          startsIn: "15 Days",
        },
      ].map((workshop) => (
        <div
          key={workshop.id}
          className="max-w-5xl mx-auto bg-[#F7F3F8] border border-[#ECE6EF] rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Image */}
            <div className="relative lg:w-[36%] h-[260px] p-4">
              <div className="relative h-full overflow-hidden rounded-tl-[50px] rounded-br-[50px]">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
              
              {/* Title */}
              <h3 className="text-2xl lg:text-[38px] font-semibold text-[#2D1B3D] mb-4">
                {workshop.title}
              </h3>

              {/* Description */}
              <p className="text-[#6D6875] text-base leading-relaxed mb-6 max-w-3xl">
                {workshop.description}
              </p>

              {/* Info Pills + Register Button */}
              <div className="flex flex-wrap items-center gap-4 mb-7">
                
                {/* Date */}
                <div className="bg-white border border-[#E7E0EC] rounded-2xl px-5 py-3 flex items-center gap-2 shadow-sm">
                  <span>📅</span>
                  <span className="text-sm text-[#4A4453]">
                    {workshop.date}
                  </span>
                </div>

                {/* Language */}
                <div className="bg-white border border-[#E7E0EC] rounded-2xl px-5 py-3 flex items-center gap-2 shadow-sm">
                  <span>🌐</span>
                  <span className="text-sm text-[#4A4453]">
                    {workshop.language}
                  </span>
                </div>

                {/* Register Button */}
                <div
                  onClick={() => setActiveCourse(workshop.id)}
                  className={`flex items-center gap-4 px-6 py-3 rounded-full transition-all duration-300 w-fit cursor-pointer
                  ${
                    activeCourse === workshop.id
                      ? "bg-[#066b67] text-white"
                      : "bg-[#0B8C87] text-white"
                  }`}
                >
                  <span className="font-semibold text-lg lg:text-xl">
                    Register Now
                  </span>

                  {/* Divider */}
                  <span className="w-px h-6 bg-white/30" />

                  {/* Price */}
                  <span className="font-bold text-lg lg:text-xl">
                    {workshop.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View All */}
    <div className="text-center mt-6">
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 px-8 py-3 border border-[#9B59B6]/40 text-[#6B2D8B] rounded-full hover:bg-[#9B59B6] hover:text-white transition-all duration-300"
      >
        View All Workshops
      </Link>
    </div>
  </div>
</section>

       

        {/* ── HEALING MODALITIES & SACRED SCIENCES ──────────────────── */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <HealingModalitiesList
              sectionLabel="What We Offer"
              title="Healing Modalities & Sacred Sciences"
              modalities={[
                {
                  id: 'karmic-clearance-karuna-reiki',
                  title: 'Karmic Clearance & Karuna Reiki',
                  description:
                    'An advanced compassionate healing system for karmic release, emotional healing, spiritual growth and multidimensional energy transformation.',
                  image: '/Karmic Clearance & Karuna Reiki.webp',
                },
                {
                  id: 'psychic-surgery-psychic-being',
                  title: 'Psychic Surgery & Psychic Being',
                  description:
                    'A compassionate multidimensional healing system for karmic release, energetic cleansing, emotional healing and soul alignment.',
                  image: '/Psychic Surgery & Psychic Being.webp',
                },
                {
                  id: 'money-abundance',
                  title: 'Money & Abundance',
                  description:
                    'A transformational healing journey to release scarcity, activate abundance consciousness and align with prosperity, stability, and soulful receiving.',
                  image: '/Money abundance.webp',
                },
              ]}
            />
          </div>
        </section>






        {/* ── HEALING SESSIONS ─────────────────────────────────────── */}
        <section className="pt-0 pb-12 mt-0 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <HealingModalitiesList1
              // sectionLabel="Healing Sessions"
              // title="Healing Sessions & Energy Work"
              // subtitle="Transform your energy, emotions and inner well-being through guided healing modalities."
              modalities={[
                {
                  id: 'distance-healing',
                  title: 'Distance Healing',
                  description:
                    'Experience powerful remote energy healing for emotional, physical and spiritual balance from anywhere in the world.',
                  image: '/Distance-Healing.webp',
                },
                {
                  id: 'aura-clearance-chakras-aligning',
                  title: 'Aura Clearance & Chakras Aligning',
                  description:
                    'Cleanse stagnant energies and realign your chakras to restore emotional clarity, energetic harmony and inner peace.',
                  image: '/Aura Clearance & Chakras Aligning.webp',
                },
                {
                  id: 'bandhan-moksha-kriya',
                  title: 'Bandhan Moksha Kriya',
                  description:
                    'Release karmic blocks, negative energetic ties and emotional burdens through sacred Bandhan Moksha healing practices.',
                  image: '/bandhan-moksha-kriya.webp',
                },
              ]}
            />
          </div>
        </section>









        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        {/* <section className="py-24 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-14">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Client Journeys</span>
              </div>
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D]">
                Words from{' '}
                <span className="italic text-brand-gradient">healed souls</span>
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <RevealWrapper key={t.name} dir="up">
                  <div
                    className="premium-card bg-white rounded-2xl p-7 border border-[#E9DFF0] flex flex-col gap-4 h-full"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex gap-1">
                      {Array.from({ length: t.stars }).map((_, si) => (
                        <Star key={si} className="w-4 h-4 fill-[#D4A843] text-[#D4A843]" />
                      ))}
                    </div>
                    <p className="font-body text-sm leading-relaxed text-[#6B5B7B] flex-1 italic">
                      &ldquo;{t.review}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-[#E9DFF0]">
                      <div className="w-9 h-9 rounded-full bg-[#E9DFF0] flex items-center justify-center">
                        <span className="font-sans text-sm font-semibold text-[#6B2D8B]">{t.name[0]}</span>
                      </div>
                      <p className="font-body text-sm font-medium text-[#2D1B3D]">{t.name}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>

            <RevealWrapper className="text-center mt-10">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#6B2D8B] hover:text-[#9B59B6] transition-colors"
              >
                Read all testimonials <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealWrapper>
          </div>
        </section> */}





        {/* ── VERTICALS UNDER MYSTICA ──────────────────────────────── */}
        <VerticalsGrid />

        {/* ── HEALING IMAGE SLIDER ──────────────────────────────────── */}
        <ImageSlider
          images={[
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-8-jLvC125S7mC3ghM6bW2I9ofK7LpptV.webp',
              alt: 'One-on-one energy healing session',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-5-gsAyE76aq1t5qObogvH5R4WNeWpwJr.webp',
              alt: 'Group healing with empowerment',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-11-LAxuXCkYAVflIM6s8OAISXK3IZscIe.webp',
              alt: 'Individual energy healing work',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-7-M8O4GAWeJ8vDDx0D8yVBdge0pR1ySw.webp',
              alt: 'Reiki session with spiritual tools',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IIncredible-Souls-ncredible-Souls-22-4zOQgC9GgX60sL737y4KjQJbKcM29y.webp',
              alt: 'Outdoor group meditation circle',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-33-4qD4IZ5XNAsW1xF9jztGk5Xx4MzruP.webp',
              alt: 'Forest healing and tree grounding',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-2-scaled-t92NH3XHr7ZHhS5GCRBBiLXCCBFxTK.webp',
              alt: 'Community healing circle connection',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-3-Y8fezJlqnbCTWtWwjpSZyi75lAV0gI.webp',
              alt: 'Healing circle facilitation',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-6-T9HUXqtVO07QFvDPzAvOySfWI1MxNG.webp',
              alt: 'Energy work with spiritual candles',
            },
            {
              src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Incredible-Souls-4-qwz8XdHgLKRIrDPSEhin1SfLk8shUs.webp',
              alt: 'Group meditation and healing guidance',
            },
          ]}
        />

        {/* ── SHOP CAROUSEL ─────────────────────────────────────────── */}
        <section className="py-12 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-8">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Sacred Wellness Shop</span>
              </div>
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance mb-3">
                Energy Essentials - help you create aligned energies in daily life
              </h2>
              <p className="font-body text-base text-[#9B8BAB] max-w-lg mx-auto">Curated spiritual wellness products to support energy cleansing, protection, balance and inner transformation.Incredible Verticals
                Transformed Voices Heartfelt healing experiences, stories in awareness and inner alignment from our community.</p>
            </RevealWrapper>

            <ShopCarousel />
          </div>
        </section>






        {/* ── TESTIMONIALS CAROUSEL ────────────────────────────────── */}
        <section className="py-12 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-8">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Transformed Voices</span>
              </div>
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance">
                Heartfelt healing experiences, stories in awareness and  <span className="italic text-brand-gradient">inner alignment from our community.</span>
              </h2>
            </RevealWrapper>

            <TestimonialCarousel />
          </div>
        </section>

        {/* ── FAQ SECTION ──────────────────────────────────────────── */}
        <FAQSection initialCount={6} />

        {/* ── CTA BANNER ───────────────────────────────────────────── */}
        <section
          className="py-16 relative text-center"
          style={{
            background: 'linear-gradient(135deg, #6B2D8B 0%, #9B59B6 50%, #E87BB0 100%)',
          }}
        >
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="font-sans text-4xl lg:text-5xl font-light text-white mb-5 leading-snug">
              Start your healing journey today
            </h2>

            <p className="font-body text-base text-white/80 leading-relaxed mb-10">
              Come as you are, arrive in your truth, and rise — softly and powerfully — into your highest self.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white text-[#6B2D8B] font-body text-sm font-semibold rounded-full hover:bg-[#FFF9F0] transition-all duration-300"
              >
                Book a Session
              </Link>

              <Link
                href="/courses"
                className="px-8 py-3.5 border border-white/50 text-white font-body text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
