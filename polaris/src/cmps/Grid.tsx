import React from 'react';
import styles from './Grid.module.scss';

interface Background<T> {
  dark: T;
  light: T;
  white: T;
  background: T;
  black: T;
  divider: T;
  gray: T;
  gray_dark: T;
  gray_light: T;
  gray_lighter: T;
}

type BackgroundColor = keyof Background<string>;

interface GridProps {
  columns: number;
  gaps?: string;
  background?: BackgroundColor;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
  columns,
  gaps = '1rem',
  background = 'background',
  children,
}) => {
  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: gaps,
    background: `var(--color-neutral-${background})`,
    alignItems: 'stretch',  // this makes all grid items as tall as the tallest one
    alignContent: 'stretch', // this makes the grid itself as tall as its container
  };

  return (
    <div className={styles.grid} style={gridStyles}>
      {children}
    </div>
  );
};

export default Grid;
