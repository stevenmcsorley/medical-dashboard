// NavItem.tsx

import { NavLink, useMatch } from "react-router-dom";
import styles from './NavItem.module.css';
import { IconType } from 'react-icons';

interface NavItemProps {
  to: string;
  Icon: IconType;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, Icon, title }) => {
  const match = useMatch(to);

  return (
    <NavLink to={to} className={match ? `${styles.navItem} ${styles.active}` : styles.navItem}>
      <Icon className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </NavLink>
  );
};

export default NavItem;
