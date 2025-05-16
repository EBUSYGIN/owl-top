import { IMenuContext, TopMenuItem } from "../types";

export const topMenu: TopMenuItem[] = [
  {
    name: "Курсы",
    path: "/courses",
    id: 0,
    icon: "GraduationHat",
  },
  {
    name: "Сервисы",
    id: 1,
    icon: "Cloud",
    path: "/services",
  },
  {
    name: "Книги",
    id: 2,
    icon: "Book",
    path: "/books",
  },
  {
    name: "Товары",
    id: 3,
    icon: "Box",
    path: "/products",
  },
];

export const MenuContextModel: IMenuContext = {
  activeFirst: [],
  activeSecond: [],
  activeThird: [],
};
