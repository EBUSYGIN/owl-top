import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IconType } from "../Icon/Icon";

export interface TopMenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: IconType;
  name: string;
}
