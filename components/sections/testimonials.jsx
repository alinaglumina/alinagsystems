import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/site';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

export function Testimonials() {
  return (
    <section className="relative border-y border-line bg-surface/40">
      <div className="container-x py-24 md:py-32">
        <SectionHeading
          align="center"
          eyebrow="Client stories"
          title="Trusted where it counts"
          lead="Long-term partnerships with teams who needed software that simply works."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col card-surface p-7">
                <Quote size={22} className="text-cobalt" />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="font-mono text-2xs uppercase tracking-[0.14em] text-faint">
                    {t.role} · {t.company}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
