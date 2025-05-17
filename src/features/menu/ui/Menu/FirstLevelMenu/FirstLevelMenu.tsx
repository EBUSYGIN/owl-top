"use client";

import cn from "classnames";

import { FirstLevelMenuProps } from "./FirstLevelMenu.props";

import styles from "./FirstLevelMenu.module.css";
import { SecondLevelMenu } from "../SecondLevelMenu/SecondLevelMenu";

import { MenuTitle } from "../MenuTitle/MenuTitle";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function FirstLevelMenu({
  secondLevelMenu,
  icon,
  category,
  path,
}: FirstLevelMenuProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li>
      <MenuTitle
        appearance="topLevel"
        category={category}
        icon={icon}
        active={active}
        onClick={() => setActive((prevState) => !prevState)}
        aria-expanded={active}
        aria-controls="second-level-menu"
      />

      <AnimatePresence>
        {active && (
          <motion.ul
            className={cn(styles.secondLevelList)}
            id="second-level-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, ease: "linear" },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.25, ease: "easeIn" },
                opacity: { duration: 0.15, ease: "linear" },
              },
            }}
            transition={{ duration: 0.3 }}
          >
            {secondLevelMenu.length > 0 ? (
              secondLevelMenu.map((item) => (
                <SecondLevelMenu
                  key={item._id.secondCategory}
                  category={item._id.secondCategory}
                  thirdLevelMenu={item.pages}
                  path={path}
                />
              ))
            ) : (
              <p className={styles.noItem}>Нет элементов меню</p>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
