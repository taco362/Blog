export type Project = {
  id: string;
  title: string;
  description: string;
  coverImage: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    id: "tabong guinea",
    title: "Tabong guinea",
    description:
      "Congratulations! You've been blessed with the luck of the world.",
    coverImage: {
      src: "/guineapig.jpg",
      alt: "the tabong guinea",
    },
  },
  {
    id: "tabong dochi",
    title: "Tabong dochi",
    description:
      "Congratulations! You've been blessed with the luck of the world.",
    coverImage: {
      src: "/tabongdochi.jpg",
      alt: "tabong dochi",
    },
  },
  {
    id: "Tabong cat",
    title: "Tabong cat",
    description:
      "Congratulations! You've been blessed with the luck of the world.",
    coverImage: {
      src: "/tabonggoyang.jpg",
      alt: "Tabong cat",
    },
  },
];