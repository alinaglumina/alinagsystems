import { processSteps } from '@/lib/site';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

// Numbered because delivery is a genuine sequence — order carries meaning.
export function Process() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="How we work"
        title="A delivery process with no black boxes"
        lead="Five clear stages, real demos at every step, and a shared roadmap. You always know exactly where your project stands."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.07} className="bg-surface">
            <div className="group h-full p-6 transition-colors hover:bg-raised">
              <span className="font-mono text-2xs tracking-[0.2em] text-cobalt">{step.n}</span>
              <div className="mt-3 h-px w-8 bg-brand-gradient" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
