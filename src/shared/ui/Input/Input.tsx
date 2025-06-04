import { InputProps } from "./Input.props";
import styles from "./Input.module.css";

export function Input({ placeholder, label, error, ...props }: InputProps) {
  return (
    <label className={styles.inputBox}>
      {label && <span>{label}</span>}
      <input placeholder={placeholder} className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
