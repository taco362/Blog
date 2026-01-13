import ServicesSection from "@/_components/servicesSection";
import ProjectsSection from "@/_components/projects/ProjectSection";
import CustomWhiteButton from "@/_components/CustomWhiteButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <main className="flex min-h-screen flex-col items-center justify-between py-32">
        <div className="flex flex-col items-center py-16 px-32 space-y-6 text-center">
        <h1 className="text-5xl">Hi, I'm Chaeyeong Park – Web Developer in South Korea</h1>
        <h2 className="text-3xl mx-3">Computer Science Student & Web Developer</h2>
        <p className="text-base mx-10 mb-10">I am a Computer Science student at Incheon National University,<br/>
            building web applications with a focus on clarity, structure, and usability.<br></br>
            I mainly work with Next.js and React and enjoy turning ideas into well-organized, 
            functional interfaces.
        </p>
        </div>
        <ServicesSection/>
        <ProjectsSection/>
        <div className="flex flex-col items-center justify-center my-14 p-2 space-y-3 border border-neutral-800 rounded-lg bg-neutral-900 w-6/11 h-40 mx-auto">
          <p className="text-lg font-thin text-white text-center"> Ready to start your custom web development project? <br/> For a free consultation. </p>
          <CustomWhiteButton text="Contact Chaeyeong"/>
        </div>
      </main>
    </div>
  );
}