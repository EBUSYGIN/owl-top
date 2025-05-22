import { pageHandler } from "@/src/entities/page/handler";
import { Tag, Title } from "@/src/shared/ui";
import { Metadata } from "next";

import styles from "./page.module.css";
import { redirect } from "next/navigation";

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

  if (!pageInfo) redirect("/");

  return (
    <div>
      <div className={styles.header}>
        <Title tag="h1" size="xl" color="black">
          {pageInfo?.title}
        </Title>
        <Tag color="gray" size="l" className={styles.tag}>
          10
        </Tag>
      </div>
    </div>
  );
}
