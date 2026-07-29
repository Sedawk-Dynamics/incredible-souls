import type { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

/**
 * Shared layout + typography primitives for all legal / policy subpages.
 * Keeps every policy page visually consistent with the brand theme.
 */

export function PolicyLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string
  lastUpdated?: string
  intro?: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section
          className="relative pt-36 pb-16 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #FFF9F0 0%, #F5EFF8 50%, #E9DFF0 100%)' }}
        >
          <div className="absolute inset-0 texture-bg opacity-40" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <div className="ornament-divider justify-center mb-5">
              <span className="font-body text-xs tracking-[0.25em] text-[#9B59B6] uppercase">Legal</span>
            </div>
            <h1 className="font-sans text-4xl lg:text-5xl font-light text-[#2D1B3D] text-balance">
              {title}
            </h1>
            {lastUpdated && (
              <p className="font-body text-sm text-[#9B8BAB] mt-4">Last Updated: {lastUpdated}</p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-[#FFF9F0]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {intro && <div className="mb-8 font-body text-base leading-relaxed text-[#6B5B7B]">{intro}</div>}
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export function Section({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 mt-10 first:mt-0">
      <h2 className="font-sans text-2xl lg:text-3xl font-light text-[#2D1B3D] mb-4">{title}</h2>
      {children}
    </section>
  )
}

export function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="font-sans text-lg font-semibold text-[#6B2D8B] mb-2">{title}</h3>
      {children}
    </div>
  )
}

export function P({ children }: { children: ReactNode }) {
  return <p className="font-body text-base leading-relaxed text-[#6B5B7B] mb-4">{children}</p>
}

export function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mb-4 flex flex-col gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 font-body text-base leading-relaxed text-[#6B5B7B]">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#9B59B6] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ContactCard({
  name,
  role,
  company = 'Incredible Souls',
  address = 'Pune – 411021, Maharashtra, India',
  email = 'byincrediblesouls@gmail.com',
  phone,
  website,
  note,
}: {
  name?: string
  role?: string
  company?: string
  address?: string
  email?: string
  phone?: string
  website?: string
  note?: ReactNode
}) {
  return (
    <div className="mt-4 rounded-2xl border border-[#E9DFF0] bg-white p-6">
      {name && <p className="font-sans text-base font-semibold text-[#2D1B3D]">{name}</p>}
      {role && <p className="font-body text-sm text-[#9B8BAB]">{role}</p>}
      {company && <p className="font-body text-sm text-[#2D1B3D] mt-1">{company}</p>}
      {address && <p className="font-body text-sm text-[#6B5B7B]">{address}</p>}
      {email && (
        <p className="font-body text-sm text-[#6B5B7B] mt-2">
          Email:{' '}
          <a href={`mailto:${email}`} className="text-[#6B2D8B] hover:text-[#9B59B6]">
            {email}
          </a>
        </p>
      )}
      {phone && (
        <p className="font-body text-sm text-[#6B5B7B]">
          Phone:{' '}
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-[#6B2D8B] hover:text-[#9B59B6]">
            {phone}
          </a>
        </p>
      )}
      {website && (
        <p className="font-body text-sm text-[#6B5B7B]">
          Website:{' '}
          <a href={`https://${website.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" className="text-[#6B2D8B] hover:text-[#9B59B6]">
            {website}
          </a>
        </p>
      )}
      {note && <p className="font-body text-sm text-[#6B5B7B] mt-3">{note}</p>}
    </div>
  )
}

export function Copyright({ text = '© Copyright Incredible Souls. All Rights Reserved.' }: { text?: string }) {
  return <p className="font-body text-sm font-semibold text-[#2D1B3D] mt-10">{text}</p>
}
