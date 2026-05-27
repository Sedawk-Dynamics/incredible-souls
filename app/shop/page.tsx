'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ShoppingCart, Star } from 'lucide-react'

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
    price: 999,
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
    price: 2100,
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

export default function Shop() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-[#FFF9F0] to-[#E9DFF0]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h1 className="font-sans text-5xl lg:text-6xl font-light text-[#2D1B3D] mb-4 text-balance">
              Wellness <span className="italic text-brand-gradient">Shop</span>
            </h1>
            <p className="font-body text-lg text-[#9B8BAB] max-w-2xl mx-auto">
              Discover authentic spiritual wellness products handpicked for your healing journey
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group h-full">
                  <div className="premium-card bg-white rounded-2xl overflow-hidden border border-[#E9DFF0] hover:border-[#9B59B6]/30 hover:shadow-[0_20px_60px_rgba(107,45,139,0.1)] transition-all duration-300 flex flex-col h-full">
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#FFF9F0] to-[#E9DFF0]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-sans text-2xl font-semibold text-[#2D1B3D] mb-3">{product.name}</h3>
                      <p className="font-body text-base text-[#6B5B7B] mb-6 flex-grow leading-relaxed">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#E9DFF0]">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-[#D1C4DC]'}`}
                            />
                          ))}
                        </div>
                        <span className="font-body text-sm font-medium text-[#6B5B7B]">({product.rating})</span>
                        <span className="font-body text-sm text-[#9B8BAB]">{product.reviews} reviews</span>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-sans text-3xl font-semibold text-[#6B2D8B]">₹{product.price}</p>
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(107,45,139,0.35)]">
                          <ShoppingCart className="w-5 h-5" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#6B2D8B] to-[#9B59B6]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-sans text-4xl lg:text-5xl font-light text-white mb-6 text-balance">
              Ready to elevate your wellness?
            </h2>
            <p className="font-body text-lg text-white/80 mb-10">
              Invest in your spiritual transformation with our premium healing collection
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#6B2D8B] font-body text-base font-semibold rounded-full hover:bg-[#FFF9F0] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)]"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
