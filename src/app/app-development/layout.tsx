import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
export const metadata: Metadata = {
  title: "App Development Company — iOS, Android & Enterprise Mobile | Project Buddy",
  description: "Project Buddy develops native iOS and Android apps, cross-platform mobile applications and enterprise mobile tools. Production-grade quality for business-critical mobile applications.",
  keywords: ["App Development Company", "iOS App Development", "Android App Development", "Mobile App Development", "Enterprise Mobile Apps", "React Native Development"],
  alternates: { canonical: "https://projectbuddy.co.in/app-development" },
  openGraph: { title: "App Development | Project Buddy", description: "Native iOS, Android and cross-platform mobile app development. Enterprise-grade quality.", url: "https://projectbuddy.co.in/app-development", siteName: "Project Buddy", type: "website" },
  twitter: { card: "summary_large_image", title: "App Development | Project Buddy", description: "Production-grade iOS, Android and enterprise mobile app development." },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <><ServiceJsonLd name="App Development" description={metadata.description as string} path="/app-development" serviceType={["iOS App Development", "Android App Development", "Cross-Platform App Development", "Enterprise Mobile Applications"]} />{children}</>;
}
