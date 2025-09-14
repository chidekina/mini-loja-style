# Styled Components - Mini Loja

Esta implementação usa **styled-components** para CSS-in-JS com props dinâmicas e ThemeProvider.

## 🎯 Características

- **CSS-in-JS**: Estilos definidos como componentes JavaScript
- **Theme Provider**: Contexto global de tema com acesso via props
- **Dynamic Styling**: Estilos baseados em props dos componentes
- **Tagged Templates**: Template literals para definir estilos
- **Component Composition**: Herança e extensão de estilos

## 📁 Estrutura

```
04-styled-components/
├── App.jsx              # Componente principal com ThemeProvider
├── theme.js             # Definições de tema (light/dark)
├── GlobalStyles.js      # Estilos globais
└── components/
    ├── Navbar.jsx       # Barra de navegação
    ├── ProductCard.jsx  # Card de produto
    ├── Button.jsx       # Componente de botão
    └── Skeleton.jsx     # Loading skeleton
```

## 🎨 Sistema de Temas

### Definição dos Temas
```js
// theme.js
export const lightTheme = {
  colors: {
    primary: '#4F46E5',
    background: '#FFFFFF',
    // ...
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    // ...
  }
};
```

### ThemeProvider
```jsx
// App.jsx
<ThemeProvider theme={currentTheme}>
  <GlobalStyles />
  <AppContainer>
    {/* componentes */}
  </AppContainer>
</ThemeProvider>
```

## 🏗️ Styled Components

### Componente Básico
```jsx
const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.md};
`;
```

### Props Dinâmicas
```jsx
const Button = styled.button`
  ${props => props.variant === 'solid' && css`
    background-color: ${props.theme.colors.primary};
    color: white;
  `}
  
  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    border: 1px solid ${props.theme.colors.primary};
  `}
`;
```

### Herança de Componentes
```jsx
const IconButton = styled.button`
  /* estilos base */
`;

const CartBadge = styled(IconButton)`
  position: relative;
  /* estilos específicos */
`;
```

## 🎭 Animações e Keyframes

### Definição
```jsx
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonBase = styled.div`
  animation: ${shimmer} 2s infinite;
`;
```

## 📱 Media Queries

```jsx
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
```

## 🎨 Padrões de Uso

### Acesso ao Tema
```jsx
const StyledComponent = styled.div`
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.surface};
`;
```

### Condicionais
```jsx
const ProductImage = styled.img`
  ${props => props.loading && css`opacity: 0;`}
  ${props => props.loaded && css`opacity: 1;`}
`;
```

### Global Styles
```jsx
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;
```

## 🚀 Como usar

```jsx
import App from './04-styled-components/App.jsx';

function Main() {
  return <App />;
}
```

## ✅ Vantagens do Styled Components

- ✅ **Scoped Styles**: Estilos automaticamente com escopo
- ✅ **Dynamic Theming**: Tema dinâmico via props
- ✅ **Component API**: Interface intuitiva baseada em props
- ✅ **SSR Support**: Renderização server-side
- ✅ **Dead Code Elimination**: Remove estilos não usados
- ✅ **Developer Experience**: Debug e hot reload integrados