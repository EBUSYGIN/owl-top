import { topMenu } from "../../model/topMenu";
import { MenuProps } from "./Menu.props";
import { MenuContextProvider } from "./MenuContext/MenuContext";
import { TopMenuItem } from "./TopMenuItem/TopMenuItem";

export function Menu({ data }: MenuProps) {
  return (
    <MenuContextProvider>
      <ul>
        {topMenu.map((topMenuItem, index) => (
          <TopMenuItem
            key={topMenuItem.id}
            secondLevelMenu={data[index] || []}
            icon={topMenuItem.icon}
            category={topMenuItem.name}
          />
        ))}
      </ul>
    </MenuContextProvider>
  );
}
