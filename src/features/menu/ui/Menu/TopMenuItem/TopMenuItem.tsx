"use client";

import cn from "classnames";

import { TopMenuItemProps } from "./TopMenuItem.props";

import styles from "./TopMenuItem.module.css";
import { SecondLevelMenu } from "../SecondLevelMenu/SecondLevelMenu";

import { MenuTitle } from "../MenuTitle/MenuTitle";
import { MenuContext, MenuSetterContext } from "../MenuContext/MenuContext";
import { useContext, useEffect, useRef } from "react";

export function TopMenuItem({
  secondLevelMenu,
  icon,
  category,
}: TopMenuItemProps) {
  const { activeFirst } = useContext(MenuContext);
  const { setFirstActive } = useContext(MenuSetterContext);
  const activeItem = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeItem.current) return;

    activeItem.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }, [activeFirst]);

  return (
    <li>
      <MenuTitle
        appearance="topLevel"
        category={category}
        icon={icon}
        active={activeFirst === category}
        onClick={() => setFirstActive(category)}
        ref={activeItem}
      />
      <ul
        className={cn(styles.secondLevelList, {
          [styles.active]: activeFirst === category,
        })}
      >
        {secondLevelMenu.length > 0 ? (
          secondLevelMenu.map((item) => (
            <SecondLevelMenu
              key={item._id.secondCategory}
              secondLevelMenuItem={item._id.secondCategory}
              thirdLevelMenu={item.pages}
            />
          ))
        ) : (
          <p>Нет элементов меню</p>
        )}
      </ul>
    </li>
  );
}
