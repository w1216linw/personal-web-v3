export interface HeroData {
  title: string;
  description: string;
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
  title: "Hi I am Weiwei Lin,",
  description:
    "A Frontend engineer passionate about learning and committed to continually improving my knowledge.",
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
