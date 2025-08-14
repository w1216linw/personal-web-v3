export interface BioData {
  introduction: string;
  skills: {
    category: string;
    items: string[];
  }[];
  interests: string[];
}

export const bioData: BioData = {
  introduction: `I am a frontend engineer with a Bachelor's degree in Computer
              Science from Northern Illinois University. After completing my
              degree, I developed a strong passion for frontend development and
              currently focus on JavaScript, utilizing the React library to
              build various projects. I am also exploring Next.js and developing
              an app with it. Additionally, I am learning Python for backend
              development and have completed Google's UX design certificate
              courses to enhance my ability to deliver exceptional user
              experiences.`,
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
      category: "Tools & Others",
      items: ["Vercel", "Figma", "Github"],
    },
  ],
  interests: ["Web Development", "Badminton", "Weight Training"],
};
