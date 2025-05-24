import { Params } from "next/dist/server/request/params";
import { Page } from "../../types";

export interface SecondLevelMenuProps {
  category: string;
  path: string;
  params: Params;
  thirdLevelMenu: Page[];
}
