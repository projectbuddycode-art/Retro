import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
export const metadata: Metadata = {
  title: "Web Development Company | Project Buddy",
  description: "Project Buddy builds high-quality business websites, digital platforms and e-commerce systems — performance-optimized, mobile-first and built for long-term reliability.",
  keywords: ["Web Development Company", "Business Website Development", "Digital Platform Development", "E-commerce Development", "Web Application Development"],
  alternates: { canonical: "https://projectbuddy.co.in/web-development" },
  openGraph: { title: "Web Development | Project Buddy", description: "Business websites, digital platforms and e-commerce systems built for performance.", url: "https://projectbuddy.co.in/web-development", siteName: "Project Buddy", type: "website", images: [{ url: "/logo.jpg", alt: "Project Buddy" }] },
  twitter: { card: "summary_large_image", title: "Web Development | Project Buddy", description: "Premium web development for businesses that want a digital presence that works." },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <><ServiceJsonLd name="Web Development" description={metadata.description as string} path="/web-development" serviceType={["Business Website Development", "Web Application Development", "Digital Platform Development", "E-commerce Development"]} />{children}</>;
}
