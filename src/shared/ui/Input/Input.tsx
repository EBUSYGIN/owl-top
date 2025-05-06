import { InputProps } from './Input.props';
import styles from './Input.module.css';

export function Input({ placeholder, label, error }: InputProps) {
  return (
    <label className={styles.inputBox}>
      {label && <span>{label}</span>}
      <input placeholder={placeholder} className={styles.input} />
      {error && <span>{error}</span>}
    </label>
  );
}
