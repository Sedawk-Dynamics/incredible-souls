'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileCarouselProps {
  items: React.ReactNode[];
  visibleOnDesktop?: boolean;
  onSlideChange?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function MobileCarousel({
  items,
  visibleOnDesktop = false,
  onSlideChange,
  autoPlay = false,
  autoPlayInterval = 5000,
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, autoPlayInterval, items.length]);

  // Reset auto-play on interaction
  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
    resetAutoPlay();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentPosition = e.touches[0].clientX;
    const diff = currentPosition - dragStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Swipe threshold
    const threshold = 50;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Swiped right - go to previous slide
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      } else {
        // Swiped left - go to next slide
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }

    setDragOffset(0);
    resetAutoPlay();
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
    resetAutoPlay();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const threshold = 50;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      } else {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }

    setDragOffset(0);
    resetAutoPlay();
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    resetAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  // Notify parent of slide change
  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const slideWidth = 100 / items.length;
  const translateX = -currentIndex * 100 + (dragOffset / (containerRef.current?.offsetWidth || 1)) * 100;

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Carousel Track */}
        <div className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${translateX}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
              style={{ width: `${100}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePrevious}
          className="rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-accent" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2 justify-center flex-1">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-accent w-3 h-3'
                  : 'bg-accent/30 w-2 h-2 hover:bg-accent/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="rounded-full p-2 hover:bg-accent/10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-accent" />
        </button>
      </div>
    </div>
  );
}
