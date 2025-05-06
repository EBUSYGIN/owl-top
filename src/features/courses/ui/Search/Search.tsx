'use client';

import { Button, Input } from '@/src/shared/ui';

import styles from './Search.module.css';

export function Search() {
  return (
    <div className={styles.searchBox}>
      <Input placeholder='Поиск...' />
      <Button size='s' icon='Search' className={styles.searchButton} />
    </div>
  );
}
