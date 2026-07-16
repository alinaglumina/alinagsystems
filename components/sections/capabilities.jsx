import { capabilities } from '@/lib/site';
import { Icon } from '@/components/ui/icon';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

export function Capabilities() {
  return (
    <section className="relative border-y border-line bg-surface/40">
      <div className="blueprint absolute inset-0 opacity-40" />
      <div className="container-x relative grid gap-14 py-24 md:py-32 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow="Why Alinag"
          title="Engineering you can build a business on"
          lead="We combine the speed of a startup with the rigor of an enterprise team. The result is software that ships fast and holds up under real-world load."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.1}>
              <div className="h-full card-surface p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-glow">
                  <Icon name={c.icon} size={18} />
                </div>
                <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
