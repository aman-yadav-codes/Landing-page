import { cn } from '../../lib/utils';
export function Card({ className, ...props }) { return <div className={cn('rounded-2xl border border-border bg-card text-card-foreground shadow-card', className)} {...props} />; }
export function CardHeader({ className, ...props }) { return <div className={cn('flex flex-col space-y-1.5 p-5', className)} {...props} />; }
export function CardTitle({ className, ...props }) { return <h3 className={cn('font-serif text-xl font-semibold', className)} {...props} />; }
export function CardContent({ className, ...props }) { return <div className={cn('p-5 pt-0', className)} {...props} />; }
