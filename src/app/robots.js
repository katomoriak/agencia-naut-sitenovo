import { COMPANY_INFO } from "@/data/servicesData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${COMPANY_INFO.domain}/sitemap.xml`,
  };
}
