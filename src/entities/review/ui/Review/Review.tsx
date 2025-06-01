import { Icon, StaticRating } from "@/src/shared/ui";

import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";

export function Review({ name, title, createdAt, rating, text }: ReviewProps) {
  return (
    <div className={styles.review}>
      <div className={styles.head}>
        <Icon.User />
        <span className={styles.name}>{name}</span>
        <span>{title}</span>
        <span className={styles.date}>
          {new Intl.DateTimeFormat("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(createdAt))}
        </span>
        <StaticRating initialRating={rating} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
