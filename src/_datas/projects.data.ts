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
    id: "Astarion",
    title: "Astarion",
    description:
      "Astarion prowled the night as a vampire spawn for centuries, serving a sadistic master until a mind flayer parasite freed him from his bonds. Now that he can walk in daylight the game is on, for only his old master stands in the way of him becoming the greatest vampire the world has ever known",
    coverImage: {
      src: "/projects/Astarion_image.webp",
      alt: "Astarion image",
    },
  },
  {
    id: "Gale",
    title: "Gale",
    description:
      "Gale is a wizard prodigy whose love for a goddess made him attempt a dread feat no mortal should. Blighted by the forbidden magic of ancient Netheril, Gale strives to undo the corruption that is overtaking him and win back his goddess' favour before he becomes a destroyer of worlds.",
    coverImage: {
      src: "/projects/Gale_image.webp",
      alt: "Gale image",
    },
  },
  {
    id: "Lae'zel",
    title: "Lae'zel",
    description:
      "Lae’zel is a ferocious Githyanki warrior, mighty even by the standards of her mind flayer-hunting kind. Faced with transforming into the very monster she’s sworn to destroy, Lae’zel must prove herself worthy of rejoining her people – if they don’t execute her first.",
    coverImage: {
      src: "/projects/Lae'zel_image.webp",
      alt: "Lae'zel image",
    },
  },
  {
    id: "Shadowheart",
    title: "Shadowheart",
    description:
      "A loyal cleric of Shar, Shadowheart is the sole survivor of a holy mission undertaken on the Mistress of the Night’s behest. She alone must deliver a relic of immense power to her coven in Baldur’s Gate, while threatened by a strange new magic that is burgeoning from within.",
    coverImage: {
      src: "/projects/Shadowheart_image.webp",
      alt: "Shadowheart image",
    },
  },
  {
    id: "Wyll",
    title: "Wyll",
    description:
      "Noble by birth, Wyll made his name as the heroic ‘Blade of Frontiers’. But to become a living legend, he struck a bargain with a devil, a bargain from which he longs to break free before it consumes his soul for good.",
    coverImage: {
      src: "/projects/Wyll_image.webp",
      alt: "Wyll image",
    },
  },
  {
    id: "Karlach",
    title: "Karlach",
    description:
      "Karlach has escaped ten years of service in the Hells with nothing but the axe on her back - and the infernal engine blazing furiously where her heart used to be.",
    coverImage: {
      src: "/projects/Karlach_image.webp",
      alt: "Karlach image",
    },
  },
  {
    id: "The Dark Urge",
    title: "The Dark Urge",
    description:
      "You remember nothing but a path paved with blood. Unimaginable cruelty whispers to you from within. Can you escape it? Would you even want to?",
    coverImage: {
      src: "/projects/TheDarkUrge_image.webp",
      alt: "The Dark Urge image",
    },
  },
  {
    id: "Scratch",
    title: "Scratch",
    description:
      "Scratch is super cute. He even knows how to play ball. He sometimes brings me good stuff.",
    coverImage: {
      src: "/projects/Scratch_image.webp",
      alt: "Scratch image",
    },
  },
  {
    id: "Owlbear Cub",
    title: "Owlbear Cub",
    description:
      "Owlbear Cub has lost his parents. He runs around the campsite with Scratch.",
    coverImage: {
      src: "/projects/OwlbearCub_image.webp",
      alt: "Owlbear Cub image",
    },
  },
  {
    id: "Strange Ox",
    title: "Strange Ox",
    description:
      "Strange Ox appears to be a transformed being, but nothing has been clearly revealed.",
    coverImage: {
      src: "/projects/StrangeOx_image.webp",
      alt: "Strange Ox image",
    },
  }
];