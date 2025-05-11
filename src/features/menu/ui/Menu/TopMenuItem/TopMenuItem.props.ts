import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { MenuItem } from "../../../types";
import { IconType } from "@/src/shared/ui";

export interface TopMenuItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  secondLevelMenu: MenuItem[];
  icon: IconType;
  category: string;
}
