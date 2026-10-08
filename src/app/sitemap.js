import { servicesList, COMPANY_INFO } from "@/data/servicesData";

export default function sitemap() {
  const baseUrl = COMPANY_INFO.domain;
  const currentDate = new Date();

  // Rotas Estáticas Principais
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // 15 Rotas Dinâmicas de Serviços
  const serviceRoutes = servicesList.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
