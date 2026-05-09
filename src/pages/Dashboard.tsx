export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl neon-text-cyan mb-6">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="hud-corner p-4 border border-white/10">Credits: 450</div>
        <div className="hud-corner p-4 border border-white/10">Jobs: 12</div>
        <div className="hud-corner p-4 border border-white/10">Referrals: 3</div>
      </div>
    </div>
  )
}
