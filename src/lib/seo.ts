import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://awesome-gh-repos.vercel.app";

export const defaultMetadata: Metadata = {
  title: {
    default: "Awesome GitHub Repositories | Curated Developer Directory",
    template: "%s | Awesome GitHub Repositories",
  },
  description:
    "Explore a hand-picked directory of high-quality GitHub repositories. Filter by tech stack, category, and stars to find your next favorite open-source tool.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Awesome GitHub Repositories",
    description:
      "The ultimate directory for curated open-source excellence. Find high-quality repositories across every major technology stack.",
    siteName: "Awesome GitHub Repositories",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Awesome GitHub Repositories Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AvinashSingh_20",
    creator: "@AvinashSingh_20",
    title: "Awesome GitHub Repositories",
    description:
      "The ultimate directory for curated open-source excellence.",
    images: [`${siteUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

/**
 * Builds dynamic metadata for individual pages
 */
export function buildPageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  const url = path ? `${siteUrl}${path}` : siteUrl;
  
  return {
    ...defaultMetadata,
    title,
    description: description ?? defaultMetadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | Awesome GitHub Repositories`,
      description: description ?? defaultMetadata.openGraph?.description,
      url,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | Awesome GitHub Repositories`,
      description: description ?? defaultMetadata.twitter?.description,
    },
  };
}

/**
 * Generates JSON-LD Structured Data for Search Engines
 * Call this inside your page's script tag
 */
export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Curated GitHub Repositories",
    "description": "A collection of high-quality open-source software repositories.",
    "url": siteUrl,
    "numberOfItems": "100+", // You can pass a real count here if preferred
    "itemListOrder": "https://schema.org/ItemListOrderDescending",
  };
}