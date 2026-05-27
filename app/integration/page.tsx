import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integration | Incredible Souls',
  description: 'True transformation becomes part of daily life through integration of awareness, peace, and conscious living.',
}

export default function IntegrationPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-Width Hero Banner with Text Overlay */}
        <div className="relative w-full h-screen">
          <Image
            src="/images/integration-hero.jpg"
            alt="Integration - peaceful meditation practice"
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          
          {/* Text Overlay - Left Side */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-2xl">
                <h1 className="font-sans text-6xl lg:text-7xl font-light text-white mb-6 text-balance">
                  Integration
                </h1>
                <p className="font-body text-lg text-[#E9DFF0] leading-relaxed">
                  True transformation is not limited to a session or workshop; it becomes part of daily life. You begin to integrate awareness, peace, compassion and conscious living into your thoughts, actions, relationships and decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-24 bg-gradient-to-b from-[#FFF9F0] to-[#F5F0F8]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E9DFF0]">
                <h2 className="font-sans text-3xl font-semibold text-[#2D1B3D] mb-4">
                  The Integration Process
                </h2>
                <p className="font-body text-base text-[#6B5B7B] leading-relaxed mb-4">
                  Integration is the bridge between inner transformation and outer expression. It&apos;s where the spiritual work you&apos;ve done begins to manifest naturally in every aspect of your life—from how you think to how you interact with others.
                </p>
                <p className="font-body text-base text-[#6B5B7B] leading-relaxed">
                  At Incredible Souls, we believe that sustainable healing happens when the practices and insights become woven into the fabric of your daily existence. This is the true measure of spiritual growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#E9DFF0]/30 rounded-2xl p-6">
                  <h3 className="font-sans text-xl font-semibold text-[#2D1B3D] mb-3">
                    Conscious Choices
                  </h3>
                  <p className="font-body text-sm text-[#6B5B7B] leading-relaxed">
                    Every decision becomes an opportunity to express your higher awareness and aligned values.
                  </p>
                </div>
                <div className="bg-[#E9DFF0]/30 rounded-2xl p-6">
                  <h3 className="font-sans text-xl font-semibold text-[#2D1B3D] mb-3">
                    Transformed Relationships
                  </h3>
                  <p className="font-body text-sm text-[#6B5B7B] leading-relaxed">
                    Your relationships naturally evolve as you bring more consciousness and compassion to interactions.
                  </p>
                </div>
                <div className="bg-[#E9DFF0]/30 rounded-2xl p-6">
                  <h3 className="font-sans text-xl font-semibold text-[#2D1B3D] mb-3">
                    Daily Practices
                  </h3>
                  <p className="font-body text-sm text-[#6B5B7B] leading-relaxed">
                    Spiritual practices become natural habits that sustain your growth and inner peace.
                  </p>
                </div>
                <div className="bg-[#E9DFF0]/30 rounded-2xl p-6">
                  <h3 className="font-sans text-xl font-semibold text-[#2D1B3D] mb-3">
                    Authentic Living
                  </h3>
                  <p className="font-body text-sm text-[#6B5B7B] leading-relaxed">
                    You begin living in alignment with your true essence and deepest values.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#9B59B6]/10 to-[#C679B8]/10 rounded-2xl p-8 text-center border border-[#E9DFF0]">
                <h3 className="font-sans text-2xl font-semibold text-[#2D1B3D] mb-3">
                  Ready to Integrate Your Transformation?
                </h3>
                <p className="font-body text-base text-[#6B5B7B] mb-6">
                  Begin your journey of conscious living with our guided sessions and practices.
                </p>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#9B59B6] text-white font-body font-semibold rounded-full hover:bg-[#6B2D8B] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Our Offerings
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
