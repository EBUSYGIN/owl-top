import { openSans } from "@/src/app/styles/fonts";
import "@/src/app/styles/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Courses Top",
    default: "Courses Top",
  },
  description:
    "Courses Top — платформа для оценки и рейтинга курсов. Читайте отзывы, ставьте оценки, анализируйте плюсы и минусы. Выбирайте лучшие курсы на основе мнений студентов!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
