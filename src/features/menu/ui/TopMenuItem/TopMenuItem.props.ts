import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IconType } from '../../../../shared/ui/Icon/Icon';
import { SecondMenuItem } from '@/src/features/menu/types';

export interface TopMenuItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: IconType;
  name: string;
  secondMenuItem: SecondMenuItem[] | undefined;
}
