import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://to4to.dev";
    const lastModified = new Date("2026-05-26");

    return [
        {
            url: `${baseUrl}/`,
            lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
