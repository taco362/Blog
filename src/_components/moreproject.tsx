
export default function ProjectSection() {
  return (
    <section className="bg-black text-white pb-32 px-6 md:px-0">

      <div className="mx-auto" style={{ maxWidth: '1232px' }}>
        <div className="flex flex-row justify-between items-start w-full gap-x-10">
          
          <div style={{ width: '40%', flexShrink: 0 }} className="flex flex-col space-y-6"> 
            <h2 className="text-white text-3xl font-thin leading-tight">
              In addition to my job
            </h2>
            
            <p className="text-white text-lg font-thin leading-tight">
              Playing music, video games, and reading all help me see things in new ways and come up with new ideas. As &quot;curiousdilip,&quot; I can learn, contribute, and connect with other people who are interested in open source and technology. You can talk to me about code, ideas, or working together on Telegram or by email.
            </p>
          </div>

          <div style={{ width: '55%' }} className="flex flex-col space-y-6">
            <h2 className="text-white text-3xl font-thin leading-tight mb-6">
              Important Projects and Milestones:
            </h2>

            <div className="flex flex-col space-y-6">
              <h3 className="text-white text-2xl font-thin leading-tight">
                MPAA - Performing Arts Academy
              </h3>
              <p 
                className="text-white text-lg font-light leading-tight">
                I used WordPress, WooCommerce, and the Essential Theme to make the MPAA - Performing Arts Academy’s official website. The site promotes MPAA’s flagship 3-Year BA (Hons) Musical Theatre Performance Degree, which has strong ties to the industry and a high rate of graduates finding work.
              </p>
            </div>

           <div className="bg-white"
              style={{
                width: '150px',              
                height: '1px',               
                margin: '50px auto',         
                opacity: 1                   
              }}
            ></div>

            <div className="flex flex-col space-y-6">
              <h3 className="text-white text-3xl font-thin leading-tight">
                Pradhanmantri Sangrahalaya | Museum on Indian Prime Ministers
              </h3>
              <p className="text-white text-lg font-thin leading-tight">
                I helped make the official website for the Pradhanmantri Sangrahalaya, which is a well-known national museum that tells the stories of India’s Prime Ministers and their contributions to the country.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}