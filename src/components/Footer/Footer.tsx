"use client";
import type React from "react";
import { footerMenuLinks } from "@/data/footer.data";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer: React.FC = () => {
  const rightLinks = footerMenuLinks.filter(
    (link) => link.position === "right",
  );

  const leftLinks = footerMenuLinks.filter((link) => link.position === "left");

  const mobileLinks = footerMenuLinks
    .filter((link) => link.showInMobile)
    .sort((a, b) => (a.mobileOrder ?? 0) - (b.mobileOrder ?? 0));

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-[#1b1b1b]">
      <div className="hidden md:block">
        <DesktopFooter rightLinks={rightLinks} leftLinks={leftLinks} />
      </div>

      <div className="md:hidden">
        <MobileFooter links={mobileLinks} />
      </div>
    </footer>
  );
};

export default Footer;
