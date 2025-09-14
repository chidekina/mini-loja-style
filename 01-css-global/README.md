# CSS Global - Mini Loja

Esta implementação usa **CSS global** com custom properties (CSS variables) para estilização.

## 🎯 Características

- **CSS Global**: Estilos aplicados globalmente com seletores de classe
- **Custom Properties**: CSS variables para tokens de design (cores, espaçamentos, etc.)
- **Theme Toggle**: Alternância entre tema claro/escuro usando `data-theme`
- **Responsive Design**: Grid responsivo usando media queries
- **Acessibilidade**: ARIA labels, navegação por teclado, contrast ratios

## 📁 Estrutura

```
01-css-global/
├── App.jsx              # Componente principal
├── styles.css           # Estilos globais e custom properties
└── components/
    ├── Navbar.jsx       # Barra de navegação
    ├── ProductCard.jsx  # Card de produto
    ├── Button.jsx       # Componente de botão
    └── Skeleton.jsx     # Loading skeleton
```

## 🎨 Tokens de Design

### Cores
- Light theme: `--color-primary: #4F46E5`
- Dark theme: `--color-primary: #6366F1`

### Espaçamentos
- `--spacing-xs: 0.25rem`
- `--spacing-sm: 0.5rem`
- `--spacing-md: 1rem`
- `--spacing-lg: 1.5rem`

### Breakpoints
- Mobile: ≤480px (1 col)
- Tablet: 481–768px (2 cols)
- Desktop: 769–1024px (3 cols)
- Large: ≥1025px (4 cols)

## 🚀 Como usar

```jsx
import App from './01-css-global/App.jsx';
import './01-css-global/styles.css';

function Main() {
  return <App />;
}
```

## ✅ Funcionalidades

- ✅ Navbar fixa com logo e actions
- ✅ Toggle de tema com persistência 
- ✅ Badge do carrinho
- ✅ Grid responsivo de produtos
- ✅ Cards com hover effects
- ✅ Skeleton loading
- ✅ Lazy loading de imagens
- ✅ Focus rings para acessibilidade
- ✅ Transições suaves (150-250ms)