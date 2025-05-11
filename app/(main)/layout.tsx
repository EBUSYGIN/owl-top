import { Footer, Sidebar } from "@/src/widgets";

import styles from "./layout.module.css";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
