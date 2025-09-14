import React from 'react';

const Button = ({ 
  children, 
  variant = 'solid', 
  disabled = false, 
  onClick, 
  ...props 
}) => {
  const baseClasses = 'btn-base';
  const variantClasses = {
    solid: 'btn-solid',
    outline: 'btn-outline',
    ghost: 'btn-ghost'
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;