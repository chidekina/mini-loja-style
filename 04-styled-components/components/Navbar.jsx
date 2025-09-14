import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.surface};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  z-index: 1000;
  transition: background-color ${props => props.theme.transitions.normal}, 
              border-color ${props => props.theme.transitions.normal};
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const NavbarLogo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
    border-radius: ${props => props.theme.borderRadius.sm};
  }
`;

const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`;

const IconButton = styled.button`
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.sm};
  cursor: pointer;
  font-size: 1.25rem;
  transition: all ${props => props.theme.transitions.fast};
  color: ${props => props.theme.colors.text};

  &:hover {
    background-color: ${props => props.theme.colors.border};
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CartBadge = styled(IconButton)`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${props => props.theme.colors.error};
  color: white;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Navbar = ({ cartCount, onThemeToggle, theme }) => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarLogo href="#" aria-label="Mini Loja - Página inicial">
          MiniLoja
        </NavbarLogo>
        
        <NavbarActions>
          <IconButton
            onClick={onThemeToggle}
            aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            type="button"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </IconButton>
          
          <CartBadge
            aria-label={`Carrinho com ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
            type="button"
          >
            🛒
            {cartCount > 0 && (
              <CartCount aria-hidden="true">
                {cartCount}
              </CartCount>
            )}
          </CartBadge>
        </NavbarActions>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;