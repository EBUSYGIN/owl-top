import { IconType } from "@/src/shared/ui";
import { topMenu } from "../model/topMenu";

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

type Keys = keyof IMenuContext;

export interface IMenuContext {
  activeFirst: string[];
  activeSecond: string[];
  activeThird: string[];
}

export interface CategorySetterParams {
  path: string;
  categoryLevel: Keys;
}

export interface IMenuSetterContextType {
  setActiveCategory: (params: CategorySetterParams) => void;
}
