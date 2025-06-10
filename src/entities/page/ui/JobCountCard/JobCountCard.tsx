import { Card, Title } from "@/src/shared/ui";

import styles from "./JobCountCard.module.css";
import { JobCountCardProps } from "./JobCountCard.props";

export function JobCountCard({ count }: JobCountCardProps) {
  const formatter = new Intl.NumberFormat("ru-RU");

  return (
    <Card className={styles.card}>
      <Title size="s" tag="h4" color="black" className={styles.title}>
        Всего вакансий
      </Title>
      <span className={styles.count}>{formatter.format(count)}</span>
    </Card>
  );
}
