'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselItem {
  id: string
  image: string
  title: string
}

interface PrinciplesImageCarouselProps {
  items: ImageCarouselItem[]
  autoPlayInterval?: number
}

export function PrinciplesImageCarousel({ items, autoPlayInterval = 4000 }: PrinciplesImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, items.length, autoPlayInterval])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  if (items.length === 0) return null

  const currentItem = items[currentIndex]

  return (
    <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group bg-[#F5F0F8]">
      {/* Full-Width Image */}
      <div className="relative w-full h-full">
        <Image
          src={currentItem.image}
          alt={currentItem.title}
          fill
          className="object-cover transition-transform duration-700"
          priority
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/50 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/50 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-[#9B59B6] w-3 h-3'
                : 'bg-white/60 w-2 h-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 right-6 text-white/80 font-body text-sm z-10">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  )
}
