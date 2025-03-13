


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "BUDDYWORKS",
  description: "Official BUDDYWORKS design guidelines.",
  author: "BUDDYWORKS",
  logo: {
    darkThemeSrc: "/logo/logo_dark.png",
    lightThemeSrc: "/logo/logo_light.png",
  }
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:hi@buddyworks.wtf",
    displayAs: "hi@buddyworks.wtf",
  },
  {
    type: "X",
    href: "https://x.com/JustBuddy_DE",
    displayAs: "@JustBuddy_DE on X",
  },
  {
    type: "GitHub",
    href: "https://github.com/BUDDYWORKS-VR",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];
