


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
    href: "mailto:email@example.com",
    displayAs: "email@example.com",
  },
  {
    type: "X",
    href: "https://x.com/BillGates",
    displayAs: "@BillGates on X",
  },
  {
    type: "GitHub",
    href: "https://github.com/dotnet",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/williamhgates/",
  },
];
