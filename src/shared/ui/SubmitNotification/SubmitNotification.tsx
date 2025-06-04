import cn from "classnames";

import styles from "./SubmitNotification.module.css";
import { SubmitNotificationProps } from "./SubmitNotification.props";
import { Icon } from "../Icon/Icon";

export function SubmitNotification({
  title,
  info,
  color,
  changeSubmitStatus,
}: SubmitNotificationProps) {
  return (
    <div className={cn(styles.submitNotificationBox, styles[color])}>
      <p className={styles.title}>{title}</p>
      <p className={styles.info}>{info}</p>
      <Icon.SmallClose
        className={styles.icon}
        onClick={() => changeSubmitStatus(null)}
      />
    </div>
  );
}
