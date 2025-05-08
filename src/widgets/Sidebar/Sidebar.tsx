import { Menu } from '@/src/features/menu/ui';

import styles from './Sidebar.module.css';
import { Search } from '@/src/features/courses/ui';
import { Icon, Title } from '@/src/shared/ui';
import { SidebarProps } from './Sidebar.props';

export function Sidebar({ secondLevelMenuItems }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      <Search />
      <Menu secondLevelMenuItems={secondLevelMenuItems} />
    </div>
  );
}
