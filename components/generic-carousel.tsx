'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MobileCarousel } from './mobile-carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';

interface CarouselItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
}

interface GenericCarouselProps {
  items: CarouselItem[];
  title: string;
  subtitle?: string;
  sectionLabel?: string;
}

export function GenericCarousel({ items, title, subtitle, sectionLabel }: GenericCarouselProps) {
  const isMobile = useIsMobile();

  const carouselCard = (item: CarouselItem) => (
    <div className="h-full">
      {item.link ? (
        <Link href={item.link}>
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 h-80 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl">
            <div className="relative h-full overflow-hidden bg-accent/10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-[#E9DFF0] transition-colors mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-white/80 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </Link>
      ) : (
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 h-80 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl">
          <div className="relative h-full overflow-hidden bg-accent/10">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-xl font-semibold text-white group-hover:text-[#E9DFF0] transition-colors mb-2">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-white/80 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const desktopCard = (item: CarouselItem) => (
    <div key={item.id} className="group relative overflow-hidden rounded-3xl h-96 shadow-lg hover:shadow-2xl transition-all duration-300">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Gradient Overlay - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-300" />
      
      {/* Decorative Indian Pattern Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <h3 className="font-serif text-3xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-base text-white/85 line-clamp-3 mb-4 leading-relaxed">
            {item.description}
          </p>
        )}
        {item.link && (
          <Link
            href={item.link}
            className="inline-flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors w-fit font-semibold group/link"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="mb-8">
          {sectionLabel && (
            <div className="text-center mb-3">
              <span className="font-body text-xs tracking-[0.3em] text-[#9B59B6] uppercase font-semibold">
                {sectionLabel}
              </span>
            </div>
          )}
          <h2 className="font-serif text-3xl font-bold text-[#2D1B3D] text-center mb-3">{title}</h2>
          {subtitle && <p className="font-body text-base text-[#6B5B7B] text-center leading-relaxed">{subtitle}</p>}
        </div>
        <MobileCarousel
          items={items.map((item) => carouselCard(item))}
        />
      </div>
    );
  }

  // Desktop layout - grid
  return (
    <div className="w-full">
      <div className="mb-14">
        {sectionLabel && (
          <div className="text-center mb-4">
            <span className="font-body text-xs tracking-[0.3em] text-[#9B59B6] uppercase font-semibold">
              {sectionLabel}
            </span>
          </div>
        )}
        <h2 className="font-serif text-5xl lg:text-6xl font-bold text-[#2D1B3D] text-center mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-lg text-[#6B5B7B] max-w-2xl mx-auto text-center leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => desktopCard(item))}
      </div>
    </div>
  );
}
