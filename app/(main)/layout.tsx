import { Footer, ScrollToTopButton, Sidebar } from "@/src/widgets";
import { MobileSidebarProvider } from "@/src/app/Providers/MobileSidebarProvider/MobileSidebarProvider";

import styles from "./layout.module.css";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <MobileSidebarProvider>
          <Sidebar />
        </MobileSidebarProvider>
        <Sidebar className={styles.mobile} />
        <main className={styles.main}>{children}</main>
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}
