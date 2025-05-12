"use client";

import cn from "classnames";

import { FirstLevelMenuProps } from "./FirstLevelMenu.props";

import styles from "./FirstLevelMenu.module.css";
import { SecondLevelMenu } from "../SecondLevelMenu/SecondLevelMenu";

import { MenuTitle } from "../MenuTitle/MenuTitle";
import { MenuContext, MenuSetterContext } from "../MenuContext/MenuContext";
import { useContext, useRef } from "react";

export function FirstLevelMenu({
  secondLevelMenu,
  icon,
  category,
}: FirstLevelMenuProps) {
  const { activeFirst } = useContext(MenuContext);
  const { setFirstActive } = useContext(MenuSetterContext);
  const activeItem = useRef<HTMLButtonElement>(null);

  return (
    <li>
      <MenuTitle
        appearance="topLevel"
        category={category}
        icon={icon}
        active={activeFirst === category}
        onClick={() => setFirstActive(category)}
        ref={activeItem}
        aria-expanded={activeFirst === category}
        aria-controls="second-level-menu"
      />
      <ul
        className={cn(styles.secondLevelList, {
          [styles.active]: activeFirst === category,
        })}
        id="second-level-menu"
      >
        {secondLevelMenu.length > 0 ? (
          secondLevelMenu.map((item) => (
            <SecondLevelMenu
              key={item._id.secondCategory}
              category={item._id.secondCategory}
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
