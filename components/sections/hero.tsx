"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { siteConfig } from "@/config/site";
import { easeOutExpo } from "@/lib/motion";

const lines = ["Помогаю покупать", "и продавать квартиры", "не по шаблону,", "а под вашу задачу."];

export function Hero() {
  const reduced = useReducedMotion();
  return <section id="top" className="hero shell">
    <div className="hero-topline"><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .12, duration: .6 }}>Риелтор / {siteConfig.city}</motion.p><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .18, duration: .6 }} className="coordinate">59°56′ N / 30°19′ E</motion.p></div>
    <div className="hero-stage"><h1>{lines.map((line, index) => <span className="hero-line" key={line}><motion.span initial={reduced ? false : { y: "115%" }} animate={{ y: 0 }} transition={{ duration: .95, delay: .16 + index * .105, ease: easeOutExpo }} className={index === 3 ? "serif accent" : ""}>{line}</motion.span></span>)}</h1>
    <motion.div className="hero-portrait" initial={reduced ? false : { clipPath: "inset(100% 0 0 0)", opacity: 0 }} animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }} transition={{ duration: 1.15, delay: .36, ease: easeOutExpo }}><Image src={`${siteConfig.basePath}/images/portrait-placeholder.svg`} alt="Место для портретной фотографии Влада" fill priority sizes="(max-width: 760px) 34vw, 360px"/><span>портрет<br/>появится здесь</span></motion.div></div>
    <motion.div className="hero-bottom" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .82, ease: easeOutExpo }}><p>Новостройки, вторичный рынок и нестандартные сценарии покупки. Сначала разбираюсь в ситуации — потом открываю рынок.</p><div className="hero-links"><MagneticLink href="#contact" className="text-link">Обсудить задачу <ArrowUpRight size={16}/></MagneticLink><a href={siteConfig.social.telegram} target="_blank" rel="noreferrer" className="quiet-link">Telegram <ArrowUpRight size={15}/></a></div></motion.div>
  </section>;
}
