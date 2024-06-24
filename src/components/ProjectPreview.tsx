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
        <ScrollableBar>
          {projects.map((project) => (
            <div key={project.id} className="p-2">
              <Image
                alt={project.title}
                src={project.image}
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </ScrollableBar>
      </div>
    </section>
  );
}
