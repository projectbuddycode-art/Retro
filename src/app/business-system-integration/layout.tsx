import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Business System Integration Services | Project Buddy",
  description: "Connect your software, databases, APIs and operational tools into a unified system. Project Buddy eliminates data silos and builds integrated business environments for growing companies.",
  keywords: ["Business System Integration", "API Integration", "Software Integration Company", "CRM Integration", "ERP Integration", "Data Integration Services"],
  alternates: { canonical: "https://projectbuddy.co.in/business-system-integration" },
  openGraph: { title: "Business System Integration | Project Buddy", description: "Connect your systems, eliminate silos, build a unified operational environment.", url: "https://projectbuddy.co.in/business-system-integration", siteName: "Project Buddy", type: "website" },
  twitter: { card: "summary_large_image", title: "Business System Integration | Project Buddy", description: "Connect your software systems and eliminate operational silos." },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
