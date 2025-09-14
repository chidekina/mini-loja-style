import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'solid', 
  disabled = false, 
  onClick, 
  ...props 
}) => {
  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;