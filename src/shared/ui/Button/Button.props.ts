import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { IconType } from "../Icon/Icon";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "s" | "m" | "l";
  appearance?: "primary" | "ghost";
  icon?: IconType;
  typeOf?: "link" | "button" | "a";
  href?: string;
}
