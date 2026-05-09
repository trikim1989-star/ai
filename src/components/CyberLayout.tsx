import { Outlet } from 'react-router-dom'

export default function CyberLayout() {
  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <div className="flex">
        <aside className="w-64 border-r border-[#00F5FF]/20 p-4">
          <h1 className="neon-text-pink text-2xl font-bold">NEONFRAME</h1>
          <nav className="mt-8 space-y-2 font-mono">
            <a href="/dashboard">Dashboard</a>
            <a href="/generate">Generate</a>
            <a href="/library">Media</a>
            <a href="/billing">Billing</a>
          </nav>
        </aside>
        <main className="flex-1">
          <header className="flex justify-between items-center p-4 border-b border-[#FF2D78]/20">
            <div />
            <div className="neon-glow-cyan px-3 py-1 rounded hud-corner">
              <span className="font-mono">Credits: 450</span>
            </div>
          </header>
          <div className="p-6"><Outlet /></div>
        </main>
      </div>
    </div>
  )
}
