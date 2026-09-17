import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
export const metadata: Metadata = {
  title: "Custom Software Development Company | Project Buddy",
  description: "Project Buddy builds custom software engineered around how your business actually operates. Enterprise applications, dashboards, workflow tools and cloud systems — 100% bespoke, zero vendor lock-in.",
  keywords: ["Custom Software Development", "Bespoke Software Company", "Enterprise Software Development", "Custom Web Application Development", "Business Software Solutions"],
  alternates: { canonical: "https://projectbuddy.co.in/custom-software-development" },
  openGraph: { title: "Custom Software Development | Project Buddy", description: "Software built around your business workflows. Enterprise applications, dashboards, automation tools and cloud systems.", url: "https://projectbuddy.co.in/custom-software-development", siteName: "Project Buddy", type: "website", images: [{ url: "/logo.jpg", alt: "Project Buddy" }] },
  twitter: { card: "summary_large_image", title: "Custom Software Development | Project Buddy", description: "Bespoke software engineered around your operational reality." },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <><ServiceJsonLd name="Custom Software Development" description={metadata.description as string} path="/custom-software-development" serviceType={["Custom Software Development", "Enterprise Application Development", "Business Software Development"]} />{children}</>;
}
