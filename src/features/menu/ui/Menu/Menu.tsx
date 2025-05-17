import { topMenu } from "../../model/topMenu";
import { MenuProps } from "./Menu.props";
import { FirstLevelMenu } from "./FirstLevelMenu/FirstLevelMenu";

export function Menu({ data }: MenuProps) {
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
