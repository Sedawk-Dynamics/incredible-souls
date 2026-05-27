'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const verticals = [
  {
    id: 'trika',
    title: 'Trika',
    description: 'Ancient Kashmir Shaivism wisdom for spiritual awakening and inner transformation',
    image: '/images/vertical-trika.jpg',
    link: '/healing/trika',
  },
  {
    id: 'vastu',
    title: 'Vastu',
    description: 'Sacred space harmony to align your environment with universal energies',
    image: '/images/vertical-vastu.jpg',
    link: '/healing/vastu',
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    description: 'Vibrational frequencies to restore balance and activate healing within',
    image: '/images/vertical-sound-healing.jpg',
    link: '/healing/sound-healing',
  },
  {
    id: 'numerology',
    title: 'Numerology',
    description: 'Divine numbers revealing your soul path and life purpose',
    image: '/images/vertical-numerology.jpg',
    link: '#',
  },
]

export default function VerticalsGrid() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedCard(expandedCard === id ? null : id)
  }
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF9F0] to-[#F5F0F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="ornament-divider justify-center mb-4">
            <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">
              Incredible Souls Verticals
            </span>
          </div>
          <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance mb-3">
            Explore our sacred offerings designed to elevate your spiritual journey
          </h2>
          {/* <p className="font-body text-base text-[#9B8BAB] max-w-2xl mx-auto">
            
          </p> */}
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {verticals.map((vertical) => {
            const isExpanded = expandedCard === vertical.id

            return (
              <Link
                key={vertical.id}
                href={vertical.link}
                className="group block h-full"
                onClick={(e) => {
                  if (expandedCard === vertical.id) {
                    e.preventDefault()
                  }
                }}
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${isExpanded ? 'h-auto' : 'h-80'
                  }`}>
                  {/* Image */}
                  <div className={`relative ${isExpanded ? 'h-56' : 'h-80'} w-full transition-all duration-300`}>
                    <Image
                      src={vertical.image}
                      alt={vertical.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B3D]/80 via-[#2D1B3D]/30 to-transparent" />

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col p-6 bg-white">
                    <h3 className="font-sans text-2xl font-semibold text-[#2D1B3D] mb-2">
                      {vertical.title}
                    </h3>

                    {/* Description with conditional expansion */}
                    <p
                      className={`font-body text-sm text-[#6B6B7B] leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'
                        }`}
                    >
                      {vertical.description}
                    </p>

                    {/* Read More Button */}
                    {vertical.description.length > 80 && (
                      <button
                        onClick={(e) => toggleExpand(vertical.id, e)}
                        className="mt-4 text-sm font-semibold text-[#9B59B6] hover:text-[#6B2D8B] transition-colors flex items-center gap-1 self-start"
                      >
                        {isExpanded ? (
                          <>
                            Read Less <ChevronDown className="w-4 h-4 rotate-180" />
                          </>
                        ) : (
                          <>
                            Read More <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-[#6B2D8B] to-[#9B59B6] hover:from-[#5A2475] hover:to-[#8A4AA5] text-white px-8 py-6 text-base rounded-full transition-all duration-300 hover:shadow-lg"
          >
            <Link href="#verticals" className="flex items-center gap-2">
              View All Verticals
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
