"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
export default function ThemeToggle() { const { theme, setTheme } = useTheme(); const [ready,setReady]=useState(false); useEffect(()=>setReady(true),[]); if(!ready) return <Button variant="outline" size="icon"><Sun size={18}/></Button>; const dark=theme==='dark'; return <Button variant="outline" size="icon" onClick={()=>setTheme(dark?'light':'dark')} aria-label="Toggle theme">{dark?<Sun size={18}/>:<Moon size={18}/>}</Button>; }
