import React from 'react';

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
      className={`button ${variant}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;