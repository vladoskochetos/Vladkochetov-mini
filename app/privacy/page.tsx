import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";
export const dynamic = "force-static";
export default function PrivacyPage(){const homeHref = siteConfig.basePath ? `${siteConfig.basePath}/` : "/"; return <main className="case-page shell"><a className="eyebrow back-link" href={homeHref}><ArrowLeft size={14}/> На главную</a><p className="eyebrow">Политика конфиденциальности</p><h1>Страница в подготовке.</h1><p className="case-intro">Перед публикацией сайта здесь нужно разместить актуальный текст политики обработки персональных данных.</p></main>}
