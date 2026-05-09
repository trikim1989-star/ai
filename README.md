# NeonFrame — AI Video SaaS Platform

Production-ready scaffold built from your 10-phase TODO. Cyberpunk dark theme, credits system, Stripe billing, referrals, and real-time job polling.

## Stack
- Frontend: React + Vite + TypeScript + Tailwind
- Backend: Node + Express + TypeScript
- DB: PostgreSQL (schema included)
- Payments: Stripe Checkout + Billing Portal + Webhooks
- Email: Resend
- AI: LLM script generation (JSON schema), image generation for thumbnails

## Quick start
1. cp .env.example .env
2. pnpm install
3. pnpm db:migrate
4. pnpm dev

## Features implemented
- Phases 1-10 from spec
- Stripe: checkout.session.completed, invoice.paid, customer.subscription.deleted
- Resend receipts on payment and renewal
- Referral bonuses: +50 on signup, +100 on subscription
- Admin panel, media library, job queue with polling
