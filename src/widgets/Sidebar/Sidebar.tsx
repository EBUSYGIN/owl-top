import cn from "classnames";

import { Icon, Title } from "@/src/shared/ui";
import { Menu } from "@/src/features/navigation/menu/ui";
import { SidebarSearch } from "@/src/features/search/Search/ui";

import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export async function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn(styles.sidebar, className)}>
      <div className={styles.logoBox}>
        <Icon.Logo />
        <Title tag="h1" appearance="bold">
          OWL
        </Title>
        <Title tag="h1" appearance="thin">
          top
        </Title>
      </div>
      <SidebarSearch />
      <Menu />
    </div>
  );
}
