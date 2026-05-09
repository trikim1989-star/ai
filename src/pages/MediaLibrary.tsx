export default function MediaLibrary() {
  return (
    <div>
      <h2 className="text-3xl neon-text-pink mb-6">Media Library</h2>
      <div className="grid grid-cols-4 gap-4">
        {[1,2,3,4].map(i=> <div key={i} className="aspect-video bg-black/60 border border-white/10 hud-corner" />)}
      </div>
    </div>
  )
}
