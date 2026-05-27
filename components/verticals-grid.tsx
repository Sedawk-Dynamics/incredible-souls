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
    description:
      'Trika is offered as a sacred spiritual path rooted in the wisdom of a profound tradition that explores the union of consciousness (Shiva) and energy (Shakti).',
    image: '/images/vertical-trika.jpg',
    link: '/healing/trika',
  },
  {
    id: 'vastu',
    title: 'Vastu',
    description:
      'Vastu Shastra is the ancient Vedic science of architecture, energy flow, and spatial harmony.',
    image: '/images/vertical-vastu.jpg',
    link: '/healing/vastu',
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    description:
      'Sound Healing is one of the oldest forms of healing — a sacred vibrational medicine that helps restore harmony to the body, mind, emotions, and energy field.',
    image: '/images/vertical-sound-healing.jpg',
    link: '/healing/sound-healing',
  },
  {
    id: 'numerology',
    title: 'Numerology',
    description:
      'Divine numbers revealing your soul path and life purpose.',
    image: '/images/vertical-numerology.jpg',
    link: '#',
  },
]

export default function VerticalsGrid() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleExpand = (
    id: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault()
    e.stopPropagation()

    setExpandedCard(
      expandedCard === id ? null : id
    )
  }

  return (
    <section className="py-12 bg-gradient-to-b from-[#FFF9F0] to-[#F5F0F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="ornament-divider justify-center mb-4">
            <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">
              Incredible Souls Verticals
            </span>
          </div>

          <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance mb-3">
            Explore our sacred offerings designed to elevate your spiritual journey
          </h2>
        </div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {verticals.map((vertical) => {
            const isExpanded =
              expandedCard === vertical.id

            return (
              <Link
                key={vertical.id}
                href={vertical.link}
                className="group block h-full"
                onClick={(e) => {
                  if (
                    expandedCard === vertical.id
                  ) {
                    e.preventDefault()
                  }
                }}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${
                    isExpanded
                      ? 'h-auto min-h-[430px]'
                      : 'h-[430px]'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <Image
                      src={vertical.image}
                      alt={vertical.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B3D]/40 via-transparent to-transparent" />

                    {/* Hover Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    
                    {/* Title + Description */}
                    <div>
                      <h3 className="font-sans text-2xl font-semibold text-[#2D1B3D] mb-3">
                        {vertical.title}
                      </h3>

                      <p
                        className={`font-body text-sm text-[#6B6B7B] leading-relaxed transition-all duration-300 ${
                          isExpanded
                            ? ''
                            : 'line-clamp-3'
                        }`}
                      >
                        {vertical.description}
                      </p>
                    </div>

                    {/* Read More Button - Always Visible */}
                    <button
                      onClick={(e) =>
                        toggleExpand(
                          vertical.id,
                          e
                        )
                      }
                      className="mt-5 text-sm font-semibold text-[#9B59B6] hover:text-[#6B2D8B] transition-colors flex items-center gap-1 self-start"
                    >
                      {isExpanded ? (
                        <>
                          Read Less
                          <ChevronDown className="w-4 h-4 rotate-180" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
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
            <Link
              href="#verticals"
              className="flex items-center gap-2"
            >
              View All Verticals
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}