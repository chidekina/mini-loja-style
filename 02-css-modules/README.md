# CSS Modules - Mini Loja

Esta implementação usa **CSS Modules** para escopo local de estilos com naming conventions.

## 🎯 Características

- **CSS Modules**: Estilos com escopo local e classes geradas automaticamente
- **Naming Convention**: camelCase para classes CSS
- **Custom Properties**: CSS variables globais para tokens de design
- **Theme Support**: Alternância de tema usando data attributes
- **Component Isolation**: Cada componente tem seu próprio arquivo de estilos

## 📁 Estrutura

```
02-css-modules/
├── App.jsx                    # Componente principal
├── styles/
│   └── globals.module.css     # Estilos globais e layout
└── components/
    ├── Navbar.jsx            # Barra de navegação
    ├── Navbar.module.css     # Estilos do Navbar
    ├── ProductCard.jsx       # Card de produto
    ├── ProductCard.module.css # Estilos do ProductCard
    ├── Button.jsx            # Componente de botão
    ├── Button.module.css     # Estilos do Button
    ├── Skeleton.jsx          # Loading skeleton
    └── Skeleton.module.css   # Estilos do Skeleton
```

## 🎨 Abordagem de Estilos

### CSS Modules Classes
```css
/* Navbar.module.css */
.navbar { /* torna-se .Navbar_navbar__xyz123 */ }
.navbarContent { /* torna-se .Navbar_navbarContent__abc456 */ }
```

### Uso nos Componentes
```jsx
import styles from './Navbar.module.css';

<nav className={styles.navbar}>
  <div className={styles.navbarContent}>
    ...
  </div>
</nav>
```

### Combinação de Classes
```jsx
<button className={`${styles.button} ${styles[variant]}`}>
```

## 🎨 Design System

### Custom Properties (Globais)
```css
:global(:root) {
  --color-primary: #4F46E5;
  --spacing-md: 1rem;
  --radius-lg: 0.75rem;
}
```

### Responsive Grid
```css
.productsGrid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 481px) and (max-width: 768px) {
  .productsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 🚀 Como usar

```jsx
import App from './02-css-modules/App.jsx';

function Main() {
  return <App />;
}
```

## ✅ Vantagens dos CSS Modules

- ✅ **Escopo Local**: Evita conflitos de naming
- ✅ **Tree Shaking**: Remove CSS não usado
- ✅ **Composição**: Fácil combinação de classes
- ✅ **Type Safety**: IntelliSense para nomes de classes
- ✅ **Modularidade**: Cada componente isolado