"use client";

import { createContext, ReactNode, useCallback, useState } from "react";
import {
  CategorySetterParams,
  IMenuContext,
  IMenuSetterContextType,
} from "../../../types";
import { MenuContextModel } from "../../../model/topMenu";

export const MenuContext = createContext<IMenuContext>(MenuContextModel);

export const MenuSetterContext = createContext<IMenuSetterContextType>({
  setActiveCategory: () => {
    throw new Error("MenuSetterContext not initialized");
  },
});

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<IMenuContext>(MenuContextModel);

  const setActiveCategory = useCallback(
    ({ path: categoryOrPath, categoryLevel }: CategorySetterParams) => {
      setActive((prev) => {
        const isActive = prev[categoryLevel].includes(categoryOrPath);
        return {
          ...prev,
          [categoryLevel]: isActive
            ? prev[categoryLevel].filter((item) => item !== categoryOrPath)
            : [...prev[categoryLevel], categoryOrPath],
        };
      });
    },
    []
  );

  return (
    <MenuContext.Provider value={active}>
      <MenuSetterContext.Provider value={{ setActiveCategory }}>
        {children}
      </MenuSetterContext.Provider>
    </MenuContext.Provider>
  );
}
