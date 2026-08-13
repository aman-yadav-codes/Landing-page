"use client";

import { useState } from "react";
import {
  Bell, Coffee, LayoutDashboard, Menu, Moon, Package, Settings, ShoppingBag,
  Sun, Users, X, TrendingUp, Clock3, MoreHorizontal
} from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const nav = [
  ["Overview", LayoutDashboard], ["Orders", ShoppingBag], ["Menu", Coffee],
  ["Customers", Users], ["Inventory", Package], ["Settings", Settings],
];

function Sidebar({ onNavigate }) {
  return <aside className="admin-sidebar">
    <div className="admin-brand"><span className="admin-brand-mark"><Coffee size={17}/></span><div><strong>Cappuccino</strong><small>Admin studio</small></div></div>
    <div className="admin-nav-label">Workspace</div>
    <nav>{nav.map(([label, Icon], i) => <button key={label} className={i === 0 ? "admin-nav active" : "admin-nav"} onClick={() => onNavigate(label)}><Icon size={18}/><span>{label}</span>{label === "Orders" && <b>8</b>}</button>)}</nav>
    <div className="sidebar-bottom"><div className="sidebar-note"><span>☕</span><div><strong>Roast of the day</strong><small>Colombia · Honey</small></div></div></div>
  </aside>;
}

function StatCard({ icon: Icon, label, value, change, trend }) {
  return <article className="stat-card"><div className="stat-top"><span className="stat-icon"><Icon size={18}/></span><span className={trend ? "trend positive" : "trend"}>{change}</span></div><p>{label}</p><strong>{value}</strong><small>vs. previous period</small></article>;
}

export default function DashboardShell() {
  const [dark, setDark] = useState(false);
  const [toast, setToast] = useState("");
  const notify = (text) => { setToast(text); window.clearTimeout(window.__capToast); window.__capToast = window.setTimeout(() => setToast(""), 2600); };

  return <div className={dark ? "admin-app dark" : "admin-app"}>
    <div className="desktop-sidebar"><Sidebar onNavigate={(x) => notify(`${x} selected`)} /></div>
    <Sheet><div className="mobile-admin-bar"><SheetTrigger asChild><button className="icon-btn" aria-label="Open menu"><Menu size={21}/></button></SheetTrigger><div className="mobile-brand"><span>☕</span> Cappuccino</div><button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button></div><SheetContent side="left" className="mobile-sheet"><SheetTitle className="sr-only">Dashboard menu</SheetTitle><Sidebar onNavigate={(x) => notify(`${x} selected`)} /></SheetContent></Sheet>

    <main className="admin-main">
      <header className="admin-header"><div><p className="admin-kicker">Thursday, August 13</p><h1>Good morning, Admin.</h1><p>Here&apos;s what&apos;s brewing at Cappuccino today.</p></div><div className="admin-actions"><button className="icon-btn" onClick={() => notify("You’re all caught up")} aria-label="Notifications"><Bell size={19}/><i>3</i></button><button className="theme-btn" onClick={() => setDark(!dark)}>{dark ? <Sun size={17}/> : <Moon size={17}/>} {dark ? "Light" : "Dark"}</button><div className="avatar">A</div></div></header>

      <section className="stat-grid"><StatCard icon={TrendingUp} label="Today&apos;s revenue" value="$2,840" change="+18.4%" trend/><StatCard icon={ShoppingBag} label="Orders today" value="186" change="+12.8%" trend/><StatCard icon={Users} label="Customers" value="1,248" change="+7.2%" trend/><StatCard icon={Clock3} label="Avg. order time" value="8m 24s" change="-1m 12s" trend/></section>

      <section className="dashboard-grid"><article className="panel revenue-panel"><div className="panel-head"><div><p className="panel-eyebrow">Revenue</p><h2>Weekly performance</h2></div><button className="ghost-btn" onClick={() => notify("Showing this week")}>This week <MoreHorizontal size={16}/></button></div><div className="chart"><div className="chart-grid"><span>$4k</span><span>$3k</span><span>$2k</span><span>$1k</span><span>$0</span></div><svg viewBox="0 0 760 260" preserveAspectRatio="none" aria-label="Revenue chart"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#c98b43" stopOpacity=".32"/><stop offset="1" stopColor="#c98b43" stopOpacity="0"/></linearGradient></defs><path d="M0 210 C55 180 85 190 130 155 S215 165 265 118 S350 140 400 96 S480 125 525 74 S620 102 670 45 S720 58 760 24 V260 H0Z" fill="url(#fill)"/><path d="M0 210 C55 180 85 190 130 155 S215 165 265 118 S350 140 400 96 S480 125 525 74 S620 102 670 45 S720 58 760 24" fill="none" stroke="#b77938" strokeWidth="4" strokeLinecap="round"/></svg><div className="chart-days"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></article>

      <article className="panel orders-panel"><div className="panel-head"><div><p className="panel-eyebrow">Live queue</p><h2>Recent orders</h2></div><button className="ghost-btn" onClick={() => notify("Orders opened")}>View all</button></div>{[["#1048","Maya Patel","Oat Latte","$6.50","Ready"],["#1047","Noah Kim","Cappuccino + Croissant","$9.25","Preparing"],["#1046","Olivia Chen","Iced Mocha","$7.00","Ready"],["#1045","Liam Smith","Americano","$4.75","Completed"]].map(([id,name,item,price,status]) => <div className="order-row" key={id}><span className="order-id">{id}</span><div className="order-person"><strong>{name}</strong><small>{item}</small></div><strong>{price}</strong><span className={`order-status ${status.toLowerCase()}`}>{status}</span></div>)}</article></section>

      <section className="bottom-grid"><article className="panel quick-panel"><div className="panel-head"><div><p className="panel-eyebrow">Quick actions</p><h2>Run the shop</h2></div></div><div className="quick-actions">{[[Coffee,"Add menu item"],[ShoppingBag,"Create order"],[Users,"Invite staff"],[Settings,"Shop settings"]].map(([Icon,label]) => <button key={label} onClick={() => notify(`${label} opened`)}><span><Icon size={18}/></span>{label}</button>)}</div></article><article className="panel insight-panel"><div className="insight-orb">✦</div><p className="panel-eyebrow">Cappuccino insight</p><h2>Your morning rush is <em>strong.</em></h2><p>Latte orders are up 24% this week. Consider featuring the Honey Cortado beside the pastry counter.</p><button className="dark-action" onClick={() => notify("Menu spotlight created")}>Create spotlight</button></article></section>
    </main>
    {toast && <div className="admin-toast"><span>☕</span><div><strong>Cappuccino</strong><p>{toast}</p></div><button onClick={() => setToast("")}><X size={15}/></button></div>}
  </div>;
}
