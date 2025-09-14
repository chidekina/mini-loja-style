import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ cartCount, onThemeToggle, theme }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <a href="#" className={styles.navbarLogo} aria-label="Mini Loja - Página inicial">
          MiniLoja
        </a>
        
        <div className={styles.navbarActions}>
          <button
            className={styles.themeToggle}
            onClick={onThemeToggle}
            aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            type="button"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          <button
            className={styles.cartBadge}
            aria-label={`Carrinho com ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}
            type="button"
          >
            🛒
            {cartCount > 0 && (
              <span className={styles.cartCount} aria-hidden="true">
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