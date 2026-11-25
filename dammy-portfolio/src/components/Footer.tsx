import { profile } from '../data/portfolio'
import { socialIconMap } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950/60">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-white">
            Dammy<span className="text-violet-400">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} — Built with React, TypeScript &amp; Three.js.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = socialIconMap[social.key]
            return (
              <a
                key={social.key}
                href={social.href}
                target={social.key === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}