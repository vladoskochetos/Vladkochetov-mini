import type { Metadata } from "next";
import { Noto_Serif_Display, Onest } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const dynamic = "force-static";

const sans = Onest({ subsets: ["cyrillic", "latin"], variable: "--font-sans" });
const serif = Noto_Serif_Display({ subsets: ["cyrillic", "latin"], variable: "--font-serif", weight: ["400", "500", "600"], style: "italic" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Влад — риелтор в Санкт-Петербурге",
  description: "Помогаю покупать и продавать квартиры в Санкт-Петербурге. Новостройки, вторичный рынок и сложные сценарии покупки.",
  alternates: { canonical: siteConfig.url }, robots: { index: true, follow: true },
  openGraph: { title: "Влад — риелтор в Санкт-Петербурге", description: "Недвижимость — это не поиск квартиры по фильтрам.", type: "website", locale: "ru_RU" },
  twitter: { card: "summary_large_image", title: "Влад — риелтор в Санкт-Петербурге" },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${siteConfig.url}/favicon.svg`,
    shortcut: `${siteConfig.url}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <body>{children}<Analytics /><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"RealEstateAgent",name:siteConfig.fullName,jobTitle:siteConfig.profession,address:{"@type":"PostalAddress",addressLocality:siteConfig.city,addressCountry:"RU"},telephone:siteConfig.phone,url:siteConfig.url})}} /></body>
    </html>
  );
}
