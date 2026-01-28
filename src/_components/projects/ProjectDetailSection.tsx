import Image from "next/image";
import "@/_datas/projects.data"

interface ProjectDetailProps {
  project: any; 
}

export default function ProjectDetailSection({ project }: ProjectDetailProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-[140px] pb-[140px] px-[24px]">
      <div className="max-w-[1200px] mx-auto flex flex-col w-full">

        {/*1.제목(링크)*/}
        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-5xl font-light mb-10">
        {project.title} <span className="text-2xl opacity-30">🔗</span>
        </a>

        {/* 2. 본문 */}
        <div className="mt-6 flex flex-col md:flex-row items-start gap-10 mb-32">
            {/* 1) 왼쪽 */}
            <div className="w-full md:w-1/2 md:max-w-[560px] flex flex-col gap-6">
                <p className="text-lg font-light">{project.description}</p>

                <div className="mt-6 flex flex-col gap-3 text-lg font-light">
                    <p><span className="font-semibold">Job Role:</span> {project.jobRole}</p>
                    <p><span className="font-semibold">Client:</span> {project.client}</p>
                    <p><span className="font-semibold">Year:</span> {project.year}</p>
                    <p>
                        <span className="font-semibold">Website: </span>
                        <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-white-500 decoration-2 underline-offset-4"
                            >
                            See Live
                        </a>
                    </p>
                </div>
            </div>

            {/* 2) 오른쪽 */}
            <div className="ml-auto w-[520px] max-w-full flex flex-wrap justify-end items-start gap-3">
                {project.tech.map((item: string, i: number) => (
                    <span
                        key={i}
                        className="inline-flex h-fit shrink-0 items-center justify-center px-6 py-2 border border-white/60 rounded-2xl whitespace-nowrap !font-thin !text-xs"
                        >
                        {item}
                    </span>
                ))}
            </div>
        </div>

            
        {/* 3. 이미지 */}
        <div className="w-full bg-white/10 rounded-2xl overflow-hidden">
            <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                width={1200}
                height={675}
                className="w-full h-auto object-contain"
                priority
            />
        </div>




        
      </div>
    </div>   
           
  );
}