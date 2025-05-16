import Link from "next/link";
import { ThirdLevelMenuProps } from "./ThirdLevelMenu.props";

import styles from "./ThirdLevelMenu.module.css";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { MenuContext } from "../MenuContext/MenuContext";

export function ThirdLevelMenu({ category, alias }: ThirdLevelMenuProps) {
  const { activeFirst } = useContext(MenuContext);
  // const pathname = usePathname();

  return (
    <li className={styles.thirdLevel}>
      <Link href={`${activeFirst?.at(-1)}/${alias}`}>{category}</Link>
    </li>
  );
}
