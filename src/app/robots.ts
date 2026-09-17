import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://projectbuddy.co.in/sitemap.xml",
    host: "https://projectbuddy.co.in",
  };
}
