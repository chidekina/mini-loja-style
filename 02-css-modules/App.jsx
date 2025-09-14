import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import { products } from '../shared/data';
import { useCart, useLoading, useThemeToggle } from '../shared/hooks';
import styles from './styles/globals.module.css';

const App = () => {
  const { cartItems, addToCart } = useCart();
  const { isLoading } = useLoading(1500);
  const { theme, toggleTheme } = useThemeToggle();

  const handleAddToCart = (product) => {
    console.log('Adicionado ao carrinho:', product);
    addToCart();
  };

  return (
    <div className={styles.app}>
      <Navbar 
        cartCount={cartItems} 
        onThemeToggle={toggleTheme}
        theme={theme}
      />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.productsGrid}>
            {isLoading 
              ? Array.from({ length: 6 }, (_, index) => (
                  <Skeleton key={`skeleton-${index}`} />
                ))
              : products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    isLoading={false}
                  />
                ))
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;