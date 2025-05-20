import { topMenu } from "../../model/topMenu";
import { MenuProps } from "./Menu.props";
import { FirstLevelMenu } from "./FirstLevelMenu/FirstLevelMenu";
import { menuHandler } from "../../handler";

export async function Menu() {
  const data = await Promise.all(
    topMenu.map((topMenuItem) => menuHandler.getMenu(topMenuItem.id))
  );

  return (
    <ul>
      {topMenu.map((topMenuItem, index) => (
        <FirstLevelMenu
          key={topMenuItem.id}
          secondLevelMenu={data[index] || []}
          icon={topMenuItem.icon}
          category={topMenuItem.name}
          path={topMenuItem.path}
        />
      ))}
    </ul>
  );
}
