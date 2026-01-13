
import Image from "next/image";
import { aboutData } from "@/_datas/about_data";

export default function AboutSection() {
  return (
    <section className="bg-black text-white pt-32 px-6 md:px-0">
      <div className="mx-auto"style={{ maxWidth: '1232px' }}>
        
        <div className="text-center mb-20 md:mb-36">
          <h1 className="text-white text-5xl font-thin mb-10 leading-[52.8px] capitalize">
            {aboutData.title}
          </h1>
          <p className="text-white text-3xl font-thin tracking-wider">
            {aboutData.subTitle}
          </p>
        </div>

        <div className="flex flex-row items-center justify-between gap-10 w-full mb-32">
          <div className="flex-1 w-full flex flex-col">
            <h2 className="text-white text-3xl font-thin leading-snug"style={{ marginBottom: '50px' }}>
              {aboutData.descriptionTitle}
            </h2>
            <p className="text-white text-lg font-thin leading-relaxed">
              {aboutData.description}
            </p>
          </div>

          <div className="shrink-0">
            <div className="relative rounded-full overflow-hidden bg-black"
                  style ={{ width: '450px', height: '450px' }}>
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