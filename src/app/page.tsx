'use client';
import ContactForm from '../components/ContactForm';
import image1 from '../../public/image1.webp';
import image2 from '../../public/image2.webp';
import image3 from '../../public/image3.webp';
import image4 from '../../public/image4.webp';
import { useEffect, useState } from 'react';
import ProjectPreview from '@/components/ProjectPreview';
import Introduction from '@/components/Introduction';

const images = [image1, image2, image3, image4];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Project Background Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-60" style={{ zIndex: 1 }} />
        <div className='absolute inset-0 flex items-center justify-center text-content fade-in' style={{ zIndex: 2 }}>
          <div className='text-white text-center max-w-2xl mx-auto'>
            <h1 className='text-4xl md:text-5xl'>
              J&S Construction Inc.
            </h1>
            <p className='mt-10 text-xl md:text-2xl font-semibold tracking-widest'>
              General Contractor in Orange County, California. At J&S Construction, we specialize in delivering top-quality construction services. Our team of experts is dedicated to excellence and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black to-transparent text-white text-center" style={{ zIndex: 2 }}></div>
      </section>

      <div>
        <ProjectPreview />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <ContactForm />
      </div>

    </>
  );
}
