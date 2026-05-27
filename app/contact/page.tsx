'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormState({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('error')
      setErrorMsg('Failed to send message. Please try again.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── PAGE HEADER ──────────────────────────────────────────── */}
        <section
          className="relative min-h-96 flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pb-24"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 40%, #E9DFF0 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-sans text-5xl lg:text-6xl font-light leading-[1.1] text-[#2D1B3D] text-balance mb-4">
              Get in <span className="italic text-brand-gradient">Touch</span>
            </h1>
            <p className="font-body text-lg text-[#6B5B7B] max-w-lg mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* ── CONTACT SECTION ──────────────────────────────────────── */}
        <section className="py-24 bg-[#FFF9F0]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E9DFF0] text-[#6B2D8B] mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#2D1B3D] mb-2">Phone</h3>
                  <a href="tel:+917709008011" className="font-body text-base text-[#6B5B7B] hover:text-[#9B59B6] transition-colors">
                    +91 7709008011
                  </a>
                  <p className="font-body text-sm text-[#9B8BAB] mt-1">Mon–Sat: 10am – 6pm</p>
                </div>

                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E9DFF0] text-[#6B2D8B] mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#2D1B3D] mb-2">Email</h3>
                  <a href="mailto:byincrediblesouls@gmail.com" className="font-body text-base text-[#6B5B7B] hover:text-[#9B59B6] transition-colors">
                    byincrediblesouls@gmail.com
                  </a>
                </div>

                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E9DFF0] text-[#6B2D8B] mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-[#2D1B3D] mb-2">Location</h3>
                  <address className="font-body text-base text-[#6B5B7B] not-italic">
                    Pune, India
                  </address>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-[#E9DFF0]">
                  <p className="font-body text-sm font-medium text-[#9B8BAB] mb-4">Follow us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: '📘', label: 'Facebook' },
                      { icon: '🐦', label: 'Twitter' },
                      { icon: '📷', label: 'Instagram' },
                      { icon: '🎥', label: 'YouTube' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        className="w-10 h-10 rounded-full bg-[#E9DFF0] text-xl flex items-center justify-center hover:bg-[#9B59B6] hover:text-white transition-all"
                        title={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DFF0] bg-white font-body text-base text-[#2D1B3D] placeholder-[#9B8BAB] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#E9DFF0] bg-white font-body text-base text-[#2D1B3D] placeholder-[#9B8BAB] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DFF0] bg-white font-body text-base text-[#2D1B3D] placeholder-[#9B8BAB] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-[#E9DFF0] bg-white font-body text-base text-[#2D1B3D] placeholder-[#9B8BAB] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your inquiry or how we can help..."
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-medium text-green-900">Message sent successfully!</p>
                      <p className="font-body text-sm text-green-700">We&apos;ll get back to you shortly.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body font-medium text-red-900">Error sending message</p>
                      <p className="font-body text-sm text-red-700">{errorMsg}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-3.5 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_6px_30px_rgba(107,45,139,0.4)] flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-center text-[#9B8BAB]">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── MAP SECTION (Optional) ──────────────────────────────── */}
        <section className="py-24 bg-[#E9DFF0]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance mb-4">
                Visit Our <span className="italic text-brand-gradient">Sanctuary</span>
              </h2>
              <p className="font-body text-lg text-[#6B5B7B]">Experience healing in our serene space in Pune</p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(107,45,139,0.15)] aspect-video bg-[#E9DFF0]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9428356842226!2d73.7997!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8d5e1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sPune!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────────────── */}
        <section
          className="py-20 relative overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg, #6B2D8B 0%, #9B59B6 50%, #E87BB0 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-10" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="font-sans text-4xl lg:text-5xl font-light text-white mb-5 text-balance">
              Ready to begin your healing journey?
            </h2>
            <p className="font-body text-base text-white/80 mb-8">
              Connect with us today and take the first step towards transformation.
            </p>
            <Link
              href="tel:+917709008011"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#6B2D8B] font-body text-sm font-semibold rounded-full hover:bg-[#FFF9F0] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)]"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
