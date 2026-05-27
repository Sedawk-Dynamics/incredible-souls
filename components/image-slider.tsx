'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(1)

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#2D1B3D] mb-3">
            Healing in Action
          </h2>
          <p className="font-body text-[#6B5B7B] text-lg">
            Witness the transformative moments of our spiritual healing community
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-[#1E5BA8] text-white hover:bg-[#0F3A72] transition-colors duration-300 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Images Container */}
          <div className="flex items-center justify-center gap-6 px-24 overflow-hidden">
            {/* Previous Image (Smaller) */}
            <div className="hidden md:flex flex-shrink-0 w-48 h-48 opacity-40 scale-90 transition-all duration-300">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={images[getImageIndex(-1)].src}
                  alt={images[getImageIndex(-1)].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Current Image (Large) */}
            <div className="flex-shrink-0 w-64 h-64 md:w-96 md:h-96 transition-all duration-300">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Next Image (Smaller) */}
            <div className="hidden md:flex flex-shrink-0 w-48 h-48 opacity-40 scale-90 transition-all duration-300">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={images[getImageIndex(1)].src}
                  alt={images[getImageIndex(1)].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-[#1E5BA8] text-white hover:bg-[#0F3A72] transition-colors duration-300 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-[#9B59B6] w-8'
                  : 'bg-[#E9DFF0] hover:bg-[#D7D0EA]'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
