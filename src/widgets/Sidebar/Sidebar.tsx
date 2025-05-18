import { Icon, Title } from "@/src/shared/ui";
import { Menu } from "@/src/features/navigation/menu/ui";

import { menuHandler } from "@/src/features/navigation/menu/handler";
import { topMenu } from "@/src/features/navigation/menu/model/topMenu";

import styles from "./Sidebar.module.css";
import { SidebarSearch } from "@/src/features/search/Search/ui";

export async function Sidebar() {
  const data = await Promise.all(
    topMenu.map((topMenuItem) => menuHandler.getMenu(topMenuItem.id))
  );

  return (
    <div className={styles.sidebar}>
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
      <Menu data={data} />
    </div>
  );
}
