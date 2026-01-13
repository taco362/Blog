import type { Project } from "@/_datas/projects.data";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <ul className="grid grid-cols-3 gap-x-6 gap-y-10 w-full">
      {projects.map((p) => (
         <li key={p.id}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}