'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Loader2, Lock, ArrowRight } from 'lucide-react'
import { enrollmentFormSchema, type EnrollmentFormValues } from '@/lib/enrollment/validation'
import { priceLabel, isFreeCourse, type Course } from '@/lib/courses'
import { loadRazorpayScript, openRazorpayCheckout, type RazorpayHandlerResponse } from '@/lib/payments/checkout'

type Status = 'idle' | 'creating' | 'verifying'

export default function EnrollmentForm({ course }: { course: Course }) {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('idle')
  const free = isFreeCourse(course)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentFormSchema),
    defaultValues: { name: '', phone: '', email: '', message: '' },
  })

  const busy = status !== 'idle'

  function goSuccess(params: Record<string, string>) {
    router.push(`/enrollment-success?${new URLSearchParams(params).toString()}`)
  }
  function goFailed(reason: string) {
    router.push(`/payment-failed?${new URLSearchParams({ course: course.slug, reason }).toString()}`)
  }

  async function onSubmit(values: EnrollmentFormValues) {
    try {
      setStatus('creating')
      const payload = { ...values, courseId: course.slug }

      // 1) Create order (or finalize immediately for free courses) on the backend.
      const orderRes = await fetch('/api/enrollment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const orderData = await orderRes.json()

      if (!orderRes.ok) {
        setStatus('idle')
        toast.error(orderData?.error || 'Could not start enrollment. Please try again.')
        return
      }

      // Free course — no payment, straight to success.
      if (orderData.free) {
        goSuccess({
          eid: orderData.enrollmentId,
          course: course.title,
          amount: '0',
          name: values.name,
        })
        return
      }

      // 2) Load Razorpay checkout.
      const loaded = await loadRazorpayScript()
      if (!loaded) {
        setStatus('idle')
        toast.error('Unable to load the payment gateway. Check your connection and retry.')
        return
      }

      // 3) Open checkout. The handler verifies the payment on the backend.
      openRazorpayCheckout({
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Incredible Souls',
        description: orderData.courseName,
        order_id: orderData.orderId,
        prefill: { name: values.name, email: values.email, contact: values.phone },
        notes: { courseId: course.slug },
        theme: { color: '#6B2D8B' },
        modal: {
          ondismiss: () => {
            if (status !== 'verifying') {
              setStatus('idle')
              toast('Payment cancelled.')
            }
          },
        },
        handler: async (response: RazorpayHandlerResponse) => {
          try {
            setStatus('verifying')
            const verifyRes = await fetch('/api/enrollment/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...payload, ...response }),
            })
            const verifyData = await verifyRes.json()
            if (!verifyRes.ok || !verifyData.success) {
              goFailed('verification')
              return
            }
            goSuccess({
              eid: verifyData.enrollmentId || '',
              course: verifyData.courseName || course.title,
              amount: String(verifyData.amount ?? course.price),
              name: verifyData.name || values.name,
              pid: verifyData.paymentId || '',
            })
          } catch {
            goFailed('verification')
          }
        },
      })
    } catch (err) {
      console.error('[enroll] submit error:', err)
      setStatus('idle')
      toast.error('Something went wrong. Please try again.')
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl border bg-white font-body text-base text-[#2D1B3D] placeholder-[#9B8BAB] focus:outline-none focus:ring-2 focus:ring-[#9B59B6] focus:border-transparent transition-all'

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
            Full Name <span className="text-[#E87BB0]">*</span>
          </label>
          <input
            id="name"
            {...register('name')}
            className={`${inputCls} ${errors.name ? 'border-red-400' : 'border-[#E9DFF0]'}`}
            placeholder="Your name"
            disabled={busy}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
            Mobile Number <span className="text-[#E87BB0]">*</span>
          </label>
          <input
            id="phone"
            inputMode="tel"
            {...register('phone')}
            className={`${inputCls} ${errors.phone ? 'border-red-400' : 'border-[#E9DFF0]'}`}
            placeholder="10-digit mobile number"
            disabled={busy}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
          Email Address <span className="text-[#E87BB0]">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`${inputCls} ${errors.email ? 'border-red-400' : 'border-[#E9DFF0]'}`}
          placeholder="your.email@example.com"
          disabled={busy}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-body text-sm font-medium text-[#2D1B3D] mb-2">
          Message <span className="text-[#9B8BAB]">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={`${inputCls} resize-none ${errors.message ? 'border-red-400' : 'border-[#E9DFF0]'}`}
          placeholder="Anything you'd like us to know…"
          disabled={busy}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={busy}
        className="w-full px-8 py-3.5 bg-[#6B2D8B] text-white font-body text-sm font-medium rounded-full hover:bg-[#9B59B6] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_6px_30px_rgba(107,45,139,0.4)] flex items-center justify-center gap-2"
      >
        {status === 'creating' && <><Loader2 className="w-4 h-4 animate-spin" /> Preparing…</>}
        {status === 'verifying' && <><Loader2 className="w-4 h-4 animate-spin" /> Verifying payment…</>}
        {status === 'idle' && (
          free ? (
            <>Confirm Free Enrollment <ArrowRight className="w-4 h-4" /></>
          ) : (
            <>Proceed to Pay {priceLabel(course)} <ArrowRight className="w-4 h-4" /></>
          )
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 font-body text-xs text-[#9B8BAB]">
        <Lock className="w-3 h-3" />
        {free ? 'No payment required for this session.' : 'Secure payment powered by Razorpay.'}
      </p>
    </motion.form>
  )
}
