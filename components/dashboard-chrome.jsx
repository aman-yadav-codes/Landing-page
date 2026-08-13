"use client";
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import AdminNav from './admin-nav';
import ThemeToggle from './theme-toggle';
export default function DashboardChrome({children}){return <div className="min-h-screen bg-background"><aside className="fixed inset-y-0 left-0 hidden w-60 border-r bg-card p-4 lg:block"><Link href="/" className="mb-6 flex items-center gap-2 font-serif text-xl">☕ Cappuccino</Link><AdminNav/></aside><div className="lg:pl-60"><header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur"><div className="flex items-center gap-2"><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden"><Menu size={18}/></Button></SheetTrigger><SheetContent side="left" className="w-[280px] p-5"><SheetTitle>Cappuccino</SheetTitle><div className="mt-6"><AdminNav/></div></SheetContent></Sheet><Link href="/" className="text-sm text-muted-foreground">← Site</Link></div><ThemeToggle/></header><main className="mx-auto max-w-7xl p-4 md:p-6">{children}</main></div></div>}
