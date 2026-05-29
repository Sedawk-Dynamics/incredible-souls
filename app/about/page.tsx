'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { PrinciplesCarousel } from '@/components/principles-carousel'
import { PrinciplesImageCarousel } from '@/components/principles-image-carousel'
import { ArrowRight, CheckCircle2, Sparkles, Leaf, Sun, Users } from 'lucide-react'
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

const whyUs = [
  { title: 'Personalized Healing Journeys', desc: 'Every session is intuitively tailored to your unique soul path and healing needs.', icon: Sparkles },
  { title: 'Root-Level Transformation', desc: 'We address the karmic and energetic root of imbalances for lasting, deep shifts.', icon: Leaf },
  { title: 'Ancient & Modern Modalities', desc: 'A sacred blend of time-tested wisdom and contemporary healing techniques.', icon: Sun },
  { title: 'Conscious Community', desc: 'Held within a nurturing community that walks beside you every step of the way.', icon: Users },
]

const coreValues = [
  'Holistic Well-being',
  'Compassion & Service',
  'Conscious Living',
  'Sustainability & Environmental Harmony',
  'Nourishment & Food Security',
  'Livelihood & Empowerment',
  'Education & Inner Wisdom',
  'Community & Connection',
  'Abundance & Prosperity Mindset',
  'Spiritual Awakening & Inner Light',
  'Integrity & Authenticity',
]

const teamMembers = [
  {
    name: 'Reshu Gupta',
    designation: 'Founder & Director',
    role: 'Spiritual Coach · Soul Alchemist',
    bio: 'Reshu Gupta’s journey is rooted in inner awakening, spiritual exploration, and a deep calling towards healing and soul transformation. Through meditation, sacred experiences, and intuitive understanding, she has developed a compassionate and grounded approach that gently supports individuals in reconnecting with their inner peace, clarity, and true essence.At Incredible Souls, Reshu Gupta creates a nurturing space for self-discovery, emotional healing, and spiritual growth, reminding others that the journey of healing is ultimately a return to the wisdom, light, and strength already present within the soul.',
    image: '/Reshu-nre.jpeg',
    phone: '+91 7709008011',
    email: 'byincrediblesouls@gmail.com',
  },

  {
    name: 'Jai Bhagwan Jangra',
    designation: 'Director & Spiritual Seeker',
    role: 'Community Outreach & Social Wellness Coach',
    bio: 'Mr. Jai Bhagwan Jangra, Co-Founder of Incredible Souls, brings a life rooted in devotion, discipline, humility, and deep faith. His spiritual path reflects simplicity, service, and the belief that true wisdom is lived through everyday actions, relationships and compassion.At Incredible Souls, he leads community outreach and social wellness initiatives with a vision to build conscious, supportive and compassionate communities.His journey reminds us that spiritual strength lies in faith, service and surrender to the divine path.',
    image: '/jb.jpeg',
    phone: '+91 9540295402',
    email: 'byincrediblesouls@gmail.com',
  },

  {
    name: 'VidhyA',
    designation: 'Spiritual Mentor',
    role: 'Healer | Spiritual Mentor',
    bio: 'VidhyA is a deeply compassionate spiritual mentor whose journey is rooted in faith, inner strength, and a profound calling to understand life beyond the visible. From an early age, she has walked the path of self-discovery, devotion, and inner transformation, allowing life’s experiences to deepen her connection with soul wisdom.At Incredible Souls, Vidhya carries a powerful and transformational presence. She reminds us that true growth often unfolds quietly — through faith, acceptance, inner conviction and the grace to keep moving towards one’s own light.',
    image: '/vl.jpeg',
    phone: '+91 9699638011',
    email: 'byincrediblesouls@gmail.com',
  },
]


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="pt-36 pb-24 relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 50%, #E9DFF0 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <RevealWrapper>
              <div className="ornament-divider justify-center mb-6">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Our Approach</span>
              </div>
              {/* <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-6 text-balance leading-tight">
                Our sacred{' '}
                <span className="italic text-brand-gradient">purpose</span>
              </h1> */}
              <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] max-w-xl mx-auto">
                Our approach begins with understanding what is truly affecting your inner world. Many challenges in life — whether related to emotions, relationships, health, abundance, or spiritual growth — often arise from deeper patterns, old energies, and unresolved experiences that remain hidden beneath the surface.
              </p>
            </RevealWrapper>
          </div>
        </section>
{/* ── ABOUT DETAIL ─────────────────────────────────────── */}
<section className="py-20 bg-[#FFF9F0]">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
    
    {/* Left Image */}
    <RevealWrapper
      dir="left"
      className="sticky top-28 flex justify-center lg:justify-start"
    >
      <div className="relative w-[300px] md:w-[360px] h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(107,45,139,0.12)]">
        <Image
          src="/reshu.JPG"
          alt="Incredible Souls healing sanctuary"
          fill
          className="object-cover"
        />

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B3D]/20 to-transparent" />
      </div>
    </RevealWrapper>

    {/* Right Content */}
    <RevealWrapper dir="right" className="flex flex-col gap-10">
      
      {/* Introduction */}
      <div>
        <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D] mb-5">
          At Incredible Souls,
        </h2>

        <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B] mb-5">
          we gently bring these layers into awareness with compassion and clarity.
          As you begin to see the root of what you are carrying, the process of
          release naturally begins. This creates space for emotional lightness,
          energetic balance, and a deeper connection with your own inner wisdom.
        </p>

        <p className="font-body text-base lg:text-lg leading-relaxed text-[#6B5B7B]">
          The journey then moves toward realignment across the aura, body, mind,
          emotions, and soul. You are supported in moving from confusion to clarity,
          heaviness to peace, and limitation to self-trust.
          <br />
          <br />
          At the heart of our work is empowerment. We guide you to release what
          no longer serves you, restore inner balance, and move forward with
          greater awareness, purpose, and trust in your own light — creating
          harmony within yourself, with others, and with the world around you.
        </p>
      </div>

      {/* Mission */}
      {/*
      <div className="p-6 rounded-2xl bg-[#E9DFF0]/40 border border-[#E9DFF0]">
        <h3 className="font-sans text-xl font-medium text-[#2D1B3D] mb-3">
          Our Mission
        </h3>
        <p className="font-body text-sm leading-relaxed text-[#6B5B7B]">
          To nurture holistic transformation by supporting communities across the
          essential pillars of life — food, employment, education, health and
          environment. We strive to create conscious, self-sustaining ecosystems
          where well-being, livelihood and inner growth coexist in harmony.
        </p>
      </div>
      */}

      {/* Vision */}
      {/*
      <div className="p-6 rounded-2xl bg-[#FFF9F0] border border-[#E9DFF0]">
        <h3 className="font-sans text-xl font-medium text-[#2D1B3D] mb-3">
          Our Vision
        </h3>
        <p className="font-body text-sm leading-relaxed text-[#6B5B7B]">
          A world where every soul lives in alignment with its highest truth —
          free from fear, separation and karmic entanglements. We envision healing
          as a sacred return to wholeness, where individuals rise in love,
          embody their truth and radiate peace into their families, communities
          and the world.
        </p>
      </div>
      */}

      {/* Why Choose */}
      {/*
      <div>
        <h3 className="font-sans text-xl font-medium text-[#2D1B3D] mb-4">
          Why Choose Incredible Souls?
        </h3>

        <p className="font-body text-sm leading-relaxed text-[#6B5B7B] mb-4">
          At Incredible Souls, we believe that every soul is incredible — a
          unique light of divine purpose and inner wisdom, waiting to awaken.
        </p>

        <p className="font-body text-sm leading-relaxed text-[#6B5B7B]">
          Growth Sequence — The Journey of Transformation at Incredible Souls.
          At Incredible Souls, growth is seen as a gentle unfolding of the self.
          Every seeker begins from a different place, yet the journey often
          moves through a beautiful sequence of awareness, healing, alignment
          and expansion. Our role is to support this inner movement with
          compassion and spiritual guidance.
        </p>
      </div>
      */}
    </RevealWrapper>
  </div>
</section>



        {/* ── GROWTH SEQUENCE ──────────────────────────────────────────── */}
        <section className="py-24 bg-[#FFF9F0] overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-16">


              {/* Why Choose Content */}
              <div className="max-w-3xl mx-auto mb-8">
                <h3 className="font-sans text-2xl md:text-3xl text-[#6B2D8B] mb-3">
                  Why Choose Incredible Souls?
                </h3>

                <p className="font-body text-base md:text-lg leading-relaxed text-[#6B5B7B]">
                  At Incredible Souls, we believe that every soul is incredible — a
                  unique light of divine purpose and inner wisdom, waiting to awaken.
                </p>
              </div>

              <div className="flex justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase font-semibold">
                  Growth Sequence
                </span>
              </div>

              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] leading-tight mb-5 text-balance">
                The Journey of Transformation at Incredible Souls
              </h2>

              {/* Intro Text */}
              <p className="font-body text-base md:text-lg leading-relaxed text-[#6B5B7B] max-w-4xl mx-auto">
                At Incredible Souls, growth is seen as a gentle unfolding of the
                self. Every seeker begins from a different place, yet the journey
                often moves through a beautiful sequence of awareness, healing,
                alignment and expansion. Our role is to support this inner movement
                with compassion and spiritual guidance.
              </p>
            </div>

            {/* Journey Steps */}
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Awareness",
                  desc: "The journey begins with becoming aware of your inner world. You start noticing your emotions, thoughts, patterns, fears, beliefs and repeated life situations. This awareness creates the first doorway to healing, because what is seen with honesty can begin to shift with grace.",
                },
                {
                  number: "02",
                  title: "Acceptance",
                  desc: "As awareness deepens, acceptance begins. Instead of judging your past, your emotions or your journey, you learn to hold yourself with kindness. This stage allows the heart to soften and creates a safe inner space where real healing can take place.",
                },
                {
                  number: "03",
                  title: "Healing",
                  desc: "Healing begins when old pain, suppressed emotions, limiting beliefs and energetic blocks are gently released. Through meditation, energy work, regression, chakra healing and guided spiritual practices, you begin to clear what no longer supports your growth.",
                },
                {
                  number: "04",
                  title: "Alignment",
                  desc: "Once healing begins, your inner energy starts returning to balance. You feel more connected to your truth, your intuition and your purpose. Your choices become more conscious, your relationships become clearer and your life begins to reflect greater harmony.",
                },
                {
                  number: "05",
                  title: "Expansion",
                  desc: "With alignment comes expansion. You begin to move beyond fear, scarcity and old limitations. A deeper sense of abundance, confidence, inner strength and spiritual connection begins to emerge. Life feels more meaningful, guided and open.",
                },
                {
                  number: "06",
                  title: "Integration",
                  desc: "True transformation is not limited to a session or workshop; it becomes part of daily life. You begin to integrate awareness, peace, compassion and conscious living into your thoughts, actions, relationships and decisions.",
                },
                {
                  number: "07",
                  title: "Service & Higher Purpose",
                  desc: "As you grow within, your healing naturally begins to touch others. You become more available to contribute, support, inspire and serve. This is where personal transformation becomes collective upliftment, and the soul begins to live with greater purpose.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group rounded-[32px] border border-[#E6D9EF] bg-white/70 backdrop-blur-sm p-8 md:p-10 shadow-[0_10px_40px_rgba(107,45,139,0.06)] hover:shadow-[0_20px_50px_rgba(107,45,139,0.1)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#F2EAF7] border border-[#DEC8EE] flex items-center justify-center shadow-sm">
                        <span className="font-sans text-lg font-semibold text-[#8B5FBF]">
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-sans text-2xl font-medium text-[#2D1B3D] mb-3">
                        {item.title}
                      </h3>

                      <p className="font-body text-base leading-relaxed text-[#6B5B7B]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Text */}
            {/* <div className="mt-16 text-center max-w-4xl mx-auto">
              <p className="font-body text-lg italic leading-relaxed text-[#6B5B7B]">
                This is the sacred growth sequence we honour at{" "}
                <span className="text-[#6B2D8B] font-medium">
                  Incredible Souls
                </span>{" "}
                — a journey from inner understanding to awakened living, from
                personal healing to soulful contribution to the Master Plan.
              </p>
            </div> */}
          </div>
        </section>


        {/* ── OUR PRINCIPLES ──────────────────────────────────────────── */}



        {/* ── TEAM ─────────────────────────────────────────────── */}
        <section className="py-24 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealWrapper className="text-center mb-16">
              <div className="ornament-divider justify-center mb-4">
                <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">
                  The Guiding Light
                </span>
              </div>

              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D]">
                Meet our{" "}
                <span className="italic text-brand-gradient">
                  leadership
                </span>
              </h2>

              <p className="font-body text-base text-[#9B8BAB] mt-4 max-w-md mx-auto leading-relaxed">
                Dedicated souls committed to guiding your journey with wisdom,
                compassion and grace.
              </p>
            </RevealWrapper>

            {/* Equal Height Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {teamMembers.map((member, i) => (
                <RevealWrapper key={member.name} dir="up">
                  <div
                    className="premium-card bg-white rounded-3xl overflow-hidden border border-[#E9DFF0] flex flex-col h-full"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {/* Image Section */}
                    <div className="relative aspect-[4/4] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B3D]/50 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="font-sans text-xl font-semibold text-white leading-tight">
                          {member.name}
                        </p>

                        <p className="font-body text-xs text-[#E9DFF0] mt-0.5">
                          {member.designation}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 h-full">
                      {/* Role */}
                      <p className="font-body text-xs font-medium text-[#9B59B6] uppercase tracking-widest mb-4">
                        {member.role}
                      </p>

                      {/* Bio */}
                      <p className="font-body text-sm leading-relaxed text-[#6B5B7B] flex-1">
                        {member.bio}
                      </p>

                      {/* Contact Info */}
                      <div className="pt-4 border-t border-[#E9DFF0] flex flex-col gap-2 mt-6">
                        <a
                          href={`tel:${member.phone.replace(/\s/g, "")}`}
                          className="font-body text-xs text-[#9B8BAB] hover:text-[#6B2D8B] transition-colors"
                        >
                          {member.phone}
                        </a>

                        <a
                          href={`mailto:${member.email}`}
                          className="font-body text-xs text-[#9B8BAB] hover:text-[#6B2D8B] transition-colors break-all"
                        >
                          {member.email}
                        </a>
                      </div>

                      {/* Read More Button - Fixed Bottom */}
                      {member.name === "Reshu Gupta" && (
                        <div className="pt-4 mt-auto">
                          <Link
                            href="/reshu-gupta"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#9B59B6]/10 text-[#9B59B6] font-body text-sm font-medium rounded-lg hover:bg-[#9B59B6] hover:text-white transition-all duration-300"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="py-20 text-center"
          style={{ background: 'linear-gradient(135deg, #E9DFF0 0%, #FFF9F0 100%)' }}
        >
          <div className="max-w-lg mx-auto px-6">
            <RevealWrapper>
              <h2 className="font-sans text-3xl lg:text-4xl font-light text-[#2D1B3D] mb-5">
                Ready to begin your{' '}
                <span className="italic text-brand-gradient">healing journey?</span>
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6B2D8B] text-[#FFF9F0] font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(107,45,139,0.4)]"
              >
                Book a Session
                <ArrowRight className="w-4 h-4" />
              </Link>
            </RevealWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
