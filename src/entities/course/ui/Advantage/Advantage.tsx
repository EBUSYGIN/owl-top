import { Icon, Title } from "@/src/shared/ui";
import { AdvantageProps } from "./Advantage.props";

import styles from "./Advantage.module.css";

export function Advantage({ title, text }: AdvantageProps) {
  return (
    <div>
      <div className={styles.head}>
        <Icon.AdvantageCheck />
        <Title tag="h4" size="m" color="black">
          {title}
        </Title>
      </div>
      <div className={styles.descriptionBlock}>
        <p>{text}</p>
      </div>
    </div>
  );
}
