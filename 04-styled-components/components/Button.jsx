import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBase = styled.button`
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem;
  width: 100%;

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  ${props => props.variant === 'solid' && css`
    background-color: ${props.theme.colors.primary};
    color: white;

    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primaryHover};
      transform: translateY(-1px);
    }
  `}

  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border: 1px solid ${props.theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary};
      color: white;
      transform: translateY(-1px);
    }
  `}

  ${props => props.variant === 'ghost' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.border};
      transform: translateY(-1px);
    }
  `}
`;

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
    <ButtonBase
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;