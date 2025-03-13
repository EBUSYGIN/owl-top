import { IconType } from "@/src/shared/ui";

export interface TopMenuItem {
  name: string;
  id: number;
  icon: IconType;
}

export interface SecondMenuItem {
  _id: { secondCategory: string };
  pages: PageItem[];
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}
