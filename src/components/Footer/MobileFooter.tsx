import Link from "next/link";
import { FooterIcon } from "@/components/Icons/FooterIcons";
import type { FooterLink } from "@/interfaces/IFooter";

interface MobileFooterProps {
  links: FooterLink[];
}

const MobileFooter = ({ links }: MobileFooterProps) => {
  return (
    <div className="flex h-16 items-center justify-around text-gray-300">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="flex flex-col items-center gap-1 text-xs hover:text-white"
        >
          <FooterIcon name={link.icon} />

          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileFooter;
