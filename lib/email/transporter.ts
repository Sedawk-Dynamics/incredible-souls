import nodemailer, { type Transporter } from 'nodemailer'

/**
 * Nodemailer transporter built entirely from environment variables.
 * No credentials are ever hardcoded.
 */

let transporter: Transporter | null = null

export function isEmailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

export function getTransporter(): Transporter {
  if (!isEmailConfigured()) {
    throw new Error('SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS).')
  }
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 587)
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // true for 465, false for 587/25 (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  return transporter
}

/** Friendly "from" address; uses FROM_EMAIL, falling back to the SMTP user. */
export function fromAddress(): string {
  const email = process.env.FROM_EMAIL || process.env.SMTP_USER || 'no-reply@incrediblesouls.in'
  return `"Incredible Souls" <${email}>`
}
