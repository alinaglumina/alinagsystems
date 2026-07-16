import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden blueprint">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="container-x relative text-center">
        <span className="eyebrow mb-5 justify-center">Error · 404</span>
        <h1 className="text-6xl font-semibold tracking-tightest sm:text-8xl">
          <span className="gradient-text">404</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          This page couldn't be found. It may have moved, or the link may be out of date.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
