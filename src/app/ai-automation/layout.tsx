import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
export const metadata: Metadata = {
  title: "AI Automation & Workflow Automation Services | Project Buddy",
  description: "Project Buddy designs and builds practical AI automation systems — LLM integration, document processing, workflow automation and intelligent business processes that create real operational value.",
  keywords: ["AI Automation", "Workflow Automation", "Business Process Automation", "LLM Integration", "AI Integration Services", "Intelligent Automation"],
  alternates: { canonical: "https://projectbuddy.co.in/ai-automation" },
  openGraph: { title: "AI Automation Services | Project Buddy", description: "Practical AI and workflow automation for real business operations. Custom LLM integration, document AI and intelligent automation.", url: "https://projectbuddy.co.in/ai-automation", siteName: "Project Buddy", type: "website" },
  twitter: { card: "summary_large_image", title: "AI Automation Services | Project Buddy", description: "Practical AI automation designed around your actual business workflows." },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <><ServiceJsonLd name="AI & Automation" description={metadata.description as string} path="/ai-automation" serviceType={["AI Automation", "Workflow Automation", "Document Processing", "LLM Integration"]} />{children}</>;
}
