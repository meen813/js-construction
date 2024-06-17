
import Image from "next/image";
import image1 from '../../public/image1.webp';
import image2 from '../../public/image2.webp';
import image3 from '../../public/image3.webp';
import image4 from '../../public/image4.webp';
import image5 from '../../public/image5.webp';
import image6 from '../../public/image6.webp';
import ScrollableBar from "./ScrollableBar";
const images = [image1, image2, image3, image4, image5, image6];


export default function ProjectPreview() {
  return (
    <section className="py-20 px-10 md:px-20 text-center bg-gray-100">
      <div className="flex flex-col">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Featured Projects
          </h2>
        </div>
        <div >
          <ScrollableBar>
            {images.map((image, index) => (
                <Image
                  key={index}
                  alt="images"
                  src={image}
                  width={300}
                  height={200}
                />
            ))}
          </ScrollableBar>
        </div>

      </div>


      <div></div>
    </section>
  );
}
