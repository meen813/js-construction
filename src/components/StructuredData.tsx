'use client';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema for the company
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Hwang J&S Construction",
  "alternateName": ["HJS Construction", "Hwang JS Construction"],
  "url": "https://www.hjsconstruction.com",
  "logo": "https://www.hjsconstruction.com/logo/logo.png",
  "description": "Expert construction and renovation services in Southern California. Specializing in ADU, commercial renovations, kitchen remodeling, and more.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.7879",
    "longitude": "-117.8531"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Orange County"
    },
    {
      "@type": "City", 
      "name": "Los Angeles County"
    }
  ],
  "priceRange": "$$",
  "telephone": "+1-714-555-0101",
  "email": "contact@hjsconstruction.com",
  "sameAs": []
};

// Service Schema
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Construction & Renovation Services",
  "provider": {
    "@type": "GeneralContractor",
    "name": "Hwang J&S Construction"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ADU Construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Renovation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen Remodeling"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home Addition"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ADA Compliance Upgrades"
        }
      }
    ]
  }
};

// Generate Project Schema
export function generateProjectSchema(project: {
  id: number;
  title: string;
  description: string;
  image: string;
  location?: string;
  completionDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": `https://www.hjsconstruction.com${project.image}`,
    "creator": {
      "@type": "Organization",
      "name": "Hwang J&S Construction"
    },
    "locationCreated": project.location || "California",
    "datePublished": project.completionDate,
    "url": `https://www.hjsconstruction.com/projects/${project.id}`
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.hjsconstruction.com${item.url}`
    }))
  };
}

