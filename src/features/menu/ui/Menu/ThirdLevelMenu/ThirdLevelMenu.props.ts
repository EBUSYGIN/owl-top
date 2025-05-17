import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export interface ThirdLevelMenuProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  category: string;
  alias: string;
  path: string;
}
