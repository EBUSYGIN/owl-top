import cn from "classnames";

import { Icon } from "@/src/shared/ui";
import { plural } from "@/src/shared/lib/plural";

import { StaticRatingProps } from "./StaticRating.props";
import styles from "./StaticRating.module.css";

export function StaticRating({
  initialRating,
  reviewCount,
}: StaticRatingProps) {
  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {new Array(5).fill(null).map((_, i) => (
          <span key={i} className={styles.starBox}>
            <Icon.Star
              className={cn(styles.star, {
                [styles.active]: i < Math.round(initialRating),
              })}
            />
          </span>
        ))}
      </div>

      {reviewCount === undefined ? null : (
        <div className={styles.reviewCount}>
          {reviewCount > 0
            ? `${reviewCount} ${plural(reviewCount, [
                "отзыв",
                "отзыва",
                "отзывов",
              ])}`
            : "Нет отзывов"}
        </div>
      )}
    </div>
  );
}
