import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proxima AI | Business Intelligence & Opportunity Research | Project Buddy",
  description:
    "Proxima AI helps identify relevant business opportunities, analyze companies in depth and turn research into more informed outreach and sales conversations. Find. Understand. Connect. Win.",
  keywords: [
    "Proxima AI",
    "Business Intelligence Software",
    "Company Research Tool",
    "Opportunity Research",
    "Sales Intelligence",
    "Website Analysis",
    "Technology Insights",
    "Business Opportunity Analysis",
    "AI Sales Tool",
    "Project Buddy Proxima",
  ],
  alternates: {
    canonical: "https://projectbuddy.co.in/products/proxima-ai",
  },
  openGraph: {
    title: "Proxima AI | Business Intelligence & Opportunity Research",
    description:
      "AI-powered business intelligence for smarter outreach and bigger wins. Find. Understand. Connect. Win.",
    url: "https://projectbuddy.co.in/products/proxima-ai",
    siteName: "Project Buddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxima AI | Business Intelligence | Project Buddy",
    description:
      "Company intelligence, opportunity research, website analysis and smarter sales preparation. Request access to Proxima AI.",
  },
};

export default function ProximaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
