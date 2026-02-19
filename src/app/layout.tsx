import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const sans = Open_Sans({ subsets: ["latin"] });

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
    default: "HJS Construction - Professional Construction & Renovation Services",
    template: "%s | HJS Construction"
  },
  description: "Expert construction and renovation services in Southern California. Specializing in ADU, commercial renovations, kitchen remodeling, and more. Licensed and insured contractors.",
  keywords: ["construction", "renovation", "ADU", "commercial construction", "kitchen remodeling", "home addition", "Southern California", "general contractor", "HJS Construction", "Hwang J&S", "Hwang JS Construction"],
  authors: [{ name: "HJS Construction" }],
  creator: "HJS Construction",
  publisher: "HJS Construction",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hjsconstruction.com',
    siteName: 'HJS Construction',
    title: 'HJS Construction - Professional Construction & Renovation Services',
    description: 'Expert construction and renovation services in Southern California. Specializing in ADU, commercial renovations, kitchen remodeling, and more.',
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
    title: 'HJS Construction - Professional Construction & Renovation Services',
    description: 'Expert construction and renovation services in Southern California.',
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
  return (
    <html lang="en" className={sans.className}>
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

