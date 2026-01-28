"use client";
import { projects } from "@/_datas/projects.data";
import ProjectList from "./ProjectList";
import { useRouter } from "next/navigation";
import CustomWhiteButton from "../CustomWhiteButton";

export default function ProjectsSection() {
  const router = useRouter();

  const handleLink = () => {
    // 상세 페이지 경로로 이동
    router.push(`/portfolio`);
  };
  const featuredProjects = projects.slice(0, 3);
  return (
    <section className="py-4 px-16">
      <h2 className="text-4xl font-thin text-white stagger" style={{ animationDelay: "50ms" }}>Key Projects</h2>

      <div className="mt-16">
        <ProjectList
          projects={featuredProjects}
          cardButtonText="View Project"
          animate
          stepDelayMs={100}
          baseDelayMs={80}
        />
      </div>

      <div className="mt-8 flex justify-center pop-down" style={{ animationDelay: "100ms" }}>
        <CustomWhiteButton text="View More Projects" onClick={handleLink}/>
      </div>
    </section>
  );
}