import React from 'react';
import cn from 'classnames';
import { TitleProps } from './Title.props';

import styles from './Title.module.css';

export function Title({
  appearance = 'normal',
  tag,
  className,
  children,
}: TitleProps) {
  return React.createElement(tag, {
    className: cn(styles.title, styles[appearance], className),
    children,
  });
}
