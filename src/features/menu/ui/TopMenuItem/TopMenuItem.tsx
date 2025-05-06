import { Icon } from '../../../../shared/ui/Icon/Icon';
import { TopMenuItemProps } from './TopMenuItem.props';

import styles from './TopMenuItem.module.css';
import { SecondLevelMenuItem } from '../SecondLevelMenuItem/SecondLevelMenuItem';

export const TopMenuItem = ({
  icon,
  name,
  secondMenuItem,
}: TopMenuItemProps) => {
  const IconComponent = Icon[icon];

  return (
    <li className={styles.menuItem}>
      <div className={styles.item}>
        {IconComponent && <IconComponent />}
        <span>{name}</span>
      </div>
      <ul>
        {secondMenuItem &&
          secondMenuItem.map((secondLevelMenuItem) => (
            <SecondLevelMenuItem
              key={secondLevelMenuItem._id.secondCategory}
              title={secondLevelMenuItem._id.secondCategory}
              thirdCategory={secondLevelMenuItem.pages}
            />
          ))}
      </ul>
    </li>
  );
};
