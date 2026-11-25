import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

type Status = 'idle' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setStatus('sent')
    form.reset()
    window.setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Say hello"
          title="Let's build something great"
          description="Got a project, a role, or just an idea? My inbox is always open."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass flex flex-col justify-between rounded-3xl p-7"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-white">Contact details</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Prefer email? Reach me directly — I usually reply within 24 hours.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition-colors hover:border-violet-400/30 hover:text-white"
                >
                  <Mail size={16} className="text-violet-400" />
                  {profile.email}
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                  <MapPin size={16} className="text-cyan-400" />
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
              <p className="text-xs leading-relaxed text-emerald-300">
                Available for freelance &amp; full-time roles — remote friendly.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-400/50 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-400/50 focus:bg-white/[0.05]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-400/50 focus:bg-white/[0.05]"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <button type="submit" className="btn-primary">
                {status === 'sent' ? (
                  <>
                    Message ready
                    <CheckCircle2 size={16} />
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500">
                Opens your mail client — no data is stored.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}