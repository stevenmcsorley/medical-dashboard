import React, { FC, HTMLAttributes } from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ children, ...props }) => (
  <div className={styles.sidebar} {...props}>
    {children}
  </div>
);

export default Sidebar;
