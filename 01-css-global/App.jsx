import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import { products } from '../shared/data';
import { useCart, useLoading, useThemeToggle } from '../shared/hooks';
import './styles.css';

const App = () => {
  const { cartItems, addToCart } = useCart();
  const { isLoading } = useLoading(1500);
  const { theme, toggleTheme } = useThemeToggle();

  const handleAddToCart = (product) => {
    console.log('Adicionado ao carrinho:', product);
    addToCart();
  };

  return (
    <div className="app">
      <Navbar 
        cartCount={cartItems} 
        onThemeToggle={toggleTheme}
        theme={theme}
      />
      
      <main className="main">
        <div className="container">
          <div className="products-grid">
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