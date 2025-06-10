import { Title } from "@/src/shared/ui";
import { Advantage } from "@/src/entities/page/ui";

import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";

export function Advantages({ advantages, text }: AdvantagesProps) {
  return (
    <div>
      <Title tag="h3" size="m" color="black" className={styles.title}>
        Преимущества:
      </Title>
      {advantages.map((advantage) => (
        <Advantage
          key={advantage._id}
          title={advantage.title}
          text={advantage.description}
        />
      ))}
      <p className={styles.text}>
        {text && text?.trim().length > 0
          ? text
              .replace(/<[^>]*>/g, "")
              .split(/(?<=[.!?])\s+/)
              .slice(0, 3)
              .join(" ")
          : "Преимущества не указаны"}
      </p>
    </div>
  );
}
