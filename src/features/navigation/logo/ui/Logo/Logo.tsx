import Link from 'next/link';

import styles from './Logo.module.css';
import { Icon } from '@/src/shared/ui';

export function Logo() {
  return (
    <Link
      className={styles.logoBox}
      href={'/'}
      aria-label='лого навигации на главную страницу'
    >
      <Icon.Logo />
    </Link>
  );
}
