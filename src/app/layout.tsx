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
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Buddy — Custom Software, AI Automation & Technology Partner",
  description:
    "Project Buddy is a software and technology company specialising in custom software development, AI automation, business system integration, technology implementation and intelligent software products.",
  keywords: [
    "Project Buddy",
    "Custom Software Development",
    "AI Automation Company",
    "Digital Transformation",
    "Enterprise Custom Software",
    "Business Process Automation",
    "Software Implementation",
    "System Integration",
    "AI Workflow Automation",
    "Technology Partner",
    "Atlas Financial Software",
  ],
  authors: [{ name: "Project Buddy", url: "https://projectbuddy.co.in" }],
  creator: "Project Buddy",
  publisher: "Project Buddy Technology",
  metadataBase: new URL("https://projectbuddy.co.in"),
  alternates: {
    canonical: "https://projectbuddy.co.in",
  },
  openGraph: {
    title: "Project Buddy — Custom Software, AI Automation & Technology Partner",
    description:
      "Custom software development, AI automation, system integration, technology implementation and intelligent software products. Serving businesses globally.",
    url: "https://projectbuddy.co.in",
    siteName: "Project Buddy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Buddy — Software Engineering & AI Automation",
    description:
      "Custom software, AI automation, system integration and intelligent products. Project Buddy is a software and technology company serving businesses globally.",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
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
    logo: "https://projectbuddy.co.in/logo.jpg",
    email: "info@projectbuddy.co.in",
    description:
      "Project Buddy is a software and technology company focused on custom software development, business systems, AI-enabled automation, application development, system integration and technology implementation.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    sameAs: [],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Project Buddy",
    url: "https://projectbuddy.co.in",
    description:
      "Custom software development, AI automation, business system integration, technology implementation and software products.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://projectbuddy.co.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Project Buddy Technology",
    email: "info@projectbuddy.co.in",
    url: "https://projectbuddy.co.in",
    areaServed: "Worldwide",
    serviceType: [
      "Custom Software Development",
      "AI Workflow Automation",
      "Business System Integration",
      "Technology Implementation",
      "Mobile App Development",
      "Web Development",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
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
