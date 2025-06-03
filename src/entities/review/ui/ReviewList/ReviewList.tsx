import { Card } from "@/src/shared/ui";
import { ReviewListProps } from "./ReviewList.props";
import { Review } from "../Review/Review";

import styles from "./ReviewList.module.css";

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <Card color="purple" className={styles.reviews}>
      {reviews.length > 0 ? (
        reviews.map((review) => <Review key={review._id} {...review} />)
      ) : (
        <p className={styles.noReviews}>К сожалению, отзывов еще нет</p>
      )}
    </Card>
  );
}
