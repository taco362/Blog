"use client"; // useRouter를 쓰기 위해 상단에 추가
import Image from "next/image";
import type { Project } from "@/_datas/projects.data";
import { useRouter } from "next/navigation";
import CustomBlackButton from "../CustomBlackButton";

type Props = {
  project: Project;
  buttonText?: string; 
};

export default function ProjectCard({ project, buttonText = "View Project →" }: Props) {
  const router = useRouter();

  const handleLink = () => {
    // 상세 페이지 경로로 이동
    router.push(`/portfolio/${project.title}`);
  };
  return (
    <article className="overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
      <div className="relative h-[350px] w-full ">
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          fill
          className="object-cover object-center"
          sizes="520px"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-base leading-7 text-white/60 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-6">
          <CustomBlackButton text={buttonText} onClick={handleLink}/>
        </div>
      </div>
      
    </article>
  );
}