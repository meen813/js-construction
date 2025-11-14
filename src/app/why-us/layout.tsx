import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us | Hwang J&S Construction",
  description: "Discover why clients trust Hwang J&S Construction. 100% project completion rate, zero safety incidents, reliable after-service, and expert commercial construction services in Los Angeles and Orange County.",
  keywords: ["construction", "commercial construction", "reliable contractor", "construction safety", "ADA compliance", "project completion", "construction warranty", "Los Angeles construction", "Orange County construction"],
  openGraph: {
    title: "Why Choose Us | Hwang J&S Construction",
    description: "Discover why clients trust Hwang J&S Construction. 100% project completion rate, zero safety incidents, and reliable after-service.",
    type: 'website',
  },
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

