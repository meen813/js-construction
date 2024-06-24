import Image from "next/image";
import ScrollableBar from "./ScrollableBar";
import { projects } from "@/projects/data";

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
            {projects.map((project) => (
                <Image
                  key={project.id}
                  alt={"images"}
                  src={project.image}
                  width={300}
                  height={200}
                />
            ))}
          </ScrollableBar>
        </div>
      </div>
    </section>
  );
}
