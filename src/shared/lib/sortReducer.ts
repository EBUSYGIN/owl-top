import { Course } from "@/src/entities/course/types";

export type Action = "PRICE" | "RATING";

export interface SortReducerState {
  sort: Action;
  sortedCourses: Course[];
}

export const sortReducer = (
  prevState: SortReducerState,
  action: Action
): SortReducerState => {
  switch (action) {
    case "PRICE":
      return {
        sort: "PRICE",
        sortedCourses: prevState.sortedCourses.toSorted((a, b) =>
          a.price > b.price ? -1 : 1
        ),
      };

    case "RATING":
      return {
        sort: "RATING",
        sortedCourses: prevState.sortedCourses.toSorted((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };

    default:
      throw new Error("Не вызван правильный тип сортировки");
  }
};
