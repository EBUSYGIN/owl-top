import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface StaticRatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  initialRating: number;
  reviewCount?: number;
}
