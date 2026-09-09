import { ArrowUpRight } from "lucide-react";
import { MagneticLink } from "@/components/ui/magnetic-link";
import { siteConfig } from "@/config/site";

export function Contact() {
  return <section id="contact" className="contact"><div className="shell"><p className="eyebrow">05 / Контакты</p><h2>Есть квартира, которую рассматриваете?<br/>Или пока только задача?</h2><p className="contact-prompt">Напишите мне.</p><MagneticLink href={siteConfig.social.telegram} target="_blank" className="contact-cta" label="Обсудить задачу в Telegram">Обсудить задачу <ArrowUpRight/></MagneticLink><div className="contact-links"><a href={siteConfig.social.telegram} target="_blank" rel="noreferrer">Telegram</a><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></div></div></section>;
}
