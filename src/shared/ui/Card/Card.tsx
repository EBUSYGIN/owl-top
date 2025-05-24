import cn from "classnames";

import { CardProps } from "./Card.props";
import styles from "./Card.module.css";

export function Card({ color = "white", className, children }: CardProps) {
  return (
    <div className={cn(styles.card, styles[color], className)}>{children}</div>
  );
}
