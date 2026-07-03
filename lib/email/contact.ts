import { getTransporter, fromAddress, isEmailConfigured } from './transporter'

export interface ContactLead {
  name: string
  email: string
  phone?: string
  message: string
}

function esc(v: string | undefined): string {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function contactEmailHtml(lead: ContactLead, when: string): string {
  const brand = { purple: '#6B2D8B', ink: '#2D1B3D', muted: '#6B5B7B', cream: '#FFF9F0' }
  const row = (label: string, value: string) => `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #F0EAF5;font-size:13px;color:${brand.muted};width:35%;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #F0EAF5;font-size:14px;color:${brand.ink};font-weight:500;">${value}</td>
  </tr>`
  return `<!DOCTYPE html><html><body style="margin:0;background:#F5EFF8;font-family:Segoe UI,Roboto,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;"><tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:16px;overflow:hidden;">
        <tr><td style="background:linear-gradient(135deg,#6B2D8B,#9B59B6,#E87BB0);padding:28px;text-align:center;color:#fff;font-size:20px;font-weight:600;">Incredible Souls</td></tr>
        <tr><td style="padding:28px;">
          <h1 style="font-size:19px;margin:0 0 6px;color:${brand.ink};">New Contact Enquiry</h1>
          <p style="font-size:14px;color:${brand.muted};margin:0 0 18px;">A visitor reached out through the website contact form.</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row('Name', esc(lead.name))}
            ${row('Email', esc(lead.email))}
            ${row('Phone', esc(lead.phone) || '—')}
            ${row('Message', esc(lead.message))}
            ${row('Received', esc(when))}
          </table>
        </td></tr>
        <tr><td style="padding:16px;background:${brand.cream};text-align:center;font-size:12px;color:${brand.muted};">Incredible Souls · Pune, India</td></tr>
      </table>
    </td></tr></table>
  </body></html>`
}

/** Email a contact-form lead to TO_EMAIL. Returns true if sent. */
export async function sendContactLead(lead: ContactLead): Promise<boolean> {
  if (!isEmailConfigured()) {
    console.warn('[contact] SMTP not configured — skipping lead email.')
    return false
  }
  const to = process.env.TO_EMAIL
  if (!to) {
    console.error('[contact] TO_EMAIL not set.')
    return false
  }
  const when = new Date().toLocaleString('en-IN')
  await getTransporter().sendMail({
    from: fromAddress(),
    to,
    replyTo: lead.email, // reply goes straight to the visitor
    subject: `New Contact Enquiry - ${lead.name}`,
    html: contactEmailHtml(lead, when),
    text: `New Contact Enquiry\n\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone || '-'}\nMessage: ${lead.message}\nReceived: ${when}`,
  })
  return true
}
