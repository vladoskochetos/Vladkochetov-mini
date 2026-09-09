import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Cases } from "@/components/sections/cases";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Social } from "@/components/sections/social";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const dynamic = "force-static";

export default function Home() {
  return <><ScrollProgress /><CustomCursor /><Header /><main><Hero /><About /><Process /><Cases /><Social /><Contact /></main><Footer /></>;
}
