// Logo.tsx

import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  src: string; // Logo image source
  alt: string; // Alt text for the logo
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <img className={styles.logo} src={src} alt={alt} />
  );
};

export default Logo;
