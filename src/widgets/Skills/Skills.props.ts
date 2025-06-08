import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SkillsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skills: string[];
}
