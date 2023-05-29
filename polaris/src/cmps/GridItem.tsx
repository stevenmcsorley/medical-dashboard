// GridItem.tsx

import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Grid.module.scss';

interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const GridItem: FC<GridItemProps> = ({ children, span, xs, sm, md, lg, xl, ...props }) => {
  const classes = classNames({
    [styles[`col-${span}`]]: span,
    [styles[`col-sm-${sm}`]]: sm,
    [styles[`col-md-${md}`]]: md,
    [styles[`col-lg-${lg}`]]: lg,
    [styles[`col-xl-${xl}`]]: xl,
  });

  return <div className={classes} {...props}>{children}</div>;
};

export default GridItem;
