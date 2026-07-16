import { PageHeader } from '@/components/ui/page-header';
import { Capabilities } from '@/components/sections/capabilities';
import { Process } from '@/components/sections/process';
import { CTA } from '@/components/sections/cta';
import { stats } from '@/lib/site';
import { Reveal } from '@/components/ui/reveal';

export const metadata = {
  title: 'About',
  description: 'Alinag Systems is an engineering-first software and IT services company. Meet the team building software modern businesses rely on.',
};

const values = [
  { title: 'Engineering first', body: 'We are builders. Every decision is judged by whether it makes the software better, faster, and more reliable.' },
  { title: 'Radical clarity', body: 'Plain language, honest timelines, and no jargon. You will never wonder what we are working on or why.' },
  { title: 'Own the outcome', body: 'We measure ourselves on results in production, not slide decks. Your success is the only metric that matters.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Alinag Systems"
        title="We build the software that moves businesses forward."
        lead="Alinag Systems is an engineering-first studio. We partner with founders and enterprises to design, build, and scale software that performs — and keeps performing."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              We started Alinag Systems on a simple conviction: businesses deserve an engineering partner that treats their software like its own product — not a ticket queue.
            </p>
            <p>
              Today we are a senior team of engineers, designers, and architects who ship production systems across custom software, cloud, data, and AI. We work embedded with your team, move in tight iterations, and hold ourselves to enterprise standards on security, performance, and reliability.
            </p>
            <p className="text-ink">
              The result is software you can build a business on — and a partner you can trust for the long run.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-6">
                  <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs text-faint">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full card-surface p-7">
                <div className="h-px w-8 bg-brand-gradient" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Capabilities />
      <Process />
      <CTA />
    </>
  );
}
