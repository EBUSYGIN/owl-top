import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  title: string;
  createdAt: string;
  rating: number;
  text: string;
}
