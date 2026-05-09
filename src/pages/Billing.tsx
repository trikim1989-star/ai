export default function Billing() {
  const plans = [
    {id:'free', name:'Free', price:'$0', credits:50},
    {id:'pro', name:'Pro', price:'$29', credits:500},
    {id:'agency', name:'Agency', price:'$99', credits:2000},
  ]
  return (
    <div>
      <h2 className="text-3xl neon-text-cyan mb-6">Billing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p=>(
          <div key={p.id} className="hud-corner p-6 border border-[#FF2D78]/30">
            <h3 className="text-xl font-bold">{p.name}</h3>
            <div className="text-3xl my-2">{p.price}</div>
            <div className="font-mono">{p.credits} credits/mo</div>
            <button className="mt-4 w-full neon-glow-cyan py-2">Select</button>
          </div>
        ))}
      </div>
    </div>
  )
}
