import AdminNav from '../../components/admin-nav';
import ThemeToggle from '../../components/theme-toggle';
import Link from 'next/link';
export default function DashboardLayout({children}){return <section className="min-h-screen bg-background text-foreground"><aside className="fixed inset-y-0 left-0 hidden w-60 border-r bg-card p-4 lg:block"><Link href="/" className="mb-6 flex items-center gap-2 font-serif text-xl"><span>☕</span>Cappuccino</Link><AdminNav/></aside><div className="lg:pl-60"><header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur"><Link href="/" className="text-sm text-muted-foreground">← Site</Link><ThemeToggle/></header><main className="mx-auto max-w-7xl p-4 md:p-6">{children}</main></div></section>}
