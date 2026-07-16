import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

export function CTA() {
  return (
    <section className="container-x py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 text-center md:p-20">
          <div className="pointer-events-none absolute inset-0 bg-brand-gradient opacity-[0.08]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-[100px]" />
          <div className="blueprint absolute inset-0 opacity-30" />
          <div className="relative">
            <span className="eyebrow mb-5">Let's build</span>
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tightest sm:text-4xl md:text-5xl">
              Ready to build what's <span className="gradient-text">next</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
              Tell us about your product, platform, or idea. We'll come back with a clear, honest plan to make it real.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                Start a project <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn-ghost">Browse services</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
