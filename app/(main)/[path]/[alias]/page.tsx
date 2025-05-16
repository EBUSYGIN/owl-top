import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Курсы",
};

export default async function Courses({
  params,
}: {
  params: Promise<{ path: string; alias: string }>;
}) {
  const { path, alias } = await params;
  console.log(path);
  console.log(alias);
  return <div>Страница</div>;
}
