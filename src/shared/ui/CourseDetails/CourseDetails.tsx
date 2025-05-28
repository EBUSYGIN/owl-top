import { Title } from "../Title/Title";
import styles from "./CourseDetails.module.css";
import { CourseDetailsProps } from "./CourseDetails.props";

export function CourseDetails({ adv, disadv }: CourseDetailsProps) {
  return (
    <div className={styles.details}>
      <div className={styles.adv}>
        <Title tag="h4" size="m" color="black">
          Преимущества
        </Title>
        <p>{adv || "Не указано"}</p>
      </div>
      <div className={styles.disadv}>
        <Title tag="h4" size="m" color="black">
          Недостатки
        </Title>
        <p>{disadv || "Не указано"}</p>
      </div>
    </div>
  );
}
