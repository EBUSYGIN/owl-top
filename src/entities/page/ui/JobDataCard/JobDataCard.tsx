import cn from "classnames";

import { Title, Icon } from "@/src/shared/ui";
import { Card } from "@/src/shared/ui/Card/Card";
import { JobsDataCardProps } from "./JobDataCard.props";

import styles from "./JobDataCard.module.css";

export function JobDataCard({
  countOfActiveStars,
  salary,
  title,
}: JobsDataCardProps) {
  const formatter = new Intl.NumberFormat("ru-RU");

  return (
    <Card color="ghost" className={styles.card}>
      <Title size="s" tag="h4" color="black" className={styles.title}>
        {title}
      </Title>
      <span className={styles.salary}>{formatter.format(salary)}</span>
      <span className={styles.starBlock}>
        {Array.from({ length: 3 })
          .fill(null)
          .map((_, i) => (
            <Icon.JobStar
              key={i}
              className={cn(styles.icon, {
                [styles.active]: i < countOfActiveStars,
              })}
            />
          ))}
      </span>
    </Card>
  );
}
