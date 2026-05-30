import Link from 'next/link'
import Image from 'next/image'
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Approach' },
  // { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
]

const healingLinks = [
  { href: 'https://incredible.sedawk.cloud/trika/', label: 'Trika (Tantra, Mantra & Yantra)' },
  { href: 'https://incredible.sedawk.cloud/vastu/', label: 'Vastu' },
  { href: 'https://incredible.sedawk.cloud/sound-healing/', label: 'Sound Healing' },
  { href: 'https://incredible.sedawk.cloud/product/healing-powders/', label: 'All Healing Services' },
]

export default function Footer() {
  return (
    <footer className="bg-white text-[#2D1B3D] border-t border-[#E9DFF0]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-48 h-24 flex-shrink-0">
                <Image
                  src="/images/incredible-souls-logo-new.png"
                  alt="Incredible Souls"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="font-body text-sm leading-relaxed text-[#6B5B7B] mb-6">
              A sacred sanctuary where healing unfolds as a quiet return to
              your wholeness, your truth, and your inner light.
            </p>

            <div className="flex items-center gap-3">
              {[
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com/byincrediblesouls/',
                },
                {
                  icon: Facebook,
                  href: 'https://www.facebook.com/profile.php?id=61577358555321',
                },
                {
                  icon: Linkedin,
                  href: 'https://linkedin.com/in/incredible-souls-bb4256371',
                },
                {
                  icon: Twitter,
                  href: 'https://twitter.com',
                },
                {
                  icon: Youtube,
                  href: 'https://www.youtube.com/@byIncredibleSouls',
                },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#F5EFF8] text-[#6B2D8B] flex items-center justify-center hover:bg-[#9B59B6] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-base font-semibold text-[#2D1B3D] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#6B5B7B] hover:text-[#9B59B6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B59B6]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Healing Services */}
          <div>
            <h3 className="font-sans text-base font-semibold text-[#2D1B3D] mb-5">
              Mystica Services
            </h3>

            <ul className="space-y-3">
              {healingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[#6B5B7B] hover:text-[#9B59B6] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B59B6]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-sans text-base font-semibold text-[#2D1B3D] mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9B59B6] mt-1 flex-shrink-0" />
                <span className="font-body text-sm text-[#6B5B7B] leading-relaxed">
                  Ratan Park Phase 2, Pashan Sus Road, Pune, Maharashtra
                  411021
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9B59B6]" />
                <a
                  href="tel:+917709008011"
                  className="font-body text-sm text-[#6B5B7B] hover:text-[#9B59B6]"
                >
                  +91 7709008011
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#9B59B6]" />
                <a
                  href="mailto:byincrediblesouls@gmail.com"
                  className="font-body text-sm text-[#6B5B7B] hover:text-[#9B59B6]"
                >
                  byincrediblesouls@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#9B59B6]" />
                <span className="font-body text-sm text-[#6B5B7B]">
                  Mon – Sat: 10am – 6pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E9DFF0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#6B5B7B] text-center sm:text-left">
            © {new Date().getFullYear()} Incredible Souls Nature Wellness
            Foundation. All rights reserved.
          </p>

          <p className="font-body text-xs text-[#9B59B6] italic text-center sm:text-right">
            "The light that you seek lives within you"
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919699638011"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  )
}
