import Image from "next/image";
import image1 from '../../public/new building.webp'
import image2 from '../../public/Home addition.webp';
import image3 from '../../public/renovation.webp';

export default function Introduction() {
  return (
    <section className="py-20 px-10 md:px-20 text-center">
      <div className="flex justify-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wider">
            Services We Provide
          </h2>
          <p className="text-lg md:text-xl tracking-widest">
            We excel in custom home building, general contracting, renovations and remodels, home additions, and outdoor living spaces. Our expertise ensures that every project is executed with precision and attention to detail, delivering exceptional results that exceed client expectations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div>
              <Image
                alt="New Custom Build"
                src={image1}
                width={200}
                height={200}
                className="object-cover border border-gray-200 rounded-full overflow-hidden mb-4 mx-auto"
              />
              <h1 className="text-xl font-semibold">New Custom Build</h1>
            </div>
            <div>
              <Image
                alt="Home Addition(ADU)"
                src={image2}
                width={200}
                height={200}
                className="object-cover border border-gray-200 rounded-full overflow-hidden mb-4 mx-auto"
              />
              <h1 className="text-xl font-semibold">Home Addition(ADU)</h1>
            </div>
            <div>
              <Image
                alt="Renovation"
                src={image3}
                width={200}
                height={200}
                className="object-cover border border-gray-200 rounded-full overflow-hidden mb-4 mx-auto"
              />
              <h1 className="text-xl font-semibold">Renovation</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
