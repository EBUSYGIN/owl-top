import { Search } from "@/src/features/courses/ui";
import { Icon, Title } from "@/src/shared/ui";
import { Menu } from "@/src/features/menu/ui";

import styles from "./Sidebar.module.css";
import { menuHandler } from "@/src/features/menu/handler";
import { topMenu } from "@/src/features/menu/model/topMenu";

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
      <Search />
      <Menu data={data} />
    </div>
  );
}
