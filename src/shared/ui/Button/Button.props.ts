import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "../Icon/Icon";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "s" | "m" | "l";
  appearrance?: "primary" | "ghost";
  icon?: IconType;
}
