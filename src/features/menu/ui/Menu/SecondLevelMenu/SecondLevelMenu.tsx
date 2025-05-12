import cn from "classnames";

import { SecondLevelMenuProps } from "./SecondLevelMenu.props";

import styles from "./SecondLevelMenu.module.css";
import { ThirdLevelMenu } from "../ThirdLevelMenu/ThirdLevelMenu";
import { MenuContext, MenuSetterContext } from "../MenuContext/MenuContext";
import { useContext, useEffect, useRef } from "react";
import { MenuTitle } from "../MenuTitle/MenuTitle";

export function SecondLevelMenu({
  category,
  thirdLevelMenu,
}: SecondLevelMenuProps) {
  const { setSecondActive } = useContext(MenuSetterContext);
  const { activeSecond } = useContext(MenuContext);
  const activeItem = useRef<HTMLButtonElement>(null);

  return (
    <li>
      <MenuTitle
        appearance="secondLevel"
        category={category}
        active={activeSecond === category}
        onClick={() => setSecondActive(category)}
        ref={activeItem}
      />
      <ul
        className={cn(styles.thirdLevelList, {
          [styles.active]: activeSecond === category,
        })}
      >
        {thirdLevelMenu.map((thirdLevel) => (
          <ThirdLevelMenu key={thirdLevel._id} category={thirdLevel.title} />
        ))}
      </ul>
    </li>
  );
}
