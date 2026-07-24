"use client";

import { IoPlay } from "react-icons/io5";
import { MdChildCare } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { MdTv } from "react-icons/md";

const menuIcons = {
  play: IoPlay,
  kids: MdChildCare,
  movie: MdMovie,
  series: MdTv,
};

interface MenuIconProps {
  name?: string | null;
}

export const MenuIcon = ({ name }: MenuIconProps) => {
  if (!name) return null;

  const Icon = menuIcons[name as keyof typeof menuIcons];

  if (!Icon) return null;

  return <Icon className="text-lg" />;
};
