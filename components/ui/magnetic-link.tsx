"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
export function MagneticLink({ href, children, className = "", label, target }: { href: string; children: ReactNode; className?: string; label?: string; target?: "_blank" }) { const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 17 }); const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 17 }); function move(e: React.MouseEvent<HTMLAnchorElement>) { if (!window.matchMedia("(pointer: fine)").matches) return; const b = e.currentTarget.getBoundingClientRect(); x.set((e.clientX-b.left-b.width/2)*.12); y.set((e.clientY-b.top-b.height/2)*.12); } const props={"aria-label":label,onMouseMove:move,href,className}; return <motion.div style={{x,y}} onMouseLeave={() => {x.set(0);y.set(0)}}>{target?<a {...props} target={target} rel="noreferrer">{children}</a>:<Link {...props}>{children}</Link>}</motion.div>; }
