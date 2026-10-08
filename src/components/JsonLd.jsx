import { COMPANY_INFO } from "@/data/servicesData";

export default function JsonLd({ service, breadcrumbs = [] }) {
  const organizationId = `${COMPANY_INFO.domain}/#organization`;

  // Schema LocalBusiness / ProfessionalService
  const localBusinessSchema = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": organizationId,
    name: COMPANY_INFO.name,
    alternateName: COMPANY_INFO.shortName,
    url: COMPANY_INFO.domain,
    logo: `${COMPANY_INFO.domain}/Logotipo%20Branco_vetor.svg`,
    image: `${COMPANY_INFO.domain}/images/logo-full-color-transparent.png`,
    telephone: COMPANY_INFO.telephone,
    email: COMPANY_INFO.email,
    priceRange: COMPANY_INFO.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.region,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_INFO.geo.latitude,
      longitude: COMPANY_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "São Paulo",
      },
      {
        "@type": "Country",
        name: "Brasil",
      },
    ],
    sameAs: COMPANY_INFO.sameAs,
  };

  const graph = [localBusinessSchema];

  // Se houver trilha de breadcrumbs
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
    graph.push(breadcrumbSchema);
  }

  // Se houver serviço específico
  if (service) {
    const serviceUrl = `${COMPANY_INFO.domain}/servicos/${service.slug}`;

    const serviceSchema = {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.h1 || service.title,
      description: service.description,
      url: serviceUrl,
      provider: {
        "@id": organizationId,
      },
      serviceType: service.pillarName,
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Entregáveis do Serviço",
        itemListElement: service.scope.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.desc,
          },
        })),
      },
    };
    graph.push(serviceSchema);

    // FAQPage Schema
    if (service.faqs && service.faqs.length > 0) {
      const faqSchema = {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      };
      graph.push(faqSchema);
    }
  }

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
