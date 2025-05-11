import Link from "next/link";
import { ThirdLevelMenuProps } from "./ThirdLevelMenu.props";

import styles from "./ThirdLevelMenu.module.css";

export function ThirdLevelMenu({ thirdLevelMenu }: ThirdLevelMenuProps) {
  return (
    <li className={styles.thirdLevel}>
      <Link href="/">{thirdLevelMenu}</Link>
    </li>
  );
}
