import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CourseDetailsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  adv?: string;
  disadv?: string;
}
