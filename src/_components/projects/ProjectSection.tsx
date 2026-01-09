// _components/projects/ProjectsSection.tsx
import { projects } from "@/_datas/projects.data";
import ProjectList from "./ProjectList";
import CustomWhiteButton from "../CustomWhiteButton";

export default function ProjectsSection() {
  return (
    <section className="py-4 px-16">
      <h2 className="text-4xl font-thin text-white">Key Projects</h2>

      <div className="mt-16">
        <ProjectList projects={projects} />
      </div>

      <div className="mt-8 flex justify-center">
        <CustomWhiteButton text="View More Projects"/>
      </div>
    </section>
  );
}