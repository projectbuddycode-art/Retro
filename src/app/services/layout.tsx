import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Services — Custom Software, AI Automation & System Integration | Project Buddy",
  description:
    "Project Buddy offers custom software development, AI automation, business system integration, web development, app development and technology implementation. Serving enterprise clients globally.",
  keywords: [
    "Custom Software Development Company",
    "AI Automation Services",
    "Business System Integration",
    "Web Development Agency",
    "App Development Company",
    "Enterprise Software Development",
    "Digital Transformation Services",
  ],
  alternates: {
    canonical: "https://projectbuddy.co.in/services",
  },
  openGraph: {
    title: "Services — Custom Software, AI Automation & Integration | Project Buddy",
    description:
      "Custom software, AI automation, system integration and technology implementation. Project Buddy serves businesses globally.",
    url: "https://projectbuddy.co.in/services",
    siteName: "Project Buddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Project Buddy",
    description: "Custom software development, AI automation, system integration and more.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <><ServiceJsonLd name="Project Buddy Technology Services" description={metadata.description as string} path="/services" serviceType={["Custom Software Development", "AI Automation", "Business System Integration", "Web Development", "App Development", "Technology Implementation"]} />{children}</>;
}
