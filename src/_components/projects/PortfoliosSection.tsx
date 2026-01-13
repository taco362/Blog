// _components/projects/portfoliosSection.tsx
import { projects } from "@/_datas/projects.data";
import ProjectList from "./ProjectList";

export default function portfoliosSection() {  
  return (
    <div className="w-full mt-10">
        {/* 10개 모두 전달 */}
        <ProjectList projects={projects} />
    </div>
  );
}