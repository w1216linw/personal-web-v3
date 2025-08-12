export interface HeroData {
  greeting: string;
  title: string;
  description: string;
  highlights: string;
  ctaButtons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export const heroData: HeroData = {
  greeting: "Hi,",
  title: "I am Weiwei Lin",
  highlights: "Frontend Engineer",
  description:
    "A Frontend Engineer passionate about learning and committed to continually improving my knowledge.",
  ctaButtons: {
    primary: {
      text: "View Projects",
      href: "/projects",
    },
    secondary: {
      text: "Get In Touch",
      href: "/contact",
    },
  },
};
