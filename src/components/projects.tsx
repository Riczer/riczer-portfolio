import { PROJECTS } from "@/constants/projects";
import { Project } from "./project";

export function Projects() {
  return (
    <section id="projects" className="bg-secondary py-12">
      <div className="container space-y-12">
        <h1 className="text-4xl md:text-7xl text-center font-bold">
          Featured Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
