import type { MetadataRoute } from "next";
import { projects, research, site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: new Date() },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}${project.links.caseStudy}`,
    lastModified: new Date(),
  }));

  const researchRoutes: MetadataRoute.Sitemap = research.map((item) => ({
    url: `${site.url}${item.links.caseStudy}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...researchRoutes];
}
