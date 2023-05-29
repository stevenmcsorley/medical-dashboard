import React, { FC, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

const Button: FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  let buttonStyle = styles.button;
  switch(variant) {
    case 'primary':
      buttonStyle += ` ${styles.buttonPrimary}`;
      break;
    case 'secondary':
      buttonStyle += ` ${styles.buttonSecondary}`;
      break;
    case 'danger':
      buttonStyle += ` ${styles.buttonDanger}`;
      break;
  }

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
