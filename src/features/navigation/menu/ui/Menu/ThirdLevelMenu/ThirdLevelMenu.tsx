import cn from "classnames";

import Link from "next/link";
import { ThirdLevelMenuProps } from "./ThirdLevelMenu.props";

import styles from "./ThirdLevelMenu.module.css";

export function ThirdLevelMenu({
  category,
  alias,
  path,
  params,
}: ThirdLevelMenuProps) {
  return (
    <li
      className={cn(styles.thirdLevel, {
        [styles.active]: params.alias === alias,
      })}
    >
      <Link href={`${path}/${alias}`}>{category}</Link>
    </li>
  );
}
