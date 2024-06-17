import Image from "next/image";
import image1 from '../../public/image1.webp';

export default function Introduction() {
  return (
    <section className="py-20 px-10 md:px-20  text-center">
      <div className="flex justify-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            Services We Can Provide
          </h2>
          <p className="text-lg md:text-xl tracking-widest">
            We excel in custom home building, general contracting, renovations and remodels, home additions, and outdoor living spaces. Our expertise ensures that every project is executed with precision and attention to detail, delivering exceptional results that exceed client expectations.
          </p>
          <div className="flex items-center mt-10 justify-between">
            <div >
              <Image
                alt="image1"
                src={image1.src}
                width={200}
                height={200}
                className="object-cover border border-gray-200 rounded-full overflow-hidden mb-4"
              />
              <h1>Renovation</h1>
            </div>
            <div >
              <Image
                alt="image1"
                src={image1.src}
                width={200}
                height={200}
                className="object-cover border border-gray-200 rounded-full overflow-hidden mb-4"
              />
            </div>
            <div >
              <Image
                alt="image1"
                src={image1.src}
                width={200}
                height={200}
                className="object-cover border border-gray-200 rounded-full overflow-hidden mb-4"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
