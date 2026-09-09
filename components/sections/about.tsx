import { Reveal } from "@/components/ui/reveal";

export function About() {
  return <section id="about" className="about shell section"><Reveal className="eyebrow">01 / Обо мне</Reveal><Reveal delay={.08}><h2>Сначала — ваша ситуация.<br/><em>Потом — квартиры.</em></h2></Reveal><div className="about-copy"><Reveal delay={.14}><p>Мне важно понять, как вы собираетесь жить, что для вас критично и какие решения будут удобны не только сегодня. После этого сравниваю объекты, условия покупки и риски.</p></Reveal><Reveal delay={.2}><ul className="word-list"><li>Санкт-Петербург</li><li>Покупка</li><li>Продажа</li><li>Новостройки</li><li>Вторичный рынок</li></ul></Reveal></div></section>;
}
