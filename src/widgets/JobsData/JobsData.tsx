import cn from "classnames";

import { Card, Icon, Tag, Title } from "@/src/shared/ui";
import { JobsDataProps } from "./JobsData.props";
import styles from "./JobsData.module.css";

export function JobsData({ data, category }: JobsDataProps) {
  const formatter = new Intl.NumberFormat("ru-RU");

  return (
    <div>
      <div className={styles.titleWrapper}>
        <Title tag="h3" size="m" color="black">
          Вакансии - {category}
        </Title>
        <Tag size="m" color="red">
          hh.ru
        </Tag>
      </div>
      <div className={styles.infoWrapper}>
        <Card className={styles.wrapper}>
          <Title size="s" tag="h4" color="black" className={styles.title}>
            Всего вакансий
          </Title>
          <span className={styles.count}>{formatter.format(data.count)}</span>
        </Card>

        <Card color="ghost" className={styles.wrapper}>
          <Title size="s" tag="h4" color="black" className={styles.title}>
            Начальный
          </Title>
          <span className={styles.salary}>
            {formatter.format(data.juniorSalary)}
          </span>
          <span className={styles.starBlock}>
            {Array.from({ length: 3 })
              .fill(null)
              .map((_, i) => (
                <Icon.JobStar
                  key={i}
                  className={cn(styles.icon, { [styles.active]: i < 1 })}
                />
              ))}
          </span>
        </Card>

        <Card color="ghost" className={styles.wrapper}>
          <Title size="s" tag="h4" color="black" className={styles.title}>
            Средний
          </Title>
          <span className={styles.salary}>
            {formatter.format(data.middleSalary)}
          </span>
          <span className={styles.starBlock}>
            {Array.from({ length: 3 })
              .fill(null)
              .map((_, i) => (
                <Icon.JobStar
                  key={i}
                  className={cn(styles.icon, { [styles.active]: i < 2 })}
                />
              ))}
          </span>
        </Card>

        <Card color="ghost" className={styles.wrapper}>
          <Title size="s" tag="h4" color="black" className={styles.title}>
            Профессионал
          </Title>
          <span className={styles.salary}>
            {formatter.format(data.seniorSalary)}
          </span>
          <span className={styles.starBlock}>
            {Array.from({ length: 3 })
              .fill(null)
              .map((_, i) => (
                <Icon.JobStar
                  key={i}
                  className={cn(styles.icon, { [styles.active]: i < 3 })}
                />
              ))}
          </span>
        </Card>
      </div>
    </div>
  );
}
