import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas — AI-Powered Financial Operating System | Project Buddy Products",
  description:
    "Atlas is an intelligent operating layer for financial workflows, helping businesses bring greater clarity to operations and make better-informed decisions. Currently in development — join the early access list.",
  keywords: [
    "Atlas",
    "AI Financial Operating System",
    "Financial Intelligence Software",
    "AI Business Finance",
    "Project Buddy Atlas",
    "Financial Workflow Automation",
    "Business Intelligence Software",
  ],
  alternates: {
    canonical: "https://projectbuddy.co.in/products/atlas",
  },
  openGraph: {
    title: "Atlas — AI-Powered Financial Operating System | Project Buddy",
    description:
      "An intelligent operating layer for financial workflows. Helping businesses understand operations, identify improvements and make better-informed decisions.",
    url: "https://projectbuddy.co.in/products/atlas",
    siteName: "Project Buddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas — AI-Powered Financial Operating System | Project Buddy",
    description:
      "An intelligent operating layer for financial workflows. Request early access to Atlas from Project Buddy.",
  },
};

export default function AtlasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
