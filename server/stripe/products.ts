export const PLAN_TO_PRICE = {
  pro: process.env.STRIPE_PRICE_PRO!,
  agency: process.env.STRIPE_PRICE_AGENCY!,
} as const

export const CREDITS_PER_PLAN = {
  free: 50,
  pro: 500,
  agency: 2000,
} as const
