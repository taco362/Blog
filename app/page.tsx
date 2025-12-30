
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex min-h-screen flex-col items-center justify-between py-32 px-16">
        <div className="flex flex-col items-center py-32 px-32 space-y-6 text-center">
          <h1 className="text-5xl">Hi, I'm Chaeyeong Park – Web Developer in South Korea</h1>
          <h2 className="text-3xl mx-3">Computer Science Student & Web Developer</h2>
          <p className="text-base mx-10 mb-10">I am a Computer Science student at Incheon National University,<br/>
            building web applications with a focus on clarity, structure, and usability.<br></br>
            I mainly work with Next.js and React and enjoy turning ideas into well-organized, 
            functional interfaces.
          </p>
        </div>
      </main>
    </div>
  );
}