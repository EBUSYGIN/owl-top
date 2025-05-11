import { IconType } from "@/src/shared/ui";

export interface TopMenuItem {
  id: number;
  name: string;
  icon: IconType;
  path: string;
}

export interface MenuItem {
  _id: Id;
  pages: Page[];
}

export interface Id {
  secondCategory: string;
}

export interface Page {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuContext {
  activeFirst: string | null;
  activeSecond: string | null;
  activeThird: string | null;
}

export interface IMenuSetterContextType {
  setFirstActive: (category: string) => void;
  setSecondActive: (category: string) => void;
  setThirdActive: (category: string) => void;
}
