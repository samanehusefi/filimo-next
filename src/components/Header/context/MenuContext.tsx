"use client";

import { createContext, useContext, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used inside MenuProvider");
  }

  return context;
};
