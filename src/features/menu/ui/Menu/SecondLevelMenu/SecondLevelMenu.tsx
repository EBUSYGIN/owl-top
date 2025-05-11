import cn from "classnames";

import { SecondLevelMenuProps } from "./SecondLevelMenu.props";

import styles from "./SecondLevelMenu.module.css";
import { ThirdLevelMenu } from "../ThirdLevelMenu/ThirdLevelMenu";
import { MenuContext, MenuSetterContext } from "../MenuContext/MenuContext";
import { useContext, useEffect, useRef } from "react";
import { MenuTitle } from "../MenuTitle/MenuTitle";

export function SecondLevelMenu({
  secondLevelMenuItem,
  thirdLevelMenu,
}: SecondLevelMenuProps) {
  const { setSecondActive } = useContext(MenuSetterContext);
  const { activeSecond } = useContext(MenuContext);
  const activeItem = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeItem.current) return;

    activeItem.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [activeSecond]);

  return (
    <li>
      <MenuTitle
        appearance="secondLevel"
        category={secondLevelMenuItem}
        active={activeSecond === secondLevelMenuItem}
        onClick={() => setSecondActive(secondLevelMenuItem)}
        ref={activeItem}
      />
      <ul
        className={cn(styles.thirdLevelList, {
          [styles.active]: activeSecond === secondLevelMenuItem,
        })}
      >
        {thirdLevelMenu.map((thirdLevel) => (
          <ThirdLevelMenu
            key={thirdLevel._id}
            thirdLevelMenu={thirdLevel.title}
          />
        ))}
      </ul>
    </li>
  );
}
