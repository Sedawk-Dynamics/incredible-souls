import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactLead } from '@/lib/email/contact'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80),
  email: z.string().trim().toLowerCase().email('Enter a valid email').max(120),
  phone: z.string().trim().max(20).optional().or(z.literal('')),
  message: z.string().trim().min(1, 'Please enter a message').max(2000),
})

/** POST /api/contact — emails a contact-form lead to TO_EMAIL. */
export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  try {
    const sent = await sendContactLead(parsed.data)
    if (!sent) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] send failed:', err)
    return NextResponse.json({ error: 'Could not send your message. Please try again.' }, { status: 502 })
  }
}
