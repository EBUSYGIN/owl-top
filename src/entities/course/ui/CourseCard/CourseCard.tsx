import { Card, PriceInfo, Tag, Title } from "@/src/shared/ui";

import styles from "./CourseCard.module.css";
import { CourseCardProps } from "./CourseCard.props";
import Image from "next/image";

export function CourseCard({
  image,
  title,
  categories,
  price,
  oldPrice,
}: CourseCardProps) {
  return (
    <Card>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <Image
            src={image}
            alt="Иконка курса"
            width={70}
            height={70}
            className={styles.image}
          />
          <div className={styles.info}>
            <Title tag="h3" size="m" color="black">
              {title}
            </Title>
            <div className={styles.categories}>
              {categories?.map((category, i) => (
                <Tag size="m" color="ghost" key={i}>
                  {category}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.topRight}>
          <PriceInfo price={price} oldPrice={oldPrice} additional="Цена" />
        </div>
      </div>
    </Card>
  );
}
