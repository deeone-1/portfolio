import { motion } from 'framer-motion'
import { Code2, Database, Server } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'

const iconMap = {
  frontend: Code2,
  backend: Server,
  database: Database,
} as const

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & stack"
          description="A toolbox refined over 3+ years of shipping real products to real users."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = iconMap[group.icon]
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: 'easeOut' }}
                className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:border-violet-400/30 hover:bg-white/[0.06] sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/[0.07] blur-3xl transition-all duration-500 group-hover:bg-violet-500/20" />

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 text-violet-300 ring-1 ring-white/10">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                    <p className="text-[11px] text-slate-500">{group.blurb}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span className="tabular-nums text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 1,
                            delay: 0.15 + skillIndex * 0.08,
                            ease: 'easeOut',
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                        />
                      </div>
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