"use client";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { easeOutExpo } from "@/lib/motion";
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) { return <motion.div className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: .7, delay, ease: easeOutExpo }}>{children}</motion.div>; }
