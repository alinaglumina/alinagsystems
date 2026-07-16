import { PageHeader } from '@/components/ui/page-header';
import { CTA } from '@/components/sections/cta';
import { Process } from '@/components/sections/process';
import { services } from '@/lib/site';
import { Icon } from '@/components/ui/icon';
import { Reveal } from '@/components/ui/reveal';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Services',
  description: 'Custom software, web & mobile apps, cloud & DevOps, AI & data, product design, and IT consulting — full-stack capability from Alinag Systems.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title="Everything you need to design, build, and scale."
        lead="Six core practices, one accountable team. Engage us for a single project or as your long-term engineering partner."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <div className="group flex h-full flex-col card-surface p-8 transition-colors hover:border-cobalt/40">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <Icon name={s.icon} size={22} />
                  </div>
                  <span className="font-mono text-2xs tracking-[0.2em] text-faint">0{i + 1}</span>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.summary}</p>
                <ul className="mt-6 grid gap-2 border-t border-line pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink/80">
                      <Check size={15} className="text-aqua" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
