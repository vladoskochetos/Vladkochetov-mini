"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { cases } from "@/data/cases";

export function Cases() {
  const [caseItem] = cases;
  return <section id="cases" className="cases section shell"><Reveal className="eyebrow">03 / Кейсы</Reveal><Reveal delay={.08}><h2>Не просто объекты.<br/><em>Реальные задачи.</em></h2></Reveal><motion.article className="case-feature" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: .65 }}><span className="case-number">{caseItem.number}</span><div className="case-body"><p className="eyebrow">{caseItem.category}</p><h3>{caseItem.title}</h3><p className="case-result">{caseItem.result}</p><p className="case-description">{caseItem.description}</p></div></motion.article></section>;
}
