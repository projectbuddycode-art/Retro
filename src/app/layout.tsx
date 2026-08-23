import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Buddy — Enterprise Software, AI Automation & Digital Transformation",
  description:
    "Project Buddy turns complex business ideas into high-scale software systems, custom AI automation pipelines, digital platforms, and enterprise growth infrastructure.",
  keywords: [
    "Project Buddy",
    "Software Engineering",
    "AI Automation Company",
    "Digital Transformation",
    "Enterprise Custom Software",
    "Business Process Automation",
    "Next.js Enterprise Apps",
    "AI Workflow Pipeline",
  ],
  authors: [{ name: "Project Buddy", url: "https://projectbuddy.co.in" }],
  creator: "Project Buddy",
  publisher: "Project Buddy Technology",
  metadataBase: new URL("https://projectbuddy.co.in"),
  openGraph: {
    title: "Project Buddy — Software Engineering & AI Automation Company",
    description:
      "We turn complex ideas into systems that scale. Custom software, AI automation pipelines, and enterprise digital platforms.",
    url: "https://projectbuddy.co.in",
    siteName: "Project Buddy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Buddy — Software Engineering & AI Automation",
    description:
      "From intelligent software and AI automation to digital platforms and growth systems. We design, build and scale what comes next.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Project Buddy",
    url: "https://projectbuddy.co.in",
    logo: "https://projectbuddy.co.in/logo.png",
    email: "info@projectbuddy.co.in",
    description: "Enterprise Software Engineering, AI Automation & Digital Transformation Company",
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Project Buddy Technology",
    email: "info@projectbuddy.co.in",
    url: "https://projectbuddy.co.in",
    priceRange: "₹2,00,000 - ₹25,00,000",
    serviceType: [
      "Software Engineering",
      "AI Workflow Automation",
      "Digital Platform Development",
      "Digital Transformation",
    ],
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body className="antialiased bg-[#FAFAFC] text-slate-900 font-sans selection:bg-[#0052FF]/15 selection:text-[#0052FF]">
        {children}
      </body>
    </html>
  );
}
