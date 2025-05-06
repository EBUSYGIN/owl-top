import { Footer, Sidebar } from '@/src/widgets';

import styles from './layout.module.css';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <header>Хедер</header>
      <div className={styles.content}>
        <Sidebar secondLevelMenuItems={[]} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
