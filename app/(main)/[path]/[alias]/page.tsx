import { pageHandler } from "@/src/entities/page/handler";
import { Tag, Title } from "@/src/shared/ui";
import { Metadata } from "next";

import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { courseHandler } from "@/src/entities/course/handler";
import { CoursesList } from "@/src/widgets";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Курсы",
};

export default async function Courses({
  params,
}: {
  params: Promise<{ path: string; alias: string }>;
}) {
  const { alias } = await params;
  const pageInfo = await pageHandler.getPageInfo(alias);
  const courses = await courseHandler.getAllByCategory(10, pageInfo?.category);

  if (!pageInfo) redirect("/");

  return (
    <div>
      <CoursesList title={pageInfo.title} courses={courses || []} />
    </div>
  );
}
