import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Implementation & Integration | Project Buddy",
  description:
    "Project Buddy helps businesses implement and integrate technology into their actual operations. From software deployment to AI integration, workflow engineering and legacy system modernization.",
  keywords: [
    "Technology Implementation",
    "Business System Integration",
    "Software Implementation Company",
    "AI Integration Services",
    "Workflow Engineering",
    "Legacy System Modernization",
    "System Integration Consulting",
    "Digital Transformation Implementation",
  ],
  alternates: {
    canonical: "https://projectbuddy.co.in/implementation",
  },
  openGraph: {
    title: "Technology Implementation & Integration | Project Buddy",
    description:
      "Technology only creates value when it works inside your business. Project Buddy designs, implements and integrates systems around the way your teams actually operate.",
    url: "https://projectbuddy.co.in/implementation",
    siteName: "Project Buddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Implementation & Integration | Project Buddy",
    description:
      "From software to real business impact. Project Buddy helps businesses implement, integrate and improve their technology systems.",
  },
};

export default function ImplementationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
