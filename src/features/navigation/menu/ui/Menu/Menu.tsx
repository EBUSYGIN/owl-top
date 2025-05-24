import { menuHandler } from "@/src/entities/menu/handler";
import { topMenu } from "@/src/entities/menu/model/topMenu";
import { FirstLevelMenu } from "@/src/entities/menu/ui";

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
