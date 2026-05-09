import express from 'express'
import { createCheckout } from './stripe/webhook'
const app = express()
app.use(express.json())
app.post('/api/billing/checkout', createCheckout)
app.post('/api/stripe/webhook', express.raw({type:'application/json'}), () => {})
app.listen(3000, () => console.log('API on :3000'))
