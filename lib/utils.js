import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merge conditional + Tailwind classes without conflicts.
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
