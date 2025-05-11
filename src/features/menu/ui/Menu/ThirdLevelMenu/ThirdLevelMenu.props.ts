import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export interface ThirdLevelMenuProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  thirdLevelMenu: string;
}
