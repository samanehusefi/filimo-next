export interface SubMenuItem {
  id: number;
  title: string;
  href: string;
  priority: number;
  icon?: string | null;
}

export interface MenuItem {
  id: number;
  title: string;
  href?: string;
  priority: number;
  hasMegaMenu: boolean;
  icon?: string | null;
  children?: SubMenuItem[];
}
