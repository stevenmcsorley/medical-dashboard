import React, { FC, HTMLAttributes } from 'react';
import styles from './CardSmall.module.css';
import { IconType } from 'react-icons';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  number: number | string;
  subtitle: string;
}

const CardSmall: FC<CardProps> = ({ icon: Icon, number, subtitle, ...props }) => (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.detail}>
        <div className={styles.number}>{number}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
);

export default CardSmall;