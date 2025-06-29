'use client';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from '@/src/shared/ui';

import styles from './MobileSidebarProvider.module.css';
import { Logo } from '@/src/features/navigation/logo/ui';

export function MobileSidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: { stiffness: 20 },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <header className={cn(styles.mobileSidebar)}>
      <div className={styles.mobileHeader}>
        <Logo />
        <Button
          appearance='ghost'
          icon='Burger'
          size='s'
          aria-label='кнопка открытия мобильного меню'
          onClick={() => setIsOpen(true)}
        />
      </div>

      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpen ? 'opened' : 'closed'}
      >
        <Button
          appearance='ghost'
          icon='Close'
          size='s'
          className={styles.mobileButton}
          onClick={() => setIsOpen(false)}
          aria-label='кнопка закрытия мобильного меню'
        />
        {children}
      </motion.div>
    </header>
  );
}
