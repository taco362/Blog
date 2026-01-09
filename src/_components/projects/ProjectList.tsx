import type { Project } from "@/_datas/projects.data";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <ul className="flex gap-10">
      {projects.map((p) => (
        <li key={p.id} className="flex-1 basis-0">
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}