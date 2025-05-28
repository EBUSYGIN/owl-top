import { PriceInfoProps } from "./PriceInfo.props";
import styles from "./PriceInfo.module.css";
import { Tag } from "../Tag/Tag";

export function PriceInfo({
  price,
  blockName,
  oldPrice,
  additionalPriceInfo,
}: PriceInfoProps) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  return (
    <div className={styles.price}>
      <span className={styles.value}>
        {formatter.format(price)}
        {additionalPriceInfo && `${additionalPriceInfo}`}
      </span>
      {oldPrice && (
        <span className={styles.sale}>
          <Tag color="green">-{formatter.format(oldPrice - price)}</Tag>
        </span>
      )}
      {blockName && <span className={styles.additional}>{blockName}</span>}
    </div>
  );
}
