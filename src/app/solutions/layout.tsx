import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Solutions & Digital Systems | Project Buddy",
  description:
    "Explore Project Buddy's custom software engineering, AI automation, digital products and data infrastructure capabilities for complex business operations.",
  alternates: {
    canonical: "https://projectbuddy.co.in/solutions",
  },
  openGraph: {
    title: "Enterprise Software Solutions & Digital Systems | Project Buddy",
    description:
      "Custom software, AI automation, digital products and data infrastructure designed around real business operations.",
    url: "https://projectbuddy.co.in/solutions",
    siteName: "Project Buddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Solutions | Project Buddy",
    description:
      "Explore the capabilities Project Buddy uses to build connected business systems.",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}