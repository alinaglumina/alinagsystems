import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

// Eyebrow + title + optional lead, in the shared precision language.
export function SectionHeading({ eyebrow, title, lead, align = 'left', className }) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="text-balance text-3xl font-semibold tracking-tightest sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-muted">{lead}</p>}
    </Reveal>
  );
}
