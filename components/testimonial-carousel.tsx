'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonialData = [
  {
    name: 'Neha',
    profession: 'Business Owner',
    location: 'London',
    initials: 'N',
    color: '#9B59B6',
    text: "I've worked with Reshu Ma'am through three healing courses – Psychic Surgery, Karuna Healing and Past Life Therapy – and each has brought significant shifts in my energies and clarity. What I love most is her pure intention to help people heal. She's incredibly supportive, accessible, and genuinely cares about inner transformation.",
    stars: 5,
  },
  {
    name: 'Spurti',
    profession: 'Home Maker',
    location: 'Pune',
    initials: 'S',
    color: '#E87BB0',
    text: "I had a past life regression with Reshu mam, and it was amazing. I felt calm and safe the whole time. She explained everything clearly and guided me gently. The experience was really interesting and helped me understand a few things about myself.",
    stars: 5,
  },
  {
    name: 'Ranju',
    profession: 'Home Maker',
    location: 'Faridabad',
    initials: 'R',
    color: '#6B2D8B',
    text: "I learnt Lama Fera from Reshu Madam at Incredible Souls. She explains everything in great detail, guiding us step by step and ensuring we understand thoroughly. It's always comfortable learning any healing modality from her as her knowledge is deep and well-studied.",
    stars: 5,
  },
  {
    name: 'Asmita',
    profession: 'Civil Engineer',
    location: 'Pune',
    initials: 'A',
    color: '#C0739A',
    text: "I'm very thankful to Reshu, who came as a savior during my toughest times. Healing with her has brought me immense relief. Each session helped me release burdens and regain the hope I had lost in relationships.",
    stars: 5,
  },
  {
    name: 'Shivkumar',
    profession: 'Developer',
    location: 'Latur',
    initials: 'S',
    color: '#7B4FA6',
    text: "A one-to-one Past Life Regression session with Reshu was truly transformative. It helped me understand relationships from a divine love perspective and develop a deep sense of gratitude. This shift has positively impacted my work and daily life.",
    stars: 5,
  },
  {
    name: 'Sunil Patil',
    profession: 'Retired Civil Engineer',
    location: 'Pune',
    initials: 'SP',
    color: '#9B59B6',
    text: "I am a retired civil engineer and had nothing to look forward to until I met Reshu and discovered healing. I've learnt three modalities from her, Karuna Reiki and Psychic Surgery have been especially effective in my life. Regular practice has brought clarity and purpose.",
    stars: 5,
  },
  {
    name: 'Harish',
    profession: 'Entrepreneur',
    location: 'Delhi',
    initials: 'H',
    color: '#6B2D8B',
    text: "For my spiritual growth, I've been taking one to one morning healing sessions with Reshu. The days that follow are filled with faith and calm smiles. Earlier, I was always anxious and overthinking about the future, but now I feel much lighter and more at peace.",
    stars: 5,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const timeoutRef = useRef<NodeJS.Timeout>()

  const next = () => {
    setDirection('next')
    setCurrent((prev) => (prev + 1) % testimonialData.length)
  }

  const prev = () => {
    setDirection('prev')
    setCurrent((prev) => (prev - 1 + testimonialData.length) % testimonialData.length)
  }

  const goTo = (idx: number) => {
    setDirection(idx > current ? 'next' : 'prev')
    setCurrent(idx)
  }

  useEffect(() => {
    if (!isAutoPlay) return
    timeoutRef.current = setTimeout(next, 6000)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [current, isAutoPlay])

  const t = testimonialData[current]

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Main card */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E9DFF0] shadow-[0_20px_60px_rgba(107,45,139,0.08)]">
        {/* Decorative background accent */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 transition-all duration-700"
          style={{ background: t.color }}
        />
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-5 bg-[#E87BB0]" />

        <div className="relative z-10 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Quote content */}
            <div className="flex flex-col gap-6">
              {/* Quote icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${t.color}18` }}
              >
                <Quote className="w-6 h-6" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="text-[#F59E0B] text-xl">★</span>
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="font-body text-lg lg:text-xl leading-relaxed text-[#3D2850] italic font-light">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E9DFF0]">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-sans font-bold text-lg shadow-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #E87BB0)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-sans text-lg font-semibold text-[#2D1B3D]">{t.name}</p>
                  <p className="font-body text-sm text-[#9B8BAB]">
                    {t.profession} &middot; {t.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Index display */}
            <div className="hidden lg:flex flex-col items-end gap-3 pt-2">
              <span className="font-sans text-6xl font-light text-[#E9DFF0]">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="font-body text-sm text-[#9B8BAB]">/ {String(testimonialData.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-8">
        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white border border-[#E9DFF0] text-[#6B2D8B] hover:bg-[#6B2D8B] hover:text-white hover:border-[#6B2D8B] transition-all duration-300 flex items-center justify-center shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#6B2D8B] border border-[#6B2D8B] text-white hover:bg-[#9B59B6] hover:border-[#9B59B6] transition-all duration-300 flex items-center justify-center shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === current
                  ? 'bg-[#6B2D8B] w-8'
                  : 'bg-[#E9DFF0] w-2 hover:bg-[#9B59B6]'
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
