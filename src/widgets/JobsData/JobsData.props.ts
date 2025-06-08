import { Hh } from "@/src/entities/page/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface JobsDataProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: Hh;
  category: string;
}
