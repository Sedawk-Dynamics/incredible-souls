'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface PrincipleItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

interface PrinciplesCarouselProps {
  items: PrincipleItem[];
  title: string;
  subtitle?: string;
  sectionLabel?: string;
  autoPlayInterval?: number;
}

export function PrinciplesCarousel({
  items,
  title,
  subtitle,
  sectionLabel,
  autoPlayInterval = 5000,
}: PrinciplesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlay, items.length, autoPlayInterval]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-12 text-center">
        {sectionLabel && (
          <div className="mb-4">
            <span className="font-body text-xs tracking-[0.3em] text-[#9B59B6] uppercase font-semibold">
              {sectionLabel}
            </span>
          </div>
        )}
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#2D1B3D] mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-lg text-[#6B5B7B] max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Carousel Container */}
      <div className="relative w-full mx-auto">
        {/* Main Carousel Image */}
        <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group bg-[#F5F0F8]">
          {/* Image with fade transition */}
          <div className="absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="text-base lg:text-lg text-white/90 mb-6 leading-relaxed max-w-2xl">
                {currentItem.description}
              </p>
            )}
            {currentItem.link && (
              <Link
                href={currentItem.link}
                className="inline-flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors w-fit font-semibold group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Navigation Arrows - Visible on hover */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-[#9B59B6] w-8 h-2.5'
                  : 'bg-[#D1C4DC] hover:bg-[#9B8BAB] w-2.5 h-2.5'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Strip - Desktop Only */}
        <div className="hidden lg:flex gap-4 mt-8 overflow-x-auto pb-4">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setIsAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 ring-offset-4 ${
                index === currentIndex
                  ? 'ring-2 ring-[#9B59B6] opacity-100'
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="text-center mt-8">
        <p className="font-body text-sm text-[#9B8BAB]">
          <span className="font-semibold text-[#6B2D8B]">{currentIndex + 1}</span> / {items.length}
        </p>
      </div>
    </div>
  );
}
