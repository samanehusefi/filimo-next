import { menuData } from "@/data/menu.data";
import MegaMenu from "@/components/Header/Menu/Desktop/MegaMenu";
import NormalMenu from "@/components/Header/Menu/Desktop/NormalMenu";
import { MenuIcon } from "@/components/Icons/MenuIcons";

const DesktopMenu = () => {
  const sortedItems = [...menuData].sort((a, b) => a.priority - b.priority);

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {sortedItems.map((item) => (
          <li key={item.id} className="group relative">
            <a
              href={item.href ?? "#"}
              className="flex items-center gap-1 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              <MenuIcon name={item.icon} />
              {item.title}
            </a>

            {item.hasMegaMenu && item.children && (
              <MegaMenu items={item.children} />
            )}

            {!item.hasMegaMenu && item.children && (
              <NormalMenu items={item.children} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
