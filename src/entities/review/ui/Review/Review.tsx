import { Icon, StaticRating } from "@/src/shared/ui";

import { ReviewProps } from "./Review.props";
import styles from "./Review.module.css";

export function Review({
  name,
  title,
  createdAt,
  rating,
  description,
}: ReviewProps) {
  return (
    <div className={styles.review}>
      <div className={styles.head}>
        <div className={styles.userBox}>
          <Icon.User />
          <span className={styles.name}>{name}:</span>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.ratingBox}>
          <span className={styles.date}>
            {new Intl.DateTimeFormat("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
              .format(new Date(createdAt))
              .replace(/\s*г\.?$/, "")}
          </span>
          <StaticRating initialRating={rating} />
        </div>
      </div>
      <p className={styles.text}>{description}</p>
    </div>
  );
}
