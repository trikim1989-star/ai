export function receiptHtml({ amount, plan }: { amount: number, plan: string }) {
  return `
  <div style="background:#050508;color:white;font-family:Inter;padding:40px">
    <h1 style="color:#FF2D78;text-shadow:0 0 12px #FF2D78;font-family:Orbitron">NEONFRAME</h1>
    <p>Thanks for your payment.</p>
    <div style="border:1px solid #00F5FF;padding:20px;margin:20px 0">
      <div>Plan: ${plan}</div>
      <div>Amount: $${amount.toFixed(2)}</div>
    </div>
    <p style="color:#00F5FF">Your credits have been added.</p>
  </div>`
}
