"use client";

import type { MenuItem } from "@/interfaces/IMenu";
import { useMenu } from "../../context/MenuContext";

type Props = {
  item: MenuItem;
};

export const MobileMenuItem = ({ item }: Props) => {
  const { closeMenu } = useMenu();

  return (
    <li>
      {!item.children?.length ? (
        <a href={item.href ?? "#"} onClick={closeMenu}>
          {item.title}
        </a>
      ) : (
        <details>
          <summary className="active:bg-transparent active:text-inherit focus:bg-transparent focus:text-inherit">
            {item.title}
          </summary>

          <ul>
            {[...item.children]
              .sort((a, b) => a.priority - b.priority)
              .map((child) => (
                <li key={child.id}>
                  <a
                    href={child.href}
                    onClick={closeMenu}
                    className="active:bg-transparent active:text-inherit focus:bg-transparent focus:text-inherit"
                  >
                    {child.title}
                  </a>
                </li>
              ))}
          </ul>
        </details>
      )}
    </li>
  );
};
