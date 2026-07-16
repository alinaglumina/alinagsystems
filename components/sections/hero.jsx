'use client';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { site, stats } from '@/lib/site';
import { Topology } from '@/components/ui/topology';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const mv = reduce ? {} : { variants: container, initial: 'hidden', animate: 'show' };
  const iv = reduce ? {} : { variants: item };

  return (
    <section className="relative overflow-hidden blueprint">
      {/* ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-[0.10] blur-[120px]" />

      <div className="container-x relative grid gap-14 pb-20 pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28 lg:pt-44">
        <motion.div {...mv}>
          <motion.span {...iv} className="eyebrow mb-6">
            Software &amp; IT services · Est. Alinag Systems
          </motion.span>

          <motion.h1 {...iv} className="text-balance text-4xl font-semibold leading-[1.04] tracking-tightest sm:text-5xl lg:text-[3.75rem]">
            The engineering partner for your next{' '}
            <span className="gradient-text">breakthrough</span>.
          </motion.h1>

          <motion.p {...iv} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline} We design, build, and scale custom software, cloud platforms, and intelligent systems — engineered to perform and built to last.
          </motion.p>

          <motion.div {...iv} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Start a project <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-ghost">
              <Sparkles size={15} /> Explore services
            </Link>
          </motion.div>

          <motion.dl {...iv} className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-faint">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* signature topology panel */}
        <div className="relative">
          <div className="card-surface relative aspect-[4/3] w-full overflow-hidden p-4 shadow-card">
            <div className="absolute right-4 top-4 z-10 flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.2em] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua shadow-[0_0_10px_#35E0D8]" /> system.online
            </div>
            <div className="blueprint absolute inset-0 opacity-60" />
            <Topology className="absolute inset-0 h-full w-full" />
            <div className="absolute bottom-4 left-4 font-mono text-2xs text-faint">
              <div>lat 14.68° · lon 77.60°</div>
              <div className="text-muted">nodes 9 · edges 14 · uptime 99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
