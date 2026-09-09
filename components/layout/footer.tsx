import { siteConfig } from "@/config/site";
export function Footer(){const privacyHref = siteConfig.basePath ? `${siteConfig.basePath}/privacy.html` : "/privacy"; return <footer className="footer shell"><span>{siteConfig.fullName}</span><span>{siteConfig.city}</span><a href={privacyHref}>Политика конфиденциальности</a><span>© {new Date().getFullYear()}</span></footer>}
