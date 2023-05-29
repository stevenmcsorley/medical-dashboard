// Nav.tsx

import React from 'react';
import { FaUsers, FaStethoscope, FaCalendarCheck, FaNotesMedical, FaRegChartBar } from 'react-icons/fa';

import NavItem from './NavItem';
import styles from './Nav.module.css';

interface NavProps {
  orientation: 'vertical' | 'horizontal';
}

const Nav: React.FC<NavProps> = ({ orientation }) => {
  const navStyles = orientation === 'vertical' ? styles.vertical : styles.horizontal;
  
  return (
    <nav className={`${styles.nav} ${navStyles}`}>
      <NavItem Icon={FaRegChartBar} title="Dashboard" to="/" />
      <NavItem Icon={FaUsers} title="Patients" to="/patients" />
      <NavItem Icon={FaStethoscope} title="Doctors" to="/doctors" />
      <NavItem Icon={FaCalendarCheck} title="Appointments" to="/appointments" />
      <NavItem Icon={FaNotesMedical} title="Medical Status" to="/medical-status" />
      {/* Add more NavItems as required */}
    </nav>
  );
};

export default Nav;

