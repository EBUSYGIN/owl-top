import { Icon } from "../Icon/Icon";
import { TopMenuItemProps } from "./TopMenuItem.props";

import styles from "./TopMenuItem.module.css";

export const TopMenuItem = ({ icon, name }: TopMenuItemProps) => {
  const IconComponent = Icon[icon];

  return (
    <div className={styles.item}>
      {IconComponent && <IconComponent />}
      <span>{name}</span>
    </div>
  );
};
