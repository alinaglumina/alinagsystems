import Link from 'next/link';
import { Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import { site, services } from '@/lib/site';
import { Logo } from './logo';

const columns = [
  { title: 'Services', links: services.slice(0, 5).map((s) => ({ label: s.title, href: '/services' })) },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn', href: site.social.linkedin },
      { label: 'GitHub', href: site.social.github },
      { label: 'X / Twitter', href: site.social.twitter },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
                { Icon: Github, href: site.social.github, label: 'GitHub' },
                { Icon: Twitter, href: site.social.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-cobalt/40 hover:text-ink">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-mono text-2xs uppercase tracking-[0.2em] text-faint">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink">
                        {l.label}
                        <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-mono text-2xs uppercase tracking-[0.18em]">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
