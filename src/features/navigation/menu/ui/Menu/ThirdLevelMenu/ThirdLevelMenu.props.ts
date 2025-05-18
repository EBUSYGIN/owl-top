import { Params } from "next/dist/server/request/params";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";

export interface ThirdLevelMenuProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  category: string;
  alias: string;
  path: string;
  params: Params;
}
