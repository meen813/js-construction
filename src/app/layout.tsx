import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hjsconstruction.com'),
  title: {
    default: "Hwang J&S Construction - Professional Construction & Renovation Services",
    template: "%s | Hwang J&S Construction"
  },
  description: "Expert construction and renovation services in Southern California. Specializing in ADU, commercial renovations, kitchen remodeling, and more. Licensed and insured contractors.",
  keywords: ["construction", "renovation", "ADU", "commercial construction", "kitchen remodeling", "home addition", "Southern California", "general contractor", "HJS Construction", "Hwang J&S", "Hwang JS Construction"],
  authors: [{ name: "Hwang J&S Construction" }],
  creator: "Hwang J&S Construction",
  publisher: "Hwang J&S Construction",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.hjsconstruction.com',
    siteName: 'Hwang J&S Construction',
    title: 'Hwang J&S Construction - Professional Construction & Renovation Services',
    description: 'Expert construction and renovation services in Southern California. Specializing in ADU, commercial renovations, kitchen remodeling, and more.',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Hwang J&S Construction Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hwang J&S Construction - Professional Construction & Renovation Services',
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
        <Header/>
        <main className="flex-grow bg-white">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
