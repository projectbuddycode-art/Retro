import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — AI Software Portfolio | Project Buddy",
  description:
    "Project Buddy is developing a portfolio of software products designed to help businesses operate smarter. Currently featuring Atlas — an AI-Powered Financial Operating System.",
  keywords: [
    "Project Buddy Products",
    "AI Business Software",
    "Atlas Financial Software",
    "Business Intelligence Products",
    "Software Product Portfolio",
    "AI Financial Tools",
  ],
  alternates: {
    canonical: "https://projectbuddy.co.in/products",
  },
  openGraph: {
    title: "Products — AI Software Portfolio | Project Buddy",
    description:
      "Building the systems of tomorrow. Project Buddy's product portfolio, starting with Atlas — an AI-Powered Financial Operating System.",
    url: "https://projectbuddy.co.in/products",
    siteName: "Project Buddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — AI Software Portfolio | Project Buddy",
    description:
      "Building the systems of tomorrow. Explore Project Buddy's growing product portfolio.",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
