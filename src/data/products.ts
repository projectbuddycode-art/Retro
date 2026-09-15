// Product Ecosystem Data — Project Buddy
// Add new products here. Set status to 'active' to display publicly.

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  productNumber: string;
  name: string;
  tagline: string;
  description: string;
  status: "active" | "coming-soon";
  videoAsset?: string;
  imageAsset?: string;
  features: ProductFeature[];
  cta: {
    label: string;
    href: string;
  };
  earlyAccess?: boolean;
}

export const atlasProduct: Product = {
  id: "atlas",
  slug: "atlas",
  productNumber: "01",
  name: "Atlas",
  tagline: "AI-Powered Financial Operating System",
  description:
    "Atlas is being designed as an intelligent operating layer for financial workflows — helping businesses bring greater clarity to operations, identify opportunities for improvement and make better-informed decisions.",
  status: "active",
  videoAsset: "/videos/atlas.mp4",
  features: [
    {
      title: "Financial Intelligence",
      description:
        "Understand operational and financial activity through a unified intelligent system.",
    },
    {
      title: "Workflow Optimization",
      description:
        "Identify repetitive processes and opportunities to improve efficiency.",
    },
    {
      title: "Business Visibility",
      description:
        "Bring important operational information into a clearer decision-making environment.",
    },
    {
      title: "Intelligent Insights",
      description:
        "Surface patterns, trends and areas that may require attention.",
    },
    {
      title: "Built for Real Businesses",
      description:
        "Designed with practical business workflows in mind rather than generic AI demonstrations.",
    },
  ],
  cta: {
    label: "Request Early Access →",
    href: "/products/atlas",
  },
  earlyAccess: true,
};

export const proximaProduct: Product = {
  id: "proxima",
  slug: "proxima",
  productNumber: "02",
  name: "Proxima AI",
  tagline: "AI-Powered Business Intelligence for Smarter Outreach & Bigger Wins.",
  description:
    "Proxima AI helps identify relevant business opportunities, analyze companies in depth and turn research into more informed outreach and sales conversations.",
  status: "active",
  videoAsset: "/videos/proxima-ai.mp4",
  imageAsset: "/images/proxima-dashboard.jpg",
  features: [
    {
      title: "Company Intelligence",
      description:
        "Research and organize relevant information about businesses to create a clearer picture before outreach — company profiling, business context, growth signals and opportunity indicators.",
    },
    {
      title: "Website & Technology Analysis",
      description:
        "Analyze publicly accessible websites to identify structure, performance signals, SEO fundamentals and observable technology stack — with verifiable evidence, not assumptions.",
    },
    {
      title: "Security Assessment",
      description:
        "Surface high-level, non-intrusive security observations from publicly available information. Every finding includes source, evidence and confidence level.",
    },
    {
      title: "AI Opportunity Engine",
      description:
        "Identify where businesses may benefit from AI-assisted workflows, automation, software modernization or system integration — tied to observed business context.",
    },
    {
      title: "Opportunity Scoring",
      description:
        "Transparent prioritization with explainable reasoning — showing why an opportunity scores highly and which signals contributed to that assessment.",
    },
    {
      title: "Sales Playbooks",
      description:
        "Intelligent outreach preparation: discovery questions, conversation starters, potential challenges and suggested Project Buddy solutions — all traceable to verified information.",
    },
  ],
  cta: {
    label: "Request Access to Proxima →",
    href: "/products/proxima-ai",
  },
  earlyAccess: true,
};

export const products: Product[] = [atlasProduct, proximaProduct];

export const activeProducts = products.filter((p) => p.status === "active");
