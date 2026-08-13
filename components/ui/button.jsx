import { cn } from '../../lib/utils';

export function Button({ className, variant = 'default', size = 'default', ...props }) {
  const variants = {
    default: 'bg-coffee-800 text-white hover:bg-coffee-700',
    outline: 'border border-border bg-background hover:bg-muted',
    secondary: 'bg-coffee-100 text-coffee-900 hover:bg-coffee-200 dark:bg-coffee-900 dark:text-coffee-100',
    ghost: 'hover:bg-muted',
  };
  const sizes = { default: 'h-10 px-4 py-2', sm: 'h-9 rounded-md px-3', icon: 'h-10 w-10 p-0' };
  return <button className={cn('inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee-400 disabled:pointer-events-none disabled:opacity-50', variants[variant], sizes[size], className)} {...props} />;
}
