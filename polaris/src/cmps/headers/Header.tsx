import React, { FC, HTMLAttributes } from 'react';
import styles from './Header.module.css';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ children, ...props }) => (
  <div className={styles.header} {...props}>
    {children}
  </div>
);

export default Header;
