import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, ArrowRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import SectionHeading from '../components/SectionHeading'
import { projects, profile } from '../data/portfolio'

export default function Projects() {
  // Automatically grab your GitHub URL from portfolio.ts
  const githubUrl = profile.socials.find((s) => s.key === 'github')?.href || '#'

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I'm proud of"
            description="A few builds that pushed me further as an engineer."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="glass group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_30px_80px_-30px_rgba(124,58,237,0.55)]"
            >
              <div className={`relative h-44 overflow-hidden sm:h-52 ${project.gradient}`}>
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`${project.title} — screenshot`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                    <div className="absolute inset-0 bg-grid opacity-20" />
                  </>
                )}

                <div className="absolute inset-0 flex items-end justify-between p-5">
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white/90 backdrop-blur-md">
                    {project.category}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-white/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-5 text-xs font-medium">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-violet-300 transition-colors hover:text-white"
                  >
                    <ExternalLink size={14} />
                    Live demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-white"
                  >
                    <FaGithub size={14} />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Added "+ Many more" Button ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 flex justify-center"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost group"
          >
            <span>+ Many more on GitHub</span>
            <ArrowRight
              size={16}
              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
        {/* ─────────────────────────────────────────────────────── */}

      </div>
    </section>
  )
}