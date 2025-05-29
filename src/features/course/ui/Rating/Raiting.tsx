import cn from "classnames";
import { useState } from "react";

import { Icon } from "@/src/shared/ui";

import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import { plural } from "@/src/shared/lib/plural";

export function Rating({
  isEditable = false,
  initialRating = 0,
  reviewCount = 0,
}: RatingProps) {
  const [rating, setRating] = useState<number>(0);

  if (isEditable) {
    return <div className={styles.rating}></div>;
  }

  return (
    <div className={styles.rating}>
      <div>
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

      <div className={styles.reviewCount}>
        {reviewCount} {plural(reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
    </div>
  );
}
