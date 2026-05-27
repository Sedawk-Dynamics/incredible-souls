'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Star, ShoppingCart } from 'lucide-react'
import { MobileCarousel } from './mobile-carousel'
import { useIsMobile } from '@/hooks/use-mobile'

interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Crystals',
    description: 'Authentic healing crystals with natural energy for spiritual transformation and wellness.',
    price: 1200,
    rating: 4.8,
    reviews: 156,
    image: '/images/product-crystals.jpg',
  },
  {
    id: 2,
    name: 'Healing Powders',
    description: 'Pure Ayurvedic healing powders crafted from natural herbs and minerals for holistic health.',
    price: 450,
    rating: 4.6,
    reviews: 89,
    image: '/images/product-powders.jpg',
  },
  {
    id: 3,
    name: 'Aroma Oils',
    description: 'Premium essential and aroma oils for meditation, relaxation, and therapeutic wellness.',
    price: 680,
    rating: 4.9,
    reviews: 203,
    image: '/images/product-oils.jpg',
  },
  {
    id: 4,
    name: 'Lama Fera Kit',
    description: 'Complete Lama Fera healing kit with spiritual tools for deep energy work and transformation.',
    price: 3500,
    rating: 5.0,
    reviews: 67,
    image: '/images/product-lama-fera.jpg',
  },
  {
    id: 5,
    name: 'Rudraksha',
    description: 'Sacred Rudraksha beads and mala necklaces for meditation, spiritual practice, and healing.',
    price: 890,
    rating: 4.7,
    reviews: 134,
    image: '/images/product-rudraksha.jpg',
  },
]

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group h-full">
    <div className="premium-card bg-white rounded-2xl overflow-hidden border border-[#E9DFF0] hover:border-[#9B59B6]/30 hover:shadow-[0_20px_60px_rgba(107,45,139,0.1)] transition-all duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#FFF9F0] to-[#E9DFF0]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-sans text-xl font-semibold text-[#2D1B3D] mb-2">{product.name}</h3>
        <p className="font-body text-sm text-[#6B5B7B] mb-4 flex-grow leading-relaxed">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#E9DFF0]">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#D1C4DC]'}`}
              />
            ))}
          </div>
          <span className="font-body text-xs font-medium text-[#6B5B7B]">({product.rating})</span>
          <span className="font-body text-xs text-[#9B8BAB]">{product.reviews} reviews</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-sans text-2xl font-semibold text-[#6B2D8B]">₹{product.price}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(107,45,139,0.35)]">
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Buy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default function ShopCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const isMobile = useIsMobile()

  const itemsPerView = 3
  const totalSlides = Math.ceil(products.length / itemsPerView)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlay, totalSlides])

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  // Mobile carousel view
  if (isMobile) {
    return (
      <div className="w-full space-y-8">
        <MobileCarousel
          items={products.map((product) => (
            <div key={product.id} className="p-2">
              <ProductCard product={product} />
            </div>
          ))}
        />

        {/* See All Products Button */}
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="px-8 py-3 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(107,45,139,0.3)]"
          >
            See All Products
          </Link>
        </div>
      </div>
    )
  }

  // Desktop carousel view
  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {Array.from({ length: totalSlides }).map((_, slideIdx) => (
            <div key={slideIdx} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {products.slice(slideIdx * itemsPerView, (slideIdx + 1) * itemsPerView).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/3 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:shadow-xl"
          aria-label="Previous products"
        >
          <ArrowLeft className="w-5 h-5 text-[#6B2D8B]" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/3 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:shadow-xl"
          aria-label="Next products"
        >
          <ArrowRight className="w-5 h-5 text-[#6B2D8B]" />
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#6B2D8B] w-8' : 'bg-[#D1C4DC] hover:bg-[#9B8BAB]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* See All Products Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/shop"
          className="px-10 py-3.5 bg-[#6B2D8B] text-white font-body text-base font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(107,45,139,0.3)]"
        >
          See All Products
        </Link>
      </div>
    </div>
  )
}
