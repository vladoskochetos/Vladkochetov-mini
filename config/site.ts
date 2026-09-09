const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vlad-realty-spb.jesuslookslikeme.chatgpt.site").replace(/\/$/, "");
const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";

export const siteConfig = {
  name: "Влад",
  fullName: "Влад Кочетов",
  profession: "Риелтор",
  city: "Санкт-Петербург",
  url: siteUrl,
  basePath: siteBasePath,
  phone: "+7 995 695-66-63",
  phoneHref: "tel:+79956956663",
  social: {
    telegram: "https://t.me/vladkochetov_realtor",
    instagram: "https://www.instagram.com/vlad.kochetov_broker",
  },
} as const;
