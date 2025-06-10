import { Card, Title } from "@/src/shared/ui";
import styles from "./EmptyCourseCard.module.css";

export function EmptyCourseCard() {
  return (
    <Card className={styles.card}>
      <Title tag="h2" size="l">
        Курсов не обнаружено
      </Title>
      <p>
        К сожалению по выбранной теме еще нет курсов на нашей платформе.
        Выберите другую категорию
      </p>
    </Card>
  );
}
