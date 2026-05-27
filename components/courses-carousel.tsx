'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileCarousel } from './mobile-carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { Star, Calendar, Clock, Globe } from 'lucide-react';

interface WorkshopItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  rating?: number;
  reviews?: number;
  date?: string;
  duration?: string;
  language?: string;
  price?: string;
  time?: string;
  tutor?: string;
}

interface CoursesCarouselProps {
  workshops: WorkshopItem[];
  title: string;
  subtitle?: string;
}

export function CoursesCarousel({ workshops, title, subtitle }: CoursesCarouselProps) {
  const isMobile = useIsMobile();

  const workshopCard = (workshop: WorkshopItem) => (
    <div className="h-full">
      <Link href={workshop.link}>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 h-80 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl">
          {/* Image Background */}
          <div className="relative h-48 overflow-hidden bg-accent/10">
            <Image
              src={workshop.image}
              alt={workshop.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-accent mb-2">{workshop.category}</p>
              <h3 className="text-lg font-bold text-foreground line-clamp-2 mb-2">
                {workshop.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {workshop.description}
            </p>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </div>
  );

  const workshopCardDesktop = (workshop: WorkshopItem) => (
    <Link href={workshop.link}>
      <div className="group bg-white rounded-2xl overflow-hidden border border-[#E9DFF0] hover:border-[#9B59B6]/30 hover:shadow-[0_20px_60px_rgba(107,45,139,0.15)] transition-all duration-300 flex flex-row max-w-2xl">
        {/* Image Section */}
        <div className="relative w-5/12 flex-shrink-0 overflow-hidden">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Status Badge - Top Left */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex px-3 py-1 bg-white text-[#2D1B3D] text-xs font-semibold rounded-lg shadow-md">
              Starts in 3 Days
            </span>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/0 to-black/5" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Header */}
          <div className="space-y-3">
            <h3 className="font-sans text-xl lg:text-2xl font-bold text-[#2D1B3D] group-hover:text-[#6B2D8B] transition-colors">
              {workshop.title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-[#6B5B7B] line-clamp-2">
              {workshop.description}
            </p>
          </div>

          {/* Metadata Pills - Time Only */}
          <div className="flex flex-wrap items-center gap-3 py-4">
            {workshop.date && (
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#E9DFF0] rounded-full font-body text-xs text-[#6B5B7B]">
                <Calendar className="w-3 h-3 text-[#9B59B6]" />
                {workshop.date}
              </span>
            )}
            {workshop.duration && (
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#E9DFF0] rounded-full font-body text-xs text-[#6B5B7B]">
                <Clock className="w-3 h-3 text-[#9B59B6]" />
                {workshop.duration}
              </span>
            )}
            {workshop.language && (
              <span className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#E9DFF0] rounded-full font-body text-xs text-[#6B5B7B]">
                <Globe className="w-3 h-3 text-[#9B59B6]" />
                {workshop.language}
              </span>
            )}
          </div>

          {/* Buttons Row */}
          <div className="flex items-center gap-3 pt-4">
            {/* Register Button */}
            <button className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-body text-sm font-semibold rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(13,148,136,0.3)] whitespace-nowrap">
              Register Now
            </button>

            {/* Course Fee Badge */}
            {workshop.price && (
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#9B59B6]/10 to-[#6B2D8B]/10 border border-[#9B59B6]/20 flex items-center gap-2">
                <p className="font-body text-xs text-[#9B8BAB]">Courses Fee</p>
                <p className="font-bold text-[#6B2D8B]">
                  {workshop.price}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        <MobileCarousel
          items={workshops.map((workshop) => workshopCard(workshop))}
        />
      </div>
    );
  }

  // Desktop layout - vertical list
  return (
    <div className="w-full">
      <div className="mb-12 text-center">
        <h2 className="font-sans text-4xl lg:text-5xl font-bold text-[#2D1B3D] mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-lg text-[#6B5B7B] max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      <div className="space-y-6">
        {workshops.map((workshop) => (
          <div key={workshop.id}>
            {workshopCardDesktop(workshop)}
          </div>
        ))}
      </div>
    </div>
  );
}
