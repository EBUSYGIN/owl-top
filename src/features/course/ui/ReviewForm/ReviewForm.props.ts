import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface ReviewFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  courseId: string;
}
