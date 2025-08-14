export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  location: string;
  socialLinks: {
    name: string;
    url: string;
    icon?: string;
  }[];
  availableForWork: boolean;
  preferredContactMethod: string;
}

export const contactData: ContactData = {
  title: "Let's Work Together",
  subtitle:
    "I'm always interested in hearing about new opportunities and interesting projects.",
  email: "w1216lin@gmail.com",
  location: "Chicago, IL",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/w1216linw",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/weiweilin99",
    },
  ],
  availableForWork: true,
  preferredContactMethod: "email",
};
