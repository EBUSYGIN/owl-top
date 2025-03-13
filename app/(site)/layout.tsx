import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import styles from "./layout.module.css";
import cn from "classnames";
import { Sidebar } from "@/src/widgets";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
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
    <html lang='ru'>
      <body className={cn(openSans.className)}>
        <header>Header</header>
        <div className={styles.layout}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
