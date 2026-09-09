"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { easeOutExpo } from "@/lib/motion";

const steps = [["01", "Разбираю задачу", "Бюджет, образ жизни, сроки, район и планы на несколько лет."], ["02", "Отбираю варианты", "Отсекаю всё, что не проходит по локации, планировке, цене и ликвидности."], ["03", "Сравниваю сценарии", "Новостройка, вторичка, ипотека, рассрочка — смотрю не только на платёж, а на итог."], ["04", "Веду сделку", "Переговоры, проверки, документы и координацию процесса беру на себя."]];

export function Process() {
  return <section id="process" className="process section"><div className="shell"><Reveal className="eyebrow">02 / Как я работаю</Reveal><div className="sequence">{steps.map(([number, title, text], index) => <motion.article className="step" key={number} initial={{ opacity: .25 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .55 }} transition={{ duration: .55, ease: easeOutExpo }}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>{String(index + 1).padStart(2, "0")}</i></motion.article>)}</div></div></section>;
}
