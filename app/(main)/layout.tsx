import { headers } from "next/headers";
import { Footer, Sidebar } from "@/src/widgets";
import { MobileSidebarProvider } from "@/src/app/Providers/MobileSidebarProvider/MobileSidebarProvider";

import styles from "./layout.module.css";
import { isMobile } from "@/src/shared/lib/isMobile";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userAgent = await headers();
  const mobile = isMobile(userAgent.get("user-agent") || "");

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        {mobile ? (
          <MobileSidebarProvider>
            <Sidebar />
          </MobileSidebarProvider>
        ) : (
          <Sidebar className={styles.mobile} />
        )}
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
