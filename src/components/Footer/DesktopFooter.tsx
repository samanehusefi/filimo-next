"use client";
import Link from "next/link";
import { FooterIcon } from "@/components/Icons/FooterIcons";
import type { FooterLink, FooterLinkChild } from "@/interfaces/IFooter";
import { FaCaretUp } from "react-icons/fa";
interface DesktopFooterProps {
  rightLinks: FooterLink[];
  leftLinks: FooterLink[];
}

const DesktopFooter = ({ rightLinks, leftLinks }: DesktopFooterProps) => {
  const renderChild = (child: FooterLinkChild) => (
    <li key={child.href}>
      {child.type === "external" ? (
        <a
          href={child.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-xs text-gray-300 transition hover:bg-gray-700 hover:text-white"
        >
          <FooterIcon name={child.icon} />
          {child.title}
        </a>
      ) : (
        <Link
          href={child.href}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-xs text-gray-300 transition hover:bg-gray-700 hover:text-white"
        >
          <FooterIcon name={child.icon} />
          {child.title}
        </Link>
      )}
    </li>
  );

  const renderLink = (link: FooterLink) => {
    return (
      <li key={link.id} className="group relative">
        {link.type === "dropdown" ? (
          <>
            <button className="text-xs flex items-center gap-2 text-gray-300 transition hover:text-white">
              {link.title}
              {link.position === "left" && (
                <span className="text-xs">
                  <FaCaretUp className="text-xs" />
                </span>
              )}
            </button>

            {link.children && (
              <ul className="invisible absolute bottom-full right-0 z-[999] mb-3 min-w-52 rounded-lg bg-[#333] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {link.children.map(renderChild)}
              </ul>
            )}
          </>
        ) : link.type === "external" ? (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-2 text-gray-300 transition hover:text-white"
          >
            <FooterIcon name={link.icon} />
            {link.title}
          </a>
        ) : (
          <Link
            href={link.href}
            className="text-xs flex items-center gap-2 text-gray-300 transition hover:text-white"
          >
            <FooterIcon name={link.icon} />
            {link.title}
          </Link>
        )}
      </li>
    );
  };

  return (
    <div className="overflow-visible">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <ul className="flex items-center gap-8">
          {rightLinks.map(renderLink)}
        </ul>

        <ul className="flex items-center gap-5">{leftLinks.map(renderLink)}</ul>
      </div>
    </div>
  );
};

export default DesktopFooter;
