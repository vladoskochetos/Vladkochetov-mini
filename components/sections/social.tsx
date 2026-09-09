import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const social = [["Telegram", siteConfig.social.telegram], ["Instagram", siteConfig.social.instagram]] as const;
export function Social() {
  return <section className="social section shell"><Reveal className="eyebrow">04 / Контент</Reveal><Reveal delay={.08}><h2>Показываю рынок<br/><em>таким, каким вижу его сам.</em></h2></Reveal><Reveal delay={.14}><p className="social-description">В Telegram — квартиры, реальные сделки, схемы покупки и наблюдения за рынком.</p></Reveal><div className="social-links">{social.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><span>{label}</span><ArrowUpRight size={23}/></a>)}</div></section>;
}
