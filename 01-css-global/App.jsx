import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import { fetchProducts } from '../shared/data';
import { useCart, useThemeToggle } from '../shared/hooks';
import './styles.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cartItems, addToCart } = useCart();
  const { theme, toggleTheme } = useThemeToggle();

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

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