"use client";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { easeOutExpo } from "@/lib/motion";
const links = [["Обо мне","#about"],["Кейсы","#cases"],["Подход","#process"],["Контакты","#contact"]] as const;
export function Header(){const[open,setOpen]=useState(false);return <header className="header"><div className="header-inner shell"><Link className="wordmark" href="#top">{siteConfig.name}<span>/</span> недвижимость</Link><nav className="desktop-nav" aria-label="Основная навигация">{links.map(([t,h])=><Link key={h} href={h}>{t}</Link>)}</nav><a className="header-cta" href={siteConfig.social.telegram} target="_blank" rel="noreferrer">Написать <ArrowUpRight size={14}/></a><button className="menu-button" aria-label={open?"Закрыть меню":"Открыть меню"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div><AnimatePresence>{open&&<motion.nav className="mobile-nav" initial={{clipPath:"inset(0 0 100% 0)"}} animate={{clipPath:"inset(0 0 0% 0)"}} exit={{clipPath:"inset(0 0 100% 0)"}} transition={{duration:.55,ease:easeOutExpo}} aria-label="Мобильная навигация">{links.map(([t,h],i)=><motion.div key={h} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.12+i*.06}}><Link href={h} onClick={()=>setOpen(false)}>{t}</Link></motion.div>)}</motion.nav>}</AnimatePresence></header>}
