"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, LayoutDashboard, ShoppingBag, Users, Package, Settings } from "lucide-react";
import { useUiStore } from "../lib/store";
const items=[['/dashboard','Overview',LayoutDashboard],['/dashboard/orders','Orders',ShoppingBag],['/dashboard/menu','Menu',Coffee],['/dashboard/customers','Customers',Users],['/dashboard/inventory','Inventory',Package],['/dashboard/settings','Settings',Settings]];
export default function AdminNav(){const path=usePathname();const collapsed=useUiStore(s=>s.sidebarCollapsed);return <nav className="space-y-1">{items.map(([href,label,Icon])=><Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${path===href?'bg-coffee-100 text-coffee-900 dark:bg-coffee-900 dark:text-white':'text-muted-foreground hover:bg-muted'} ${collapsed?'justify-center':''}`} title={collapsed?label:''}><Icon size={18}/>{!collapsed&&<span>{label}</span>}</Link>)}</nav>}
