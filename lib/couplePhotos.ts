export interface CouplePhoto {
  id: number;
  src: string;
  alt: string;
  title: string;
  caption: string;
  objectPosition: string;
  gradient: string;
}

export const COUPLE_PHOTOS: CouplePhoto[] = [
  {
    id: 1,
    src: "/couple/couple-01.jpeg",
    alt: "Anukriti and Anmol seated together in formal celebration attire",
    title: "Together",
    caption: "A quiet royal portrait",
    objectPosition: "50% 46%",
    gradient: "linear-gradient(135deg, #3F0712, #5C0A1C, #8B1E3F)",
  },
  {
    id: 2,
    src: "/couple/couple-02.jpeg",
    alt: "Anukriti and Anmol cutting their celebration cake",
    title: "Cake Ceremony",
    caption: "Sweet beginnings",
    objectPosition: "50% 42%",
    gradient: "linear-gradient(135deg, #F4D8C3, #C89B7B, #5C0A1C)",
  },
  {
    id: 3,
    src: "/couple/couple-03.jpeg",
    alt: "Anukriti and Anmol posing in front of a blue and white balloon arch",
    title: "Celebration",
    caption: "Framed in joy",
    objectPosition: "50% 42%",
    gradient: "linear-gradient(135deg, #0D5B3A, #1A8859, #D4AF37)",
  },
  {
    id: 4,
    src: "/couple/couple-04.jpeg",
    alt: "Anukriti and Anmol sharing a close cake ceremony moment",
    title: "Promises",
    caption: "Hands held, hearts full",
    objectPosition: "50% 42%",
    gradient: "linear-gradient(135deg, #E8C4A8, #C89B7B, #8B1E3F)",
  },
  {
    id: 5,
    src: "/couple/couple-05.jpeg",
    alt: "Anukriti and Anmol looking at each other during an evening portrait",
    title: "Stolen Glance",
    caption: "The look that says forever",
    objectPosition: "50% 38%",
    gradient: "linear-gradient(135deg, #0A0807, #3F0712, #8B6F1B)",
  },
  {
    id: 6,
    src: "/couple/couple-06.jpeg",
    alt: "Anukriti and Anmol dancing as confetti falls around them",
    title: "First Dance",
    caption: "Confetti and closeness",
    objectPosition: "50% 45%",
    gradient: "linear-gradient(135deg, #C89B7B, #F4D8C3, #0D5B3A)",
  },
  {
    id: 7,
    src: "/couple/couple-07.jpeg",
    alt: "Anukriti and Anmol holding hands during a dance portrait",
    title: "In Step",
    caption: "Moving as one",
    objectPosition: "50% 45%",
    gradient: "linear-gradient(135deg, #F5E7B3, #D4AF37, #5C0A1C)",
  },
];
