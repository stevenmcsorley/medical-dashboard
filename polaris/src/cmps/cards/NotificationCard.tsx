import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './NotificationCard.module.css';

interface NotificationCardProps {
  time: string;
  title: string;
  subtitle: string;
  to: string;
  className?: string; // Add className prop
}


const NotificationCard: React.FC<NotificationCardProps> = ({ time, title, subtitle, to, className }) => {
  const cardClassName = `${styles.notificationCard} ${className}`; // Combine CSS module class name with additional className
  return (
    <Link to={to} className={cardClassName}>
      <div className={styles.notificationContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.timeData}>{time}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <FaChevronRight className={styles.icon} />
      </div>
    </Link>
  );
};

export default NotificationCard;
