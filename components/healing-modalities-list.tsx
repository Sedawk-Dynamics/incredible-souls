'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileCarousel } from './mobile-carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';

interface HealingModality {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface HealingModalitiesListProps {
  modalities: HealingModality[];
  title: string;
  subtitle?: string;
  sectionLabel?: string;
}

export function HealingModalitiesList({ modalities, title, subtitle, sectionLabel }: HealingModalitiesListProps) {
  const isMobile = useIsMobile();

  const modalityCard = (modality: HealingModality) => (
    <div className="h-full">
      <Link href={`/healing/${modality.id}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 h-80 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl">
          {/* Image Background */}
          <div className="relative h-48 overflow-hidden bg-accent/10">
            <Image
              src={modality.image}
              alt={modality.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground line-clamp-2 mb-2">
                {modality.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {modality.description}
            </p>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </div>
  );

  const modalityCardDesktop = (modality: HealingModality) => (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#E9DFF0] hover:border-[#9B59B6]/30 hover:shadow-[0_20px_60px_rgba(107,45,139,0.12)] transition-all duration-300 flex flex-row gap-8 p-8">
      {/* Image - Prominent */}
      <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl shadow-md group-hover:shadow-lg transition-shadow">
        <Image
          src={modality.image}
          alt={modality.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between gap-4">
        {/* Title and Description */}
        <div className="space-y-3">
          <h3 className="font-sans text-2xl font-bold text-[#2D1B3D] group-hover:text-[#6B2D8B] transition-colors leading-tight">
            {modality.title}
          </h3>

          {/* Description */}
          <p className="font-body text-base text-[#6B5B7B] leading-relaxed">
            {modality.description}
          </p>
        </div>

        {/* CTA Buttons - Horizontal Layout */}
        <div className="flex items-center gap-4 pt-2">
          {/* Join The Course - Outline Button */}
          {/* <button className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#9B59B6] text-[#6B2D8B] font-body font-semibold text-sm rounded-full hover:bg-[#9B59B6]/5 transition-all duration-300">
            View All Courses
          </button> */}

          {/* Register Now - Primary Button */}
          <button className="inline-flex items-center justify-center gap-2 px-7 py-2.5 bg-[#9B59B6] text-white font-body font-semibold text-sm rounded-full hover:bg-[#6B2D8B] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(155,89,182,0.35)]">
            Register Now
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Learn More Link */}
          {/* <Link
            href={`/healing/${modality.id}`}
            className="ml-auto inline-flex items-center gap-2 text-[#9B59B6] font-body font-semibold text-sm hover:text-[#6B2D8B] transition-colors group/link"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link> */}
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="w-full space-y-8">
        <div>
          {sectionLabel && (
            <div className="mb-3">
              <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase font-semibold">{sectionLabel}</span>
            </div>
          )}
          <h2 className="font-serif text-3xl font-bold text-[#2D1B3D] mb-3">{title}</h2>
          {subtitle && <p className="font-body text-base text-[#6B5B7B] leading-relaxed">{subtitle}</p>}
        </div>
        <MobileCarousel
          items={modalities.map((modality) => modalityCard(modality))}
        />
      </div>
    );
  }

  // Desktop layout - vertical list
  return (
    <div className="w-full">
      <div className="mb-12">
        {sectionLabel && (
          <div className="mb-4">
            <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase font-semibold">{sectionLabel}</span>
          </div>
        )}
        <h2 className="font-serif text-5xl font-bold text-[#2D1B3D] mb-4">{title}</h2>
        {subtitle && <p className="font-body text-lg text-[#6B5B7B] max-w-3xl leading-relaxed">{subtitle}</p>}
      </div>
      <div className="space-y-5">
        {modalities.map((modality) => (
          <div key={modality.id}>
            {modalityCardDesktop(modality)}
          </div>
        ))}
      </div>
      {/* View All Courses Button - Moved to bottom */}
      <div className="flex justify-center mt-12 pt-8 border-t border-[#E9DFF0]">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#9B59B6]/40 text-[#6B2D8B] font-body text-base font-medium rounded-full hover:bg-[#9B59B6] hover:text-white hover:border-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(107,45,139,0.25)]"
        >
          View All Courses
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
