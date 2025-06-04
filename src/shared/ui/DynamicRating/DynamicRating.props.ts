import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DynamicRatingProps {
  error?: string;
  rating: number;
  className: string;
  onChange: (value: number) => void;
}
