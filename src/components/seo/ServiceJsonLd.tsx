interface ServiceJsonLdProps {
  name: string;
  description: string;
  path: string;
  serviceType: string[];
}

export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: ServiceJsonLdProps) {
  const url = `https://projectbuddy.co.in${path}`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Project Buddy",
      url: "https://projectbuddy.co.in",
    },
    areaServed: "Worldwide",
    url,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://projectbuddy.co.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://projectbuddy.co.in/services" },
      { "@type": "ListItem", position: 3, name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}