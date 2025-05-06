import { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { PageItem } from '../../types';

export interface SecondLevelMenuItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  title: string;
  thirdCategory: PageItem[];
}
