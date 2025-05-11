"use client";

import {
  Children,
  createContext,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { IMenuContext, IMenuSetterContextType } from "../../../types";

export const MenuContext = createContext<IMenuContext>({
  activeFirst: null,
  activeSecond: null,
  activeThird: null,
});
export const MenuSetterContext = createContext<IMenuSetterContextType>({
  setFirstActive: () => {
    throw new Error("MenuSetterContext not initialized");
  },

  setSecondActive: () => {
    throw new Error("MenuSetterContext not initialized");
  },
  setThirdActive: () => {
    throw new Error("MenuSetterContext not initialized");
  },
});

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<IMenuContext>({
    activeFirst: null,
    activeSecond: null,
    activeThird: null,
  });

  const setSecondActive = useCallback(
    (category: string) =>
      setActive((prev) => ({
        ...prev,
        activeSecond: prev.activeSecond === category ? null : category,
      })),
    []
  );
  const setThirdActive = useCallback((category: string | null) => {
    setActive((prev) => ({
      ...prev,
      activeThird: prev.activeThird === category ? null : category,
    }));
  }, []);

  const setFirstActive = useCallback((category: string | null) => {
    setActive((prev) => ({
      ...prev,
      activeFirst: prev.activeFirst === category ? null : category,
    }));
  }, []);

  console.log(active);

  return (
    <MenuContext.Provider value={active}>
      <MenuSetterContext.Provider
        value={{ setSecondActive, setThirdActive, setFirstActive }}
      >
        {children}
      </MenuSetterContext.Provider>
    </MenuContext.Provider>
  );
}
