import { Advantage } from "@/src/entities/page/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdvantagesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages: Advantage[];
  text?: string;
}
