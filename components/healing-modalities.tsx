'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MobileCarousel } from './mobile-carousel'
import { useIsMobile } from '@/hooks/use-mobile'

interface HealingModality {
  id: string
  title: string
  description: string
  image: string
}

const healingModalities: HealingModality[] = [
  {
    id: 'distance-healing',
    title: 'Distance Healing',
    description: 'Remote energy healing for emotional, physical and spiritual balance across space and time.',
    image: '/images/distance-healing-hero.jpg',
  },
  {
    id: 'aura-clearance',
    title: 'Aura Clearance & Chakra Alignment',
    description: 'Cleanse and realign your energy field to restore harmony in body, mind and spirit.',
    image: '/images/healing-aura.jpg',
  },
  {
    id: 'akashic-records',
    title: 'Akashic Records',
    description: 'Access your soul\'s journey, karmic patterns and higher wisdom through sacred records.',
    image: '/images/healing-akashic.jpg',
  },
  {
    id: 'past-life',
    title: 'Past Life Regression',
    description: 'Heal deep past life imbalances, trauma and patterns that shape your present reality.',
    image: '/images/healing-pastlife.jpg',
  },
  {
    id: 'trika',
    title: 'Trika — Tantra, Mantra & Yantra',
    description: 'Ancient tantric sciences of vibration, sacred geometry and divine invocation.',
    image: '/images/healing-trika.jpg',
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    description: 'Restore inner harmony through the powerful vibrational frequencies of sacred sound.',
    image: '/images/healing-sound.jpg',
  }
]

export default function HealingModalities() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const modalityCard = (modality: HealingModality) => (
    <div className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 mb-4">
        <Image
          src={modality.image}
          alt={modality.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6B2D8B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-sans text-xl font-light text-[#2D1B3D] mb-3 group-hover:text-[#6B2D8B] transition-colors duration-300">
            {modality.title}
          </h3>
          <p className="font-body text-sm text-[#6B5B7B] mb-4 leading-relaxed line-clamp-3">
            {modality.description}
          </p>
        </div>
        <Link
          href={`/healing/${modality.id}`}
          className="inline-flex items-center gap-2 text-[#9B59B6] font-body text-sm font-medium group/link hover:text-[#6B2D8B] transition-colors duration-300 w-fit"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <div ref={containerRef} className="space-y-8">
        <MobileCarousel
          items={healingModalities.map((modality) => (
            <div key={modality.id} className="group animate-fadeInUp p-2">
              {modalityCard(modality)}
            </div>
          ))}
        />

        {/* View All Button */}
        <div className="flex justify-center pt-6">
          <Link
            href="/healing"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#9B59B6]/40 text-[#6B2D8B] font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] hover:text-white hover:border-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(107,45,139,0.25)]"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    )
  }

  // Desktop layout - alternating grid
  return (
    <div ref={containerRef} className="space-y-8 lg:space-y-12">
      {healingModalities.map((modality, index) => {
        const isEven = index % 2 === 0
        
        return (
          <div
            key={modality.id}
            className="group animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center ${
                !isEven ? 'md:grid-cols-2' : ''
              }`}
            >
              {/* Image Section */}
              <div
                className={`relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 ${
                  !isEven ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={modality.image}
                  alt={modality.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B2D8B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div
                className={`flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}
              >
                {/* Title */}
                <h3 className="font-sans text-2xl lg:text-3xl font-light text-[#2D1B3D] mb-4 group-hover:text-[#6B2D8B] transition-colors duration-300">
                  {modality.title}
                </h3>

                {/* Description */}
                <p className="font-body text-base lg:text-lg text-[#6B5B7B] mb-6 leading-relaxed">
                  {modality.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/healing/${modality.id}`}
                  className="inline-flex items-center gap-2 text-[#9B59B6] font-body text-base font-medium group/link hover:text-[#6B2D8B] transition-colors duration-300 w-fit"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        )
      })}

      {/* View All Button */}
      <div className="flex justify-center pt-8 border-t border-[#E9DFF0]">
        <Link
          href="/healing"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#9B59B6]/40 text-[#6B2D8B] font-body text-base font-medium rounded-full hover:bg-[#9B59B6] hover:text-white hover:border-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(107,45,139,0.25)]"
        >
          View All Healing Services
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}
