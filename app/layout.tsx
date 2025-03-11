import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import cn from "classnames";

const font = Open_Sans({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Courses Top",
  description: "Best top",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn(font.className)}>{children}</body>
    </html>
  );
}
