import { PriceInfoProps } from "./PriceInfo.props";
import styles from "./PriceInfo.module.css";
import { Tag } from "../Tag/Tag";

export function PriceInfo({ price, additional, oldPrice }: PriceInfoProps) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  return (
    <div className={styles.price}>
      <span className={styles.value}>{formatter.format(price)}</span>
      {oldPrice && (
        <span className={styles.sale}>
          <Tag color="green">-{formatter.format(oldPrice - price)}</Tag>
        </span>
      )}
      {additional && <span className={styles.additional}>{additional}</span>}
    </div>
  );
}
