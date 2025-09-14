import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Skeleton from './components/Skeleton';
import { products } from '../shared/data';
import { useCart, useLoading, useThemeToggle } from '../shared/hooks';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main`
  margin-top: 7rem;
  padding: ${props => props.theme.spacing.xl} 0;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.lg};
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const App = () => {
  const { cartItems, addToCart } = useCart();
  const { isLoading } = useLoading(1500);
  const { theme, toggleTheme } = useThemeToggle();

  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  const handleAddToCart = (product) => {
    console.log('Adicionado ao carrinho:', product);
    addToCart();
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar 
          cartCount={cartItems} 
          onThemeToggle={toggleTheme}
          theme={theme}
        />
        
        <MainContent>
          <Container>
            <ProductsGrid>
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
            </ProductsGrid>
          </Container>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;