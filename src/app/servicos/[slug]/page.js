import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import JsonLd from "@/components/JsonLd";
import {
  getServiceBySlug,
  servicesList,
  COMPANY_INFO,
} from "@/data/servicesData";

// Geração estática das 15 rotas no momento de build
export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

// Metadados dinâmicos com Title (55 chars) e Description (132 chars)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Serviço Não Encontrado | Agência Naut",
      description: "O serviço procurado não foi localizado. Conheça as soluções de marketing digital, SEO e criação de sites da Agência Naut.",
    };
  }

  const canonicalUrl = `${COMPANY_INFO.domain}/servicos/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    keywords: `${service.keyword}, agência naut, ${service.pillarName}, marketing digital sp, criação de sites, seo`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: `${COMPANY_INFO.domain}/images/logo-full-color-transparent.png`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: `${COMPANY_INFO.domain}/` },
    { name: "Serviços", url: `${COMPANY_INFO.domain}/servicos` },
    {
      name: service.pillarName,
      url: `${COMPANY_INFO.domain}/servicos#${service.pillarId}`,
    },
    {
      name: service.badge,
      url: `${COMPANY_INFO.domain}/servicos/${service.slug}`,
    },
  ];

  return (
    <>
      <JsonLd service={service} breadcrumbs={breadcrumbs} />
      <Header />
      <main>
        <ServicePageTemplate service={service} />
      </main>
      <Footer />
    </>
  );
}
