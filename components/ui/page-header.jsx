import { Reveal } from './reveal';

// Consistent inner-page hero with the blueprint + eyebrow language.
export function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="relative overflow-hidden blueprint border-b border-line">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.08] blur-[110px]" />
      <div className="container-x relative pb-16 pt-36 md:pb-20 md:pt-44">
        <Reveal>
          {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl">
            {title}
          </h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
