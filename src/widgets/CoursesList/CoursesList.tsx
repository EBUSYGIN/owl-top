"use client";

import { Button, Tag, Title } from "@/src/shared/ui";

import styles from "./CoursesList.module.css";
import { CoursesListProps } from "./CoursesList.props";
import { useReducer } from "react";
import { sortReducer } from "@/src/shared/lib/sortReducer";
import { CourseCard } from "@/src/entities/course/ui";

export function CoursesList({ title, courses }: CoursesListProps) {
  const [{ sortedCourses, sort }, dispatchSort] = useReducer(sortReducer, {
    sort: "RATING",
    sortedCourses: courses,
  });

  return (
    <>
      <header className={styles.header}>
        <Title tag="h1" size="xl" color="black">
          {title}
        </Title>
        <Tag color="gray" size="l" className={styles.tag}>
          {courses.length}
        </Tag>
        <Button
          appearance="filter"
          icon={sort === "RATING" ? "Sort" : undefined}
          className={styles.sortByRating}
          onClick={() => {
            dispatchSort("RATING");
          }}
        >
          По рейтингу
        </Button>
        <Button
          appearance="filter"
          icon={sort === "PRICE" ? "Sort" : undefined}
          className={styles.sortByPrice}
          onClick={() => {
            dispatchSort("PRICE");
          }}
        >
          По цене
        </Button>
      </header>
      <ul>
        {sortedCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </ul>
    </>
  );
}
