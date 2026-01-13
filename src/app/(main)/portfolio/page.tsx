import PortfoliosSection from "@/_components/projects/PortfoliosSection";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-[140px] pb-[140px] px-[24px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-start w-full">

        <h1 className="text-[38px] font-light leading-tight mb-10">MAKING DIGITAL SOLUTIONS</h1>
        <div className="flex flex-col max-w-[625px] gap-6">
          <p className="text-[18px] font-light leading-[28.8px]"> Check out a variety of projects that show off my skills in web development,
            UI/UX design, and making custom digital solutions. From websites for big
            companies to new businesses, each project shows how much I care about
            making experiences that are responsive and easy to use that help
            businesses grow.
          </p>
          <p className="text-[18px] font-light leading-[28.8px]"> This portfolio shows that I can deliver high-quality solutions that are tailored
          to the needs of my clients, whether you want to be inspired or work together.
          </p>
        </div>

        <div className="w-full">
        <PortfoliosSection />
        </div>
        
      </div>
    </div>
  );
}