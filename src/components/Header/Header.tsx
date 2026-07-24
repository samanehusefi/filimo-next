"use client";

import Logo from "./Logo/Logo";
import DesktopMenu from "./Menu/Desktop/DesktopMenu";
import MobileMenu from "./Menu/Mobile/MobileMenu";
import MenuSvg from "./Menu/Mobile/MenuSvg";
import { useMenu } from "./context/MenuContext";
import { IoCartOutline } from "react-icons/io5";
const Header = () => {
  const { openMenu } = useMenu();

  return (
    <header className="fixed z-[999] h-14 w-full max-w-[1660px] bg-black/30">
      <div className="mx-auto flex h-full max-w-7xl flex-row-reverse items-center justify-between px-4 lg:flex-row">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden lg:flex">
          <DesktopMenu />
        </div>

        <div className="hidden lg:flex items-center gap-3 mr-auto">
          <button className="flex items-center gap-1 rounded-md bg-[#1cb561] px-4 py-2 text-xs text-white hover:bg-[#0c9349]">
            <IoCartOutline className="text-base" />
            خرید
          </button>

          <button className="rounded-md bg-[#ffffff1f]  px-4 py-2 text-xs text-white hover:bg-[#ffffff1f]">
            ورود
          </button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={openMenu}
            className="btn btn-ghost btn-circle text-white"
          >
            <MenuSvg />
          </button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
