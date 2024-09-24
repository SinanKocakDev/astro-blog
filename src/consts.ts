import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Sinan Koçak",
  DESCRIPTION: "Web üzerindeki karalama defterim...",
  EMAIL: "sinankocakdev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Anasayfa",
  DESCRIPTION: "Kişisel web sayfası Anasayfa",
};

export const BLOG: Metadata = {
  TITLE: "Yazılar",
  DESCRIPTION: "Bütün blog yazıları burada.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projeler",
  DESCRIPTION:
    "Web geliştirme üzerine yaptığım projeler.",
};

export const ABOUT: Metadata = {
  TITLE: "Hakkımda",
  DESCRIPTION:
    "Bu bölümde sadece kendimi anlattım.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://twitter.com/sinankocak",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/sinankocakdev",
  },
  {
    NAME: "Instagram",
    HREF: "https://instagram.com/sinan.kocakk",
  },
];
