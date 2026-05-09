export default function Admin() {
  return (
    <div className="p-8 bg-[#050508] min-h-screen text-white">
      <h1 className="text-3xl neon-text-cyan">Admin</h1>
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="p-4 border border-white/10">Total Users: 1,243</div>
        <div className="p-4 border border-white/10">Revenue: $12.4k</div>
        <div className="p-4 border border-white/10">Jobs: 4,502</div>
        <div className="p-4 border border-white/10">Active Subs: 312</div>
      </div>
    </div>
  )
}
