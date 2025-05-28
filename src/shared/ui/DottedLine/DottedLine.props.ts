import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DottedLineProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  value: string;
}
