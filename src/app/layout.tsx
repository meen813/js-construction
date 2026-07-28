import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"] });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
} as const;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hjsconstruction.com'),
  title: {
    default: "HJS Construction - Commercial Renovation & Tenant Improvement Specialists",
    template: "%s | HJS Construction"
  },
  description: "Licensed commercial construction and renovation specialists in Southern California. Expert Tenant Improvement (TI), ADA updates, and office/restaurant remodeling in Orange County & LA.",
  keywords: [
    "commercial construction", "tenant improvement", "TI specialist", "restaurant renovation", 
    "office remodeling", "ADA upgrades", "Southern California", "Orange County", "Los Angeles", 
    "JS 건설", "황제이에스 건축", "상업공사 전문가", "오렌지카운티 건축", "LA 한인 건축", 
    "ADU construction", "kitchen renovation"
  ],
  authors: [{ name: "HJS Construction" }],
  creator: "HJS Construction",
  publisher: "HJS Construction",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hjsconstruction.com',
    siteName: 'HJS Construction',
    title: 'HJS Construction - Commercial Renovation & TI Specialists',
    description: 'Expert commercial construction and tenant improvements in Southern California. Licensed & Insured.',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'HJS Construction Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HJS Construction - Commercial Renovation & TI Specialists',
    description: 'Expert commercial construction and tenant improvements in Southern California.',
    images: ['/logo/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: {
      url: '/logo/logo.png',
      type: 'image/png',
    },
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console에서 받은 코드로 교체하세요
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "HJS Construction (Hwang J&S Construction)",
    "image": "https://www.hjsconstruction.com/logo/logo.png",
    "@id": "https://www.hjsconstruction.com",
    "url": "https://www.hjsconstruction.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16431 Fitzpatrick Ct #277",
      "addressLocality": "La Mirada",
      "addressRegion": "CA",
      "postalCode": "90638",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.8824, // La Mirada approx
      "longitude": -118.0197
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.hjsconstruction.com"
    ],
    "priceRange": "$$",
    "description": "Commercial Renovation & Tenant Improvement Specialists in Southern California. Licensed & Insured (CA License #960757).",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Orange County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Los Angeles County"
      }
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "CA CSLB License #960757"
    }
  };

  return (
    <html lang="en" className={outfit.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col ">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Skip to main content
        </a>
        <Header/>
        <main id="main-content" className="flex-grow bg-white" role="main">{children}</main>
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}

