// Container.tsx
import React, { FC, HTMLAttributes } from 'react';
import styles from './Container.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  padding?: string;
  margin?: string;
}

const Container: FC<ContainerProps> = ({ children, padding, margin, ...props }) => {
  const containerStyle = {
    padding: padding || styles.defaultPadding,
    margin: margin || styles.defaultMargin,
  };

  return (
    <div className={styles.container} style={containerStyle} {...props}>
      {children}
    </div>
  );
};

export default Container;
