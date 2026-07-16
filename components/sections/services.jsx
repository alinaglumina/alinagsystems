import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/site';
import { Icon } from '@/components/ui/icon';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

export function Services() {
  return (
    <section id="services" className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="What we do"
        title="Full-stack capability, delivered by senior teams"
        lead="From first line of code to global scale, we cover the disciplines modern software demands — under one accountable roof."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <Link href="/services" className="group relative block h-full card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-card">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-raised text-cobalt transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                <Icon name={s.icon} size={20} />
              </div>
              <h3 className="flex items-center justify-between text-lg font-semibold text-ink">
                {s.title}
                <ArrowUpRight size={16} className="text-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-faint">
                    <span className="h-1 w-1 rounded-full bg-aqua" /> {p}
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
