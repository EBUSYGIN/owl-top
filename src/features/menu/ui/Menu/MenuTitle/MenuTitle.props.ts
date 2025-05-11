import { IconType } from "@/src/shared/ui";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface MenuTitleProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  category: string;
  appearance: "topLevel" | "secondLevel" | "thirdLevel";
  icon?: IconType;
  active: boolean;
}
