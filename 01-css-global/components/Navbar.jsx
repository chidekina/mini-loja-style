import React from 'react';

const Navbar = ({ cartCount, onThemeToggle, theme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#" className="navbar-logo" aria-label="Mini Loja - Página inicial">
          MiniLoja
        </a>
        
        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            type="button"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button
            className="cart-badge"
            aria-label={`Carrinho com ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
            type="button"
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-count" aria-hidden="true">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;