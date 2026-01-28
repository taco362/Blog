import { projects } from "@/_datas/projects.data";
import { notFound } from "next/navigation";
import ProjectDetailSection from "@/_components/projects/ProjectDetailSection"; 

type Props = {
  params: Promise<{ title: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  
  // 데이터 찾기
  const project = projects.find((p) => p.title.toLowerCase() === decodedTitle.toLowerCase());

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-black">
      <ProjectDetailSection project={project} />
    </div>
  );
}