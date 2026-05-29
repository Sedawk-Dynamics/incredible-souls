'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ---------------------------
   Academy Dropdown
---------------------------- */
const coursesDropdown = [
  {
    label: 'Lama Fera',
    href: 'https://incredible.sedawk.cloud/lama-fera/',
  },
  {
    label: 'Money & Abundance',
    href: 'https://incredible.sedawk.cloud/money-abundance/',
  },
  {
    label: 'Psychic Surgery & Psychic Being',
    href: 'https://incredible.sedawk.cloud/psychic-surgery-psychic-being/',
  },
  {
    label: 'Karmic Clearance & Karuna Reiki',
    href: 'https://incredible.sedawk.cloud/karmic-clearance-karuna-reiki/',
  },
  {
    label: 'Harmony & Zero State',
    href: 'https://incredible.sedawk.cloud/harmony-zero-state/',
  },
  {
    label: 'Past Life Regression Therapy',
    href: 'https://incredible.sedawk.cloud/past-life-regression-therapy/',
  },
  {
    label: 'Relationships & Inner Child Healing',
    href:
      'https://incredible.sedawk.cloud/relationships-inner-child-healing/',
  },
  {
    label: 'Akashik Records',
    href: 'https://incredible.sedawk.cloud/akashik-records/',
  },
]

/* ---------------------------
   Healing Dropdown
---------------------------- */
const healingDropdown = [
  {
    label: 'Past Life Regression',
    href: 'https://incredible.sedawk.cloud/past-life-regression/',
  },
  {
    label: 'Distance Healing',
    href: 'https://incredible.sedawk.cloud/distance-healing/',
  },
  {
    label: 'Bandhan Moksha Kriya',
    href:
      'https://incredible.sedawk.cloud/bandhan-moksha-kriya/',
  },
  {
    label: 'Aura Clearance & Chakras Aligning',
    href:
      'https://incredible.sedawk.cloud/aura-clearance-chakras-aligning/',
  },
  {
    label: 'Akashik Records Reading',
    href: 'https://incredible.sedawk.cloud/akashik-records/',
  },
]

/* ---------------------------
   Mystica Dropdown
---------------------------- */
const mysticaDropdown = [
  {
    label: 'Trika',
    href: 'https://incredible.sedawk.cloud/trika/',
  },
  {
    label: 'Vastu',
    href: 'https://incredible.sedawk.cloud/vastu/',
  },
  {
    label: 'Sound Healing',
    href:
      'https://incredible.sedawk.cloud/sound-healing/',
  },
]

/* ---------------------------
   Navigation Links
---------------------------- */
const navLinks = [
  { href: '/about', label: 'Our Approach' },

  {
    href: null,
    label: 'Academy',
    hasDropdown: true,
    type: 'courses',
  },

  {
    href: null,
    label: 'Healings',
    hasDropdown: true,
    type: 'healing',
  },

  {
    href: null,
    label: 'Mystica',
    hasDropdown: true,
    type: 'mystica',
  },

  {
    href:
      'https://incredible.sedawk.cloud/?post_type=tribe_events&eventDisplay=month',
    label: 'Events',
    external: true,
  },

  {
    href: 'https://incredible.sedawk.cloud/shop/',
    label: 'Shop',
    external: true,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] =
    useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  const getDropdownItems = (type: string) => {
    switch (type) {
      case 'courses':
        return coursesDropdown
      case 'healing':
        return healingDropdown
      case 'mystica':
        return mysticaDropdown
      default:
        return []
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#FFF9F0]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-[200px] h-[60px] md:w-[240px] md:h-[70px] lg:w-[280px] lg:h-[80px]">
            <Image
              src="/images/incredible-souls-logo-new.png"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <li
                key={link.label}
                className="relative group"
              >
                {/* Dropdown Button */}
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#2D1B3D] hover:text-[#6B2D8B] transition">
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 min-w-[280px] bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {getDropdownItems(
                    link.type || ''
                  ).map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-4 text-sm text-[#1B2B45] hover:bg-[#f8f3ff] hover:text-[#6B2D8B] transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-[#2D1B3D] hover:text-[#6B2D8B] transition"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href || '#'}
                    className="px-4 py-2 text-sm font-medium text-[#2D1B3D] hover:text-[#6B2D8B] transition"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#6B2D8B] text-white rounded-full text-sm font-medium hover:bg-[#8a42b0] transition"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#6B2D8B]"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white',
          isOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <ul className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown ===
                          link.label
                          ? null
                          : link.label
                      )
                    }
                    className="flex items-center justify-between w-full font-medium text-[#2D1B3D]"
                  >
                    {link.label}

                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openMobileDropdown ===
                          link.label &&
                          'rotate-180'
                      )}
                    />
                  </button>

                  {openMobileDropdown ===
                    link.label && (
                    <div className="pl-4 mt-3 space-y-3 border-l-2 border-[#E7D8EF]">
                      {getDropdownItems(
                        link.type || ''
                      ).map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-[#1B2B45] hover:text-[#6B2D8B] transition"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : link.external ? (
                <a
                  href={link.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="block text-[#2D1B3D] hover:text-[#6B2D8B] transition"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href || '#'}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="block text-[#2D1B3D] hover:text-[#6B2D8B] transition"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() =>
              setIsOpen(false)
            }
            className="block text-center bg-[#6B2D8B] text-white py-3 rounded-full font-medium"
          >
            Book a Session
          </Link>
        </ul>
      </div>
    </header>
  )
}