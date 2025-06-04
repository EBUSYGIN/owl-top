"use client";

import cn from "classnames";

import { useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./DynamicRating.module.css";
import { DynamicRatingProps } from "./DynamicRating.props";

export function DynamicRating({
  className,
  error,
  onChange,
  rating,
}: DynamicRatingProps) {
  const [userHoverRating, setUserHoverRating] = useState<number>(0);

  return (
    <div className={cn(styles.dynamicRating, className)}>
      <span className={styles.title}>Оценка:</span>
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(styles.starBox, {
              [styles.active]: i + 1 <= rating || i + 1 <= userHoverRating,
            })}
            onClick={() => onChange(i + 1)}
            onMouseEnter={() => setUserHoverRating(i + 1)}
            onMouseLeave={() => setUserHoverRating(0)}
          >
            <Icon.Star />
          </span>
        ))}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
}
