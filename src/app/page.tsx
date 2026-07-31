import dynamic from 'next/dynamic';
import StructuredData, { organizationSchema, servicesSchema } from '@/components/StructuredData';
import Hero from '@/features/hero/Hero';

const ContactForm = dynamic(() => import('@/components/ContactForm'));
const ProjectPreview = dynamic(() => import('@/components/ProjectPreview'));
const Introduction = dynamic(() => import('@/components/Introduction'));

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={servicesSchema} />

      <Hero />

      <div className="bg-white bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]">
        <ProjectPreview />
        <Introduction />
        <ContactForm />
      </div>
    </>
  );
}
