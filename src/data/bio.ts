export interface BioData {
  introduction: string;
  skills: {
    category: string;
    items: string[];
  }[];
  interests: string[];
}

export const bioData: BioData = {
  introduction:
    "I'm a passionate full-stack developer with a love for creating beautiful, functional, and accessible web applications. I enjoy working with modern technologies and am always eager to learn new things.",
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Vercel", "Jest", "Cypress"],
    },
  ],
  interests: [
    "Web Development",
    "Open Source",
    "AI/ML",
    "Photography",
    "Music",
  ],
};
