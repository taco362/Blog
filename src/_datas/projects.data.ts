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
    id: "first-agent",
    title: "Clove",
    description:
      "Clove, a Scottish mischief-maker, torments his enemies both in the heat of battle and in the cold of death. A young immortal, Clove instills in his enemies the unease of his imminent return.",
    coverImage: {
      src: "/projects/clove2.jpg",
      alt: "The First Agent",
    },
  },
  {
    id: "second-agent",
    title: "Omen",
    description:
      "Omen, the Ghost of Memory, hunts from the shadows. His ability to blind enemies, move anywhere on the battlefield, and induce paranoia leaves opponents confused and unable to predict his next attack.",
    coverImage: {
      src: "/projects/omen.jpg",
      alt: "The Second Agent",
    },
  },
  {
    id: "third-agent",
    title: "Viper",
    description:
      "Viper, an American chemist, uses a variety of chemical weapons to dominate the battlefield and blind the enemy. Even if you survive the chemical attack, you'll be playing into Viper's psychological warfare.",
    coverImage: {
      src: "/projects/viper2.jpg",
      alt: "The Third Agent",
    },
  },
  {
    id: "fourth-agent",
    title: "Deadlock",
    description:
      "Norwegian agent Deadlock deploys cutting-edge nanowires to defend against threatening attacks on the battlefield. No one can escape Deadlock's surveillance or survive his relentless attacks.",
    coverImage: {
      src: "/projects/deadlock.png",
      alt: "The fourth Agent",
    },
  },
  {
    id: "fifth-agent",
    title: "ISO",
    description:
      "A hired Chinese troubleshooter, Iso enters a state of focus and disrupts his enemies. Iso reconstructs the surrounding energy into a bulletproof shield, propelling himself forward and focusing on his next duelist until he is defeated.",
    coverImage: {
      src: "/projects/ISO.jpg",
      alt: "The fifth Agent",
    },
  },
  {
    id: "sixth-agent",
    title: "JETT",
    description:
      "Jet, a Korean-born fighter known for his swift and stealthy movements, is not afraid to take risks that others would never dare. When combat breaks out, he invariably uses his superior abilities to launch surprise attacks.",
    coverImage: {
      src: "/projects/jett.jpg",
      alt: "The sixth Agent",
    },
  },
  {
    id: "seventh-agent",
    title: "GOGUMA",
    description:
      "GOGUMA is JMT. Muckgossipdda..",
    coverImage: {
      src: "/projects/GOGUMA.jpg",
      alt: "The seventh Agent",
    },
  },
  {
    id: "eighth-agent",
    title: "GOGUMA",
    description:
      "GOGUMA is JMT. Muckgossipdda..",
    coverImage: {
      src: "/projects/GOGUMA.jpg",
      alt: "The eighth Agent",
    },
  },
  {
    id: "ninth-agent",
    title: "GOGUMA",
    description:
      "GOGUMA is JMT. Muckgossipdda..",
    coverImage: {
      src: "/projects/GOGUMA.jpg",
      alt: "The ninth Agent",
    },
  },
  {
    id: "tenth-agent",
    title: "GOGUMA",
    description:
      "GOGUMA is JMT. Muckgossipdda..",
    coverImage: {
      src: "/projects/GOGUMA.jpg",
      alt: "The tenth Agent",
    },
  },
];