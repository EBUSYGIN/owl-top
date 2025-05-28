import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PriceInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
  oldPrice?: number;
  blockName: string;
  additionalPriceInfo?: string;
}
