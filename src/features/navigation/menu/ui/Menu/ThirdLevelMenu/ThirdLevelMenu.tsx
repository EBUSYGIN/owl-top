import cn from "classnames";

import Link from "next/link";
import { ThirdLevelMenuProps } from "./ThirdLevelMenu.props";

import styles from "./ThirdLevelMenu.module.css";
import { useParams } from "next/navigation";

export function ThirdLevelMenu({ category, alias, path }: ThirdLevelMenuProps) {
  const activeAlias = useParams();

  return (
    <li
      className={cn(styles.thirdLevel, {
        [styles.active]: activeAlias.alias === alias,
      })}
    >
      <Link href={`${path}/${alias}`}>{category}</Link>
    </li>
  );
}
