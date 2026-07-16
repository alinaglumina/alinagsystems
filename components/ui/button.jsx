import Link from 'next/link';
import { cn } from '@/lib/utils';

// Pill button. `as="link"` renders a Next <Link>; variant primary|ghost.
export function Button({ as = 'button', href, variant = 'primary', className, children, ...props }) {
  const cls = cn(variant === 'ghost' ? 'btn-ghost' : 'btn-primary', className);
  if (as === 'link') return <Link href={href} className={cls} {...props}>{children}</Link>;
  return <button className={cls} {...props}>{children}</button>;
}
