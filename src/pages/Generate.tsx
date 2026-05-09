import { useState } from 'react'
export default function Generate() {
  const [prompt, setPrompt] = useState('')
  return (
    <div>
      <h2 className="text-3xl neon-text-pink mb-4">Generate</h2>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} className="w-full h-32 bg-black/50 border border-[#00F5FF]/30 p-3 font-mono" placeholder="Describe your video..." />
      <button className="mt-3 neon-glow-pink px-6 py-2">Generate Script (5 credits)</button>
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {[1,2,3].map(i=> <div key={i} className="hud-corner p-4 border border-white/10">Scene {i}</div>)}
      </div>
    </div>
  )
}
