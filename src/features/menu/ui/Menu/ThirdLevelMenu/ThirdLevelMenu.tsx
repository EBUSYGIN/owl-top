import Link from "next/link";
import { ThirdLevelMenuProps } from "./ThirdLevelMenu.props";

import styles from "./ThirdLevelMenu.module.css";
import { usePathname } from "next/navigation";

export function ThirdLevelMenu({ category, alias }: ThirdLevelMenuProps) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <li className={styles.thirdLevel}>
      <Link href={`/courses/${alias}`}>{category}</Link>
    </li>
  );
}
