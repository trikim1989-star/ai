export default function Landing() {
  return (
    <div className="bg-[#050508] text-white min-h-screen">
      <section className="text-center py-24">
        <h1 className="text-6xl neon-text-pink font-extrabold">Generate AI Videos in Seconds</h1>
        <p className="mt-4 text-xl opacity-80 font-mono">Cyberpunk engine. Script → storyboard → video.</p>
        <a href="/dashboard" className="mt-8 inline-block neon-glow-pink px-8 py-3 rounded">Launch Studio</a>
      </section>
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {['Script AI','Storyboard','4K Render','Credit System','Stripe Billing','Referrals'].map(f=>(
          <div key={f} className="hud-corner border border-[#00F5FF]/30 p-6">{f}</div>
        ))}
      </section>
    </div>
  )
}
