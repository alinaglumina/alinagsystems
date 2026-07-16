import { clients } from '@/lib/site';

// Quiet credibility strip — a seamless marquee of client wordmarks.
export function TrustBar() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-line bg-surface/30 py-8">
      <div className="container-x">
        <p className="mb-6 text-center font-mono text-2xs uppercase tracking-[0.22em] text-faint">
          Trusted by teams building serious software
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-14">
            {row.map((c, i) => (
              <span key={i} className="whitespace-nowrap font-display text-lg font-medium text-faint/80">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
