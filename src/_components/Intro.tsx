

import Image from "next/image";
import { aboutData } from "@/_datas/about_data";

export default function AboutSection() {
  return (
    <section className="bg-black text-white pt-32 px-6">
      <div className="mx-auto" style={{ maxWidth: '1232px' }}>
        
        <div className="text-left md:text-center mb-10 pop-down" style={{ animationDelay: "250ms" }}>
          <h1 className="text-white text-5xl font-thin mb-10 leading-[52.8px] capitalize">
            {aboutData.title}
          </h1>
          <p className="text-white text-3xl font-thin tracking-wider">
            {aboutData.subTitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-32 gap-y-10 md:gap-x-10">
          <div className="flex flex-col w-full max-w-[625px] pop-down" style={{ animationDelay: "100ms" }}>
            <h2 className="text-white text-2xl md:text-3xl font-thin leading-snug" style={{ marginBottom: '24px' }}>
              {aboutData.descriptionTitle}
            </h2>
            <p className="text-white text-lg font-thin leading-relaxed">
              {aboutData.description}
            </p>
          </div>

          <div className="shrink-0">
            <div className="relative rounded-full overflow-hidden bg-black
              w-full max-w-[450px] aspect-square pop-down" style ={{ animationDelay: "100ms" }}>
              <Image
                src={aboutData.profileImage.src}
                alt={aboutData.profileImage.alt}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}