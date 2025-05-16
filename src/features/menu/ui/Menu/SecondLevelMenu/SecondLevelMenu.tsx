import cn from "classnames";

import { SecondLevelMenuProps } from "./SecondLevelMenu.props";

import styles from "./SecondLevelMenu.module.css";
import { ThirdLevelMenu } from "../ThirdLevelMenu/ThirdLevelMenu";
import { MenuContext, MenuSetterContext } from "../MenuContext/MenuContext";
import { useContext } from "react";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import { AnimatePresence, motion } from "framer-motion";

export function SecondLevelMenu({
  category,
  thirdLevelMenu,
}: SecondLevelMenuProps) {
  const { setActiveCategory } = useContext(MenuSetterContext);
  const { activeSecond } = useContext(MenuContext);

  const active = activeSecond.includes(category);

  return (
    <li>
      <MenuTitle
        appearance="secondLevel"
        category={category}
        active={active}
        onClick={() =>
          setActiveCategory({ path: category, categoryLevel: "activeSecond" })
        }
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
