import React, { FC, HTMLAttributes } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ children, ...props }) => (
  <div className={styles.card} {...props}>
    {children}
  </div>
);

export default Card;
