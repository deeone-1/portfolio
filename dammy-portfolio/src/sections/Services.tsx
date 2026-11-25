import { motion } from 'framer-motion'
import { CheckCircle2, Code2, Palette, PenLine } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/portfolio'

const iconMap = {
  design: Palette,
  code: Code2,
  content: PenLine,
} as const

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I offer"
          title="Services"
          description="End-to-end help — from the first sketch to the production deploy."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-400/30 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-500/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 text-violet-300 ring-1 ring-white/10">
                  <Icon size={20} />
                </span>

                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>

                <ul className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={13} className="shrink-0 text-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}