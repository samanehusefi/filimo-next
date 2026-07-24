"use client";

import { MdTv } from "react-icons/md";
import { FaTelegram, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiAparat } from "react-icons/si";

const footerIcons = {
  tv: MdTv,
  aparat: SiAparat,
  telegram: FaTelegram,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

interface FooterIconProps {
  name?: string | null;
}

export const FooterIcon = ({ name }: FooterIconProps) => {
  if (!name) return null;

  const Icon = footerIcons[name as keyof typeof footerIcons];

  if (!Icon) return null;

  return <Icon className="text-xl" />;
};
