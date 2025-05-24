import { Course } from "@/src/entities/course/types";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CoursesListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  title: string;
  courses: Course[];
}
