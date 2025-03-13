import { TopMenuItem } from "@/src/shared/ui";
import { topMenu } from "../../model/topMenu";

export const Menu = () => {
  return (
    <nav>
      {topMenu.map((menuItem) => (
        <TopMenuItem
          key={menuItem.id}
          name={menuItem.name}
          icon={menuItem.icon}
        />
      ))}
    </nav>
  );
};
