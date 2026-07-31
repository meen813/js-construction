import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { OG_IMAGE_PATH } from "@/config/site";

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request an estimate for commercial renovation, tenant improvement, ADA upgrades, or residential work in Orange County and Los Angeles.',
  openGraph: {
    title: 'Contact HJS Construction',
    description: 'Tell us about your project and we will get back to you.',
    images: [OG_IMAGE_PATH],
  },
};

export default function Page() {
  
  return (
    <div className="bg-white bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="pt-12"/>
      <main>
        <ContactForm/>
      </main>
    </div>
  )
}

