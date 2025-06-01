"use client";

import cn from "classnames";

import { useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./DynamicRating.module.css";
import { DynamicRatingProps } from "./DynamicRating.props";

export function DynamicRating({}: DynamicRatingProps) {
  const [userReviewRating, setUserReviewRating] = useState<number>(0);
  const [userHoverRating, setUserHoverRating] = useState<number>(0);

  return (
    <div className={styles.dynamicRating}>
      <span className={styles.title}>Оценка:</span>
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(styles.starBox, {
              [styles.active]:
                i + 1 <= userReviewRating || i + 1 <= userHoverRating,
            })}
            onClick={() => setUserReviewRating(i + 1)}
            onMouseEnter={() => setUserHoverRating(i + 1)}
            onMouseLeave={() => setUserHoverRating(0)}
          >
            <Icon.Star />
          </span>
        ))}
      </div>
    </div>
  );
}
