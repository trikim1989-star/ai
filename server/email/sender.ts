import { Resend } from 'resend'
import { receiptHtml } from './template'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendReceiptEmail({ to, amount, plan }: { to: string, amount: number, plan: string }) {
  await resend.emails.send({
    from: 'NeonFrame <billing@neonframe.ai>',
    to,
    subject: `Receipt — ${plan}`,
    html: receiptHtml({ amount, plan })
  })
}
