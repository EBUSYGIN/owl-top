import cn from "classnames";

import { Menu } from "@/src/features/navigation/menu/ui";
import { SidebarSearch } from "@/src/features/search/Search/ui";
import { Logo } from "@/src/features/navigation/logo/ui";

import styles from "./Sidebar.module.css";
import { SidebarProps } from "./Sidebar.props";

export async function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn(styles.sidebar, className)}>
      <Logo />
      <SidebarSearch />
      <Menu />
    </aside>
  );
}
