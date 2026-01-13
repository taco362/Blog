
export type AboutInfo = {
  title: string;
  subTitle: string;
  descriptionTitle: string;
  description: string;
  profileImage: {
    src: string;
    alt: string;
  };
};

export const aboutData: AboutInfo = {
  title: "About Me",
  subTitle: "My Journey As A Web Developer In New Delhi",
  descriptionTitle: "Early Passion and Background",
  description: "Coming from New Delhi, India, I am a passionate web developer dedicated to continuous self-improvement and technology. I thrive on solving complex problems, learning new skills, and pushing beyond my comfort zone.",
 profileImage: {
    src: "/projects/profiles.png",  
    alt: "Profile Picture of Dilip",
  },
};