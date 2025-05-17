"use client";

import { Button, Input } from "@/src/shared/ui";

import styles from "./SidebarSearch.module.css";

export function SidebarSearch() {
  return (
    <div className={styles.searchBox}>
      <Input placeholder="Поиск..." />
      <Button size="s" icon="Search" className={styles.searchButton} />
    </div>
  );
}
