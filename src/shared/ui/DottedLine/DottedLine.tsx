import { DottedLineProps } from "./DottedLine.props";
import styles from "./DottedLine.module.css";

export function DottedLine({ name, value }: DottedLineProps) {
  return (
    <div className={styles.line}>
      <p className={styles.name}>{name}</p>
      <div className={styles.dots}></div>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
