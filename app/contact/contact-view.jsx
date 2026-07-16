'use client';
import { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/page-header';
import { site } from '@/lib/site';
import { Reveal } from '@/components/ui/reveal';

const services = ['Custom Software', 'Web & Mobile', 'Cloud & DevOps', 'AI & Data', 'Design', 'Consulting'];

export function ContactView() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Front-end only. Wire this to your API / email provider (e.g. Resend,
    // Formspree, or a Next route handler at app/api/contact/route.js).
    setSent(true);
  };

  const field = 'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-cobalt';

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        lead="Share a few details and we'll come back with a clear, honest plan — usually within one business day."
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* details */}
          <Reveal className="space-y-8">
            {[
              { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
              { Icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
              { Icon: MapPin, label: 'Location', value: site.location },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-raised text-cobalt">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-mono text-2xs uppercase tracking-[0.18em] text-faint">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block text-ink transition-colors hover:text-cobalt">{value}</a>
                  ) : (
                    <div className="mt-1 text-ink">{value}</div>
                  )}
                </div>
              </div>
            ))}
            <div className="card-surface p-6">
              <p className="text-sm leading-relaxed text-muted">
                Prefer a quick call? Email us and we'll send a scheduling link. NDAs welcome before you share sensitive details.
              </p>
            </div>
          </Reveal>

          {/* form */}
          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-surface p-12 text-center">
                <CheckCircle2 size={40} className="text-aqua" />
                <h2 className="mt-4 text-2xl font-semibold text-ink">Thanks — message received.</h2>
                <p className="mt-2 max-w-sm text-muted">
                  We'll review your project and get back to you within one business day.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', service: '', message: '' }); }}
                  className="btn-ghost mt-6 text-sm">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="card-surface p-7 md:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">Name</label>
                    <input id="name" required value={form.name} onChange={set('name')} className={field} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">Work email</label>
                    <input id="email" type="email" required value={form.email} onChange={set('email')} className={field} placeholder="you@company.com" />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-muted">Company</label>
                  <input id="company" value={form.company} onChange={set('company')} className={field} placeholder="Company name" />
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-xs font-medium text-muted">What do you need?</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button type="button" key={s} onClick={() => setForm((f) => ({ ...f, service: s }))}
                        className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${form.service === s ? 'border-cobalt bg-cobalt text-white' : 'border-line text-muted hover:border-cobalt/40 hover:text-ink'}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">Project details</label>
                  <textarea id="message" required rows={5} value={form.message} onChange={set('message')} className={field} placeholder="Tell us what you're building, timelines, and goals…" />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                  Send message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
