import Stripe from 'stripe'
import { sendReceiptEmail } from '../email/sender'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createCheckout(req, res) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: req.body.priceId, quantity: 1 }],
    success_url: process.env.APP_URL + '/billing?success=1',
    cancel_url: process.env.APP_URL + '/billing',
  })
  res.json({ url: session.url })
}

// webhook handlers
export async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  // activate subscription, allocate credits
  await sendReceiptEmail({ to: session.customer_details?.email!, amount: session.amount_total! / 100, plan: 'Pro' })
}

export async function handleInvoicePaid(invoice: Stripe.Invoice) {
  await sendReceiptEmail({ to: invoice.customer_email!, amount: invoice.amount_paid / 100, plan: 'Renewal' })
}
