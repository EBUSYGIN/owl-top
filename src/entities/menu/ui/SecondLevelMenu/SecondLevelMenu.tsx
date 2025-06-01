"use client";

import cn from "classnames";

import { SecondLevelMenuProps } from "./SecondLevelMenu.props";

import styles from "./SecondLevelMenu.module.css";
import { ThirdLevelMenu } from "../ThirdLevelMenu/ThirdLevelMenu";

import { useState } from "react";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import { AnimatePresence, motion } from "framer-motion";

export function SecondLevelMenu({
  category,
  thirdLevelMenu,
  path,
  params,
}: SecondLevelMenuProps) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <li>
      <MenuTitle
        className={styles.secondLevel}
        appearance="secondLevel"
        category={category}
        active={active}
        onClick={() => setActive((prevState) => !prevState)}
      />

      <AnimatePresence>
        {active && (
          <motion.ul
            className={cn(styles.thirdLevelList, {
              [styles.active]: active,
            })}
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
            {thirdLevelMenu.length > 0 ? (
              thirdLevelMenu.map((thirdLevel) => (
                <ThirdLevelMenu
                  key={thirdLevel._id}
                  category={thirdLevel.title}
                  alias={thirdLevel.alias}
                  path={path}
                  params={params}
                />
              ))
            ) : (
              <p className={styles.noItem}>Нет элементов</p>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
