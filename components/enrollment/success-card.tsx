'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Home, BookOpen, Mail } from 'lucide-react'

export default function SuccessCard({
  name,
  course,
  amount,
  txnId,
}: {
  name: string
  course: string
  amount: string
  txnId: string
}) {
  const amountLabel = amount && Number(amount) > 0 ? `₹${Number(amount).toLocaleString('en-IN')}` : 'Free'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-lg bg-white rounded-3xl border border-[#E9DFF0] shadow-[0_20px_60px_rgba(107,45,139,0.12)] p-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5"
      >
        <CheckCircle2 className="w-11 h-11 text-green-600" />
      </motion.div>

      <h1 className="font-sans text-3xl font-light text-[#2D1B3D] mb-2">Payment Successful</h1>
      <p className="font-body text-[#6B5B7B] mb-6">
        Thank you{name ? `, ${name}` : ''}! Your enrollment is confirmed.
      </p>

      <div className="text-left bg-[#FFF9F0] rounded-2xl border border-[#E9DFF0] divide-y divide-[#F0EAF5] mb-6">
        {[
          ['Student', name || '—'],
          ['Course', course || '—'],
          ['Amount Paid', amountLabel],
          ['Transaction ID', txnId || '—'],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between px-5 py-3">
            <span className="font-body text-sm text-[#9B8BAB]">{label}</span>
            <span className="font-body text-sm font-medium text-[#2D1B3D] text-right break-all ml-4">{value}</span>
          </div>
        ))}
      </div>

      <p className="flex items-center justify-center gap-1.5 font-body text-sm text-green-700 mb-8">
        <Mail className="w-4 h-4" /> A confirmation email has been sent.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] transition-all"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
        <Link
          href="/courses"
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#9B59B6]/40 text-[#6B2D8B] font-body text-sm font-medium rounded-full hover:bg-[#E9DFF0]/60 transition-all"
        >
          <BookOpen className="w-4 h-4" /> More Courses
        </Link>
      </div>
    </motion.div>
  )
}
