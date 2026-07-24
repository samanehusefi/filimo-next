export const menuData = [
  {
    id: 1,
    title: "فیلم",
    href: "/movies",
    priority: 1,
    hasMegaMenu: true,
    icon: null,
    children: [
      { id: 101, title: "انیمیشن", href: "/movies/animation", priority: 1 },
      { id: 102, title: "کمدی", href: "/movies/comedy", priority: 2 },
      { id: 103, title: "وحشت", href: "/movies/horror", priority: 3 },
      { id: 104, title: "اکشن", href: "/movies/action", priority: 4 },
    ],
  },

  {
    id: 2,
    title: "سریال",
    href: "/series",
    priority: 2,
    hasMegaMenu: true,
    icon: null,
    children: [
      { id: 201, title: "کمدی", href: "/series/comedy", priority: 1 },
      { id: 202, title: "انیمیشن", href: "/series/animation", priority: 2 },
      {
        id: 203,
        title: "ریلیتی شو",
        href: "/series/reality-show",
        priority: 3,
      },
    ],
  },

  {
    id: 3,
    title: "ایرانی",
    href: "/iranian",
    priority: 3,
    hasMegaMenu: false,
    icon: null,
  },

  {
    id: 4,
    title: "خارجی",
    href: "/foreign",
    priority: 4,
    hasMegaMenu: false,
    icon: null,
  },

  {
    id: 5,
    title: "مجموعه‌ها",
    href: "/collections",
    priority: 5,
    hasMegaMenu: false,
    icon: null,
    children: [
      { id: 501, title: "پخش زنده", href: "/live", priority: 1 },
      { id: 502, title: "مخصوص نابینایان", href: "/blind", priority: 2 },
      { id: 503, title: "مخصوص ناشنوایان", href: "/deaf", priority: 3 },
      {
        id: 504,
        title: "250 فیلم برتر IMDB",
        href: "/imdb-top-250",
        priority: 4,
      },
      {
        id: 505,
        title: "برگزیدگان جشنواره‌ها",
        href: "/festivals",
        priority: 5,
      },
    ],
  },

  {
    id: 6,
    title: "فیلیمو مدرسه",
    href: "/school",
    priority: 6,
    hasMegaMenu: false,
    icon: "play",
  },

  {
    id: 7,
    title: "کودک",
    href: "/kids",
    icon: "kids",
    priority: 8,
    hasMegaMenu: true,
    children: [
      { id: 801, title: "شبکه کودک", href: "/kids/channel", priority: 1 },
      { id: 802, title: "کودک ایرانی", href: "/kids/iranian", priority: 2 },
      { id: 803, title: "باب اسفنجی", href: "/kids/spongebob", priority: 3 },
      {
        id: 804,
        title: "سگ‌های نگهبان",
        href: "/kids/paw-patrol",
        priority: 4,
      },
      {
        id: 805,
        title: "ماجراجویی",
        href: "/kids/adventure",
        priority: 5,
      },
    ],
  },
];
