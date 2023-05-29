// Title.tsx

import React from 'react';
import classNames from 'classnames';
import styles from './Title.module.css';

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ level, className, children }) => {
  const Heading = `h${level}`;
  const titleClassName = classNames(styles[`heading${level}`], className);

  return React.createElement(Heading, { className: titleClassName }, children);
};

export default Title;
