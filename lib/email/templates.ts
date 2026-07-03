import type { EnrollmentRecord } from '@/lib/enrollment/types'

/**
 * Responsive, branded HTML email templates (table-based for email-client support).
 * Brand palette: #6B2D8B (deep purple) → #9B59B6 → #E87BB0.
 */

const BRAND = {
  purple: '#6B2D8B',
  purpleLight: '#9B59B6',
  pink: '#E87BB0',
  ink: '#2D1B3D',
  muted: '#6B5B7B',
  bg: '#F5EFF8',
  cream: '#FFF9F0',
}

function esc(v: string | number | null | undefined): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function shell(title: string, inner: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:${BRAND.ink};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(107,45,139,0.12);">
        <tr>
          <td style="background:linear-gradient(135deg,${BRAND.purple} 0%,${BRAND.purpleLight} 55%,${BRAND.pink} 100%);padding:32px 28px;text-align:center;">
            <div style="font-size:22px;font-weight:600;color:#ffffff;letter-spacing:0.5px;">Incredible Souls</div>
            <div style="font-size:12px;color:#ffffffcc;margin-top:4px;letter-spacing:2px;text-transform:uppercase;">Nature Wellness Foundation</div>
          </td>
        </tr>
        <tr><td style="padding:32px 28px;">${inner}</td></tr>
        <tr>
          <td style="padding:20px 28px;background:${BRAND.cream};text-align:center;border-top:1px solid #eee;">
            <div style="font-size:12px;color:${BRAND.muted};">Incredible Souls · Pune, India</div>
            <div style="font-size:12px;color:${BRAND.muted};margin-top:4px;">byincrediblesouls@gmail.com · +91 7709008011</div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #F0EAF5;font-size:13px;color:${BRAND.muted};width:40%;vertical-align:top;">${esc(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #F0EAF5;font-size:14px;color:${BRAND.ink};font-weight:500;">${esc(value)}</td>
  </tr>`
}

/** Email sent to the admin when a new enrollment is completed. */
export function adminEnrollmentEmail(r: EnrollmentRecord): { subject: string; html: string; text: string } {
  const priceText = r.price > 0 ? `₹${r.price.toLocaleString('en-IN')}` : 'Free'
  const inner = `
    <h1 style="font-size:20px;margin:0 0 6px;color:${BRAND.ink};">New Course Enrollment 🎉</h1>
    <p style="font-size:14px;color:${BRAND.muted};margin:0 0 20px;">A new student has enrolled in <strong>${esc(r.courseName)}</strong>.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row('Enrollment ID', r.enrollmentId)}
      ${row('Name', r.name)}
      ${row('Phone', r.phone)}
      ${row('Email', r.email)}
      ${row('Course', r.courseName)}
      ${row('Price', priceText)}
      ${row('Payment Status', r.paymentStatus === 'free' ? 'Free Enrollment' : 'Success')}
      ${row('Payment ID', r.paymentId || '—')}
      ${row('Order ID', r.orderId || '—')}
      ${row('Message', r.message || '—')}
      ${row('Enrollment Time', new Date(r.transactionDate).toLocaleString('en-IN'))}
    </table>`
  const text = `New Course Enrollment - ${r.courseName}

A new student has enrolled.
Name: ${r.name}
Phone: ${r.phone}
Email: ${r.email}
Course: ${r.courseName}
Price: ₹${r.price}
Payment Status: ${r.paymentStatus === 'free' ? 'Free' : 'Success'}
Payment ID: ${r.paymentId || '-'}
Order ID: ${r.orderId || '-'}
Message: ${r.message || '-'}
Enrollment Time: ${r.transactionDate}`
  return {
    subject: `New Course Enrollment - ${r.courseName}`,
    html: shell(`New Enrollment - ${r.courseName}`, inner),
    text,
  }
}

/** Confirmation email sent to the student. */
export function studentConfirmationEmail(r: EnrollmentRecord): { subject: string; html: string; text: string } {
  const priceText = r.price > 0 ? `₹${r.price.toLocaleString('en-IN')}` : 'Free'
  const inner = `
    <h1 style="font-size:20px;margin:0 0 6px;color:${BRAND.ink};">Thank you, ${esc(r.name.split(' ')[0])}! ✨</h1>
    <p style="font-size:14px;color:${BRAND.muted};margin:0 0 20px;line-height:1.6;">
      Your enrollment for <strong>${esc(r.courseName)}</strong> is confirmed. We're delighted to walk beside you on this healing journey.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.cream};border-radius:12px;padding:8px 16px;">
      ${row('Enrollment ID', r.enrollmentId)}
      ${row('Course', r.courseName)}
      ${row('Amount Paid', priceText)}
      ${row('Payment ID', r.paymentId || '—')}
    </table>
    <p style="font-size:13px;color:${BRAND.muted};margin:22px 0 0;line-height:1.6;">
      Our team will reach out shortly with your session details. Need help? Contact us at
      <a href="mailto:byincrediblesouls@gmail.com" style="color:${BRAND.purple};">byincrediblesouls@gmail.com</a>
      or call <strong>+91 7709008011</strong>.
    </p>`
  const text = `Enrollment Successful

Thank you, ${r.name}!
Your enrollment for ${r.courseName} is confirmed.

Enrollment ID: ${r.enrollmentId}
Course: ${r.courseName}
Amount Paid: ${priceText}
Payment ID: ${r.paymentId || '-'}

Support: byincrediblesouls@gmail.com · +91 7709008011`
  return {
    subject: 'Enrollment Successful',
    html: shell('Enrollment Successful', inner),
    text,
  }
}
