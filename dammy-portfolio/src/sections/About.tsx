import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get to know"
          title="About me"
          description="A developer obsessed with the details — from the first paint to the last API call."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-slate-400 sm:text-base">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {['Problem solver', 'Detail-oriented', 'Fast learner', 'Team player'].map((trait) => (
                <span key={trait} className="pill">
                  {trait}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-ghost mt-4 inline-flex">
              Let&apos;s talk
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet-500/10 blur-2xl transition-all duration-500 group-hover:bg-violet-500/25" />
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}

            <div className="glass flex items-center gap-3 rounded-2xl p-5 sm:col-span-3 lg:col-span-1">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
                <Sparkles size={18} />
              </span>
              <p className="text-xs leading-relaxed text-slate-400">
                Currently exploring WebGL, design systems and edge-first architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}