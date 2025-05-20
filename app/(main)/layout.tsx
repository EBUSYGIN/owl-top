import { Footer, Sidebar } from "@/src/widgets";
import { MobileSidebarProvider } from "@/src/app/Providers/MobileSidebarProvider/MobileSidebarProvider";

import styles from "./layout.module.css";

export default function Layout({
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
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
