import Link from "next/link";
import { ThirdLevelMenuProps } from "./ThirdLevelMenu.props";

import styles from "./ThirdLevelMenu.module.css";

export function ThirdLevelMenu({ category }: ThirdLevelMenuProps) {
  return (
    <li className={styles.thirdLevel}>
      <Link href="/">{category}</Link>
    </li>
  );
}
