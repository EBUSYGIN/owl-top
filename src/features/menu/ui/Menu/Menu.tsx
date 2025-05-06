'use client';

import { topMenu } from '../../model/topMenu';
import { TopMenuItem } from '../TopMenuItem/TopMenuItem';
import { MenuProps } from './Menu.props';

export function Menu({ secondLevelMenuItems }: MenuProps) {
  return (
    <nav>
      <ul>
        {topMenu.map((menuItem, index) => (
          <TopMenuItem
            secondMenuItem={secondLevelMenuItems[index] || undefined}
            key={menuItem.id}
            name={menuItem.name}
            icon={menuItem.icon}
          />
        ))}
      </ul>
    </nav>
  );
}
