import type { FooterLink } from "@/interfaces/IFooter";

export const footerMenuLinks: FooterLink[] = [
  {
    id: 0,
    title: "تماشا با تلویزیون",
    href: "/tv/?itm_source=bigscrren-footer-link",
    type: "internal",
    icon: "tv",
    position: "right",
    showInMobile: true,
    mobileOrder: 1,
  },

  {
    id: 1,
    title: "اپلیکیشن‌ها",
    href: "/app",
    type: "internal",
    icon: null,
    position: "right",
    showInMobile: true,
    mobileOrder: 2,
  },

  {
    id: 2,
    title: "تماس و پشتیبانی",
    href: "https://filimo.goposhti.com",
    type: "external",
    icon: null,
    position: "right",
    showInMobile: true,
    mobileOrder: 4,
  },

  {
    id: 3,
    title: "فروشگاه",
    href: "/showroom",
    type: "internal",
    icon: null,
    position: "right",
    showInMobile: true,
    mobileOrder: 3,
  },

  {
    id: 4,
    title: "سایر لینک‌ها",
    href: "",
    type: "dropdown",
    icon: null,
    position: "right",
    showInMobile: false,

    children: [
      {
        title: "قوانین",
        href: "/term",
        type: "internal",
      },
      {
        title: "به ما بپیوندید",
        href: "https://job.sabaidea.com/",
        type: "external",
      },
      {
        title: "تبلیغات در فیلیمو",
        href: "/advertise",
        type: "internal",
      },
      {
        title: "لوگو",
        href: "/logo",
        type: "internal",
      },
      {
        title: "دانلود فیلم و سریال",
        href: "/download-movies",
        type: "internal",
      },
    ],
  },

  {
    id: 5,
    title: "شبکه‌های اجتماعی",
    href: "",
    type: "dropdown",
    icon: null,
    position: "left",
    showInMobile: false,

    children: [
      {
        title: "آپارات",
        href: "http://www.aparat.com/filimo",
        type: "external",
        icon: "aparat",
      },
      {
        title: "تلگرام",
        href: "https://www.telegram.me/filimo",
        type: "external",
        icon: "telegram",
      },
      {
        title: "توییتر",
        href: "https://twitter.com/Filimocom",
        type: "external",
        icon: "twitter",
      },
      {
        title: "اینستاگرام",
        href: "https://instagram.com/filimocom/",
        type: "external",
        icon: "instagram",
      },
    ],
  },
];
