import Link from 'next/link';

// Wordmark with a compact "system node" mark.
export function Logo({ className }) {
  return (
    <Link href="/" className={className} aria-label="Alinag Systems — home">
      <span className="flex items-center gap-2.5">
        <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient shadow-glow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="3.5" cy="3.5" r="1.6" fill="white" />
            <circle cx="12.5" cy="3.5" r="1.6" fill="white" fillOpacity="0.7" />
            <circle cx="8" cy="12" r="1.6" fill="white" fillOpacity="0.85" />
            <path d="M3.5 3.5 8 12l4.5-8.5M3.5 3.5h9" stroke="white" strokeWidth="1" strokeOpacity="0.6" />
          </svg>
        </span>
        <span className="font-display text-[1.05rem] font-semibold tracking-tight text-ink">
          Alinag <span className="text-muted">Systems</span>
        </span>
      </span>
    </Link>
  );
}
