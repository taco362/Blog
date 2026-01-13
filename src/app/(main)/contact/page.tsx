export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex w-7xl w-max-7xl py-35 px-6 mx-auto justify-center items-center">
        <div className="flex flex-col w-[1232px]">
            <h1 className="text-[52px] font-light mb-4">Get in Touch</h1>
            <h2 className="text-lg font-lignt mb-10">Reach out for collaborations, questions, or just to say hi. I’m always open to connect!</h2>
            <div className="flex flex-row gap-x-20">
                <div className="w-[800px]">
                    <form name="contact" method="post">
                        <div className="flex flex-col gap-1 mb-4 text-sm border-b-1 border-b-neutral-600">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="outline-none w-full py-3 pr-20 pl-4" placeholder="John Doe"/>
                        </div>
                        <div className="flex flex-col gap-1 mb-4 border-b-1 border-b-neutral-600">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className="outline-none w-full py-3 pr-20 pl-4" placeholder="johndeo@example.com"/>
                        </div>
                        <div className="flex flex-col gap-1 mb-4 border-b-1 border-b-neutral-600">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" className="outline-none w-full py-3 pr-20 pl-4" placeholder="Phone Number"/>
                        </div>
                        <div className="flex flex-col gap-1 mb-4 border-b-1 border-b-neutral-600">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="resize-none outline-none caret-transparent w-full h-35 py-3 pr-20 pl-4" placeholder="I have a project in mind..."/>
                        </div>
                        <input type="submit" value="Send" className="cursor-pointer rounded-full bg-white px-8 py-2 text-base text-black"/>
                     </form>
                </div>
                <div className="flex flex-col w-[240px] gap-6 text-lg font-light">
                    <div>
                        <h3 className="text-sm text-neutral-600 font-light mb-2">Location</h3>
                        <div className="flex flex-col justify-between gap-3 text-base">
                            <p>
                                Seoul
                                ,
                                KOR
                            </p>
                            <p>
                                13.01.2026 - 14:48
                            </p>
                            <p>
                                23
                                °C - 
                                Clear Sky
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm text-neutral-600 font-light mb-2">Get in Touch</h3>
                        <div className="flex flex-col justify-between gap-3 text-base">
                            <a href="https://www.linkedin.com/" className="cursor-pointer">LinkedIn</a>
                            <a href="https://x.com/" className="cursor-pointer">Twitter</a>
                            <a href="https://github.com/" className="cursor-pointer">GitHub</a>
                            <a href="http://codepen.io" className="cursor-pointer">Codepen</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </main>
    </div>
  );
}