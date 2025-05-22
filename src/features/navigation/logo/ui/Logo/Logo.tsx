import Link from "next/link";

import { Icon, Title } from "@/src/shared/ui";

import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link className={styles.logoBox} href={"/"}>
      <Icon.Logo />
      <Title tag="h1" className={styles.bold}>
        OWL
      </Title>
      <Title tag="h1">top</Title>
    </Link>
  );
}
