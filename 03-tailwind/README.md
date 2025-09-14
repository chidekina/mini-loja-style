# Tailwind CSS - Mini Loja

Esta implementação usa **Tailwind CSS** como framework utility-first para estilização rápida e consistente.

## 🎯 Características

- **Utility-First**: Classes utilitárias para construção rápida de interfaces
- **Custom Config**: Configuração personalizada com cores e breakpoints
- **Component Classes**: Classes customizadas com `@layer components`
- **Dark Mode**: Suporte nativo ao dark mode com `dark:` variants
- **Responsive**: Sistema de breakpoints customizado

## 📁 Estrutura

```
03-tailwind/
├── App.jsx              # Componente principal
├── tailwind.config.js   # Configuração personalizada
├── styles.css           # Estilos base e componentes customizados
└── components/
    ├── Navbar.jsx       # Barra de navegação
    ├── ProductCard.jsx  # Card de produto
    ├── Button.jsx       # Componente de botão
    └── Skeleton.jsx     # Loading skeleton
```

## 🎨 Configuração Personalizada

### Breakpoints Customizados
```js
// tailwind.config.js
screens: {
  'mobile': {'max': '480px'},
  'tablet': {'min': '481px', 'max': '768px'},
  'desktop': {'min': '769px', 'max': '1024px'},
  'large': {'min': '1025px'}
}
```

### Cores do Theme
```js
colors: {
  primary: {
    light: '#4F46E5',
    dark: '#6366F1'
  }
}
```

### Componentes Customizados
```css
@layer components {
  .btn-solid {
    @apply btn-base bg-blue-600 text-white;
    @apply hover:bg-blue-700 hover:-translate-y-0.5;
  }
  
  .product-card {
    @apply bg-gray-50 border border-gray-200 rounded-xl p-6;
    @apply hover:shadow-hover hover:-translate-y-1;
  }
}
```

## 📱 Responsive Grid

```jsx
<div className="products-grid">
  {/* 
    mobile: grid-cols-1 
    tablet: grid-cols-2
    desktop: grid-cols-3 
    large: grid-cols-4
  */}
</div>
```

## 🌙 Dark Mode

### Configuração
```js
// tailwind.config.js
darkMode: ['class', '[data-theme="dark"]']
```

### Uso
```jsx
<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50">
  <button className="bg-blue-600 dark:bg-blue-500">
    Button
  </button>
</div>
```

## 🎨 Sistema de Classes

### Botões
```css
.btn-solid    /* Sólido */
.btn-outline  /* Com borda */
.btn-ghost    /* Fantasma */
```

### Cards
```css
.product-card /* Card base com hover effects */
.skeleton-shimmer /* Animação de loading */
```

### Layout
```css
.container-custom /* Container responsivo */
.navbar-fixed /* Navbar fixa */
```

## 🚀 Como usar

```jsx
import App from './03-tailwind/App.jsx';
import './03-tailwind/styles.css';

function Main() {
  return <App />;
}
```

## ✅ Vantagens do Tailwind

- ✅ **Produtividade**: Desenvolvimento mais rápido
- ✅ **Consistência**: Design system integrado
- ✅ **Responsividade**: Breakpoints fáceis de usar
- ✅ **Dark Mode**: Suporte nativo
- ✅ **Tree Shaking**: Remove CSS não usado
- ✅ **Customização**: Altamente configurável