
export type SocialLink = {
  label: string;
  href: string;
};

export type ContactField = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

export type ContactInfo = {
  location: string[];
  socials: SocialLink[];
  fields: ContactField[]; 
};

export const CONTACT_INFO: ContactInfo = {
  location: ["Seoul, KOR", "23°C - Clear Sky"],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://x.com" },
    { label: "GitHub", href: "https://github.com/taco362" },
    { label: "Codepen", href: "https://codepen.io" },
  ],
  
  fields: [
    { id: "name", label: "Name", type: "text", placeholder: "Chaeyeong Park" },
    { id: "email", label: "Email", type: "email", placeholder: "chaeyeong@example.com" },
    { id: "phone", label: "Phone", type: "text", placeholder: "Phone Number" },
  ]
};