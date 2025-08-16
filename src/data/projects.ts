export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  links?: {
    github?: string;
    live?: string;
  };
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "personal-website-v3",
    title: "Personal Website v3",
    description:
      "Modern portfolio website built with Next.js 15, featuring dark/light mode, smooth animations, and accessibility improvements.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    status: "completed",
    featured: true,
    links: {
      github: "https://github.com/w1216linw/personal-web-v3",
    },
    images: ["/images/pw1.png", "/images/pw2.png"],
  },
  {
    id: "wtr",
    title: "Weight Training Recorder",
    description:
      "This project is a weight training recorder designed to track my daily workouts. Built with Next.js, TypeScript, Tailwind, and Firebase, it includes features such as a calendar view that highlights workout days, allowing users to easily track their consistency. Additionally, the app provides a graph to visually represent progress on specific exercises.",
    technologies: ["React", "Tailwind CSS", "Next.js", "Firebase"],
    status: "in-progress",
    links: {
      github: "https://github.com/w1216linw/Weight-Training-Recorder",
      live: "https://wtr.weidevs.com/",
    },
    featured: true,
    images: ["/images/wtr1.png", "/images/wtr2.png"],
  },
  {
    id: "kanban",
    title: "Kan Ban",
    links: {
      github: "https://github.com/w1216linw/fem-task-management",
      live: "https://wei-kanban.netlify.app/",
    },
    technologies: ["React", "Tailwind CSS"],
    description:
      "This project is a Kanban board developed as a challenge from Frontend Mentor, where I implemented the provided design into a fully functional web app using React and Tailwind CSS. Users can set up boards with columns for task states and add tasks with details like titles, descriptions, and optional subtasks.",
    featured: false,
    status: "completed",
    images: ["/images/kanban1.png", "/images/kanban2.png"],
  },
  // Add more projects here...
];
