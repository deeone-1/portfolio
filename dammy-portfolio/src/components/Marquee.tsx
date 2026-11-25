import { marqueeItems } from '../data/portfolio'

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="relative border-y border-white/5 bg-white/[0.015] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="font-display text-lg font-medium tracking-tight text-slate-500 transition-colors hover:text-white sm:text-xl">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-violet-500/60" />
          </div>
        ))}
      </div>
    </div>
  )
}