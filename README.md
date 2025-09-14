# 🛍️ Mini Loja Style - 4 Implementações CSS

Este projeto demonstra **4 abordagens diferentes** para implementar a mesma interface de e-commerce, cada uma usando uma técnica de CSS distinta.

## 🎯 O que foi implementado

Uma **loja online responsiva** com:

- **Navbar fixa**: Logo, toggle de tema (claro/escuro) e badge do carrinho
- **Grid de produtos responsivo**: Adapta-se automaticamente ao tamanho da tela
- **Cards de produto**: Com imagem, título, preço, rating, tags e botão de ação
- **Estados interativos**: Hover effects, focus visível, loading skeletons
- **Dark mode**: Alternância de tema com persistência no localStorage
- **Acessibilidade**: Navegação por teclado, ARIA labels, contraste adequado

## 📱 Breakpoints Responsivos

- **≤480px**: 1 coluna (mobile)
- **481–768px**: 2 colunas (tablet)
- **769–1024px**: 3 colunas (desktop)
- **≥1025px**: 4 colunas (large desktop)

## 🎨 4 Implementações

### 1. 📁 CSS Global (`01-css-global/`)
**CSS tradicional com custom properties**

- ✅ CSS variables para tokens de design
- ✅ Classes globais com naming convention
- ✅ Theme switching via `data-theme`
- 📖 [Ver README](./01-css-global/README.md)

### 2. 🔒 CSS Modules (`02-css-modules/`)
**Escopo local automático**

- ✅ Classes com escopo local
- ✅ Naming conventions (camelCase)
- ✅ Type safety e IntelliSense
- 📖 [Ver README](./02-css-modules/README.md)

### 3. ⚡ Tailwind CSS (`03-tailwind/`)
**Framework utility-first**

- ✅ Classes utilitárias compostas
- ✅ Configuração customizada
- ✅ Dark mode nativo
- 📖 [Ver README](./03-tailwind/README.md)

### 4. 💅 Styled Components (`04-styled-components/`)
**CSS-in-JS com ThemeProvider**

- ✅ Estilos como componentes
- ✅ Props dinâmicas
- ✅ Theme Provider global
- 📖 [Ver README](./04-styled-components/README.md)

## 🚀 Como executar

### Executar o projeto com navegação
```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` para ver todas as 4 implementações com navegação entre elas.

### 🧭 Navegação entre versões

O projeto agora inclui um **App.jsx principal** com `react-router-dom` que permite navegar entre as 4 implementações:

- **`/`** → CSS Global
- **`/css-modules`** → CSS Modules  
- **`/tailwind`** → Tailwind CSS
- **`/styled-components`** → Styled Components

### Interface de navegação

- 🎨 **Design gradient** com cards interativos
- ⚡ **Transições suaves** e hover effects
- 📱 **Responsiva** (grid adaptativo)
- 🔄 **Estado ativo** destacado
- ⬆️ **Botão "voltar ao topo"** fixo

## 📦 Dependências

### Base
- React 19.1.0
- Vite (build tool)

### CSS Modules
- Configuração nativa do Vite

### Tailwind CSS
- tailwindcss ^4.1.13
- @tailwindcss/vite ^4.1.13

### Styled Components
- styled-components ^6.1.19

## 🎨 Design System

### Cores
- **Primary Light**: `#4F46E5`
- **Primary Dark**: `#6366F1`
- **Success**: `#10B981` / `#34D399`
- **Warning**: `#F59E0B` / `#FBBF24`
- **Error**: `#EF4444` / `#F87171`

### Espaçamentos
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)

### Transições
- **Fast**: 150ms
- **Normal**: 200ms
- **Slow**: 250ms

## ✅ Features Implementadas

### 🎯 Funcionalidades Core
- [x] Navbar fixa e responsiva
- [x] Toggle de tema com persistência
- [x] Badge do carrinho com contador
- [x] Grid responsivo de produtos
- [x] Cards com todas as informações

### 🎭 Estados e Interações
- [x] Hover effects (elevação e sombra)
- [x] Focus rings para acessibilidade
- [x] Loading skeletons com shimmer
- [x] Lazy loading de imagens
- [x] Estados disabled dos botões

### 🎨 Variantes de Botão
- [x] **Solid**: Fundo sólido
- [x] **Outline**: Apenas borda
- [x] **Ghost**: Transparente

### ♿ Acessibilidade
- [x] Navegação por teclado
- [x] ARIA labels e descriptions
- [x] Contraste ≥ 4.5:1
- [x] Screen reader friendly

### 📱 Responsividade
- [x] Mobile-first design
- [x] Breakpoints exatos conforme especificado
- [x] Grid adaptativo
- [x] Imagens responsivas

## 🧪 Como testar

1. **Responsividade**: Redimensione a janela para testar os breakpoints
2. **Dark Mode**: Clique no botão de lua/sol na navbar
3. **Interações**: Teste hover, focus e clique nos elementos
4. **Loading**: Recarregue a página para ver os skeletons
5. **Acessibilidade**: Navegue usando apenas o teclado (Tab, Enter, Space)

## 📊 Comparação das Abordagens

| Aspecto | CSS Global | CSS Modules | Tailwind | Styled Components |
|---------|------------|-------------|----------|-------------------|
| **Bundle Size** | 🟢 Pequeno | 🟢 Pequeno | 🟡 Médio | 🔴 Grande |
| **Developer Experience** | 🟡 Básico | 🟢 Bom | 🟢 Excelente | 🟢 Excelente |
| **Manutenibilidade** | 🔴 Difícil | 🟢 Boa | 🟢 Boa | 🟢 Excelente |
| **Performance** | 🟢 Excelente | 🟢 Excelente | 🟢 Boa | 🟡 Boa |
| **Learning Curve** | 🟢 Fácil | 🟢 Fácil | 🟡 Médio | 🟡 Médio |

## 🎯 Critérios de Aceite ✅

- ✅ Breakpoints exatamente como descritos
- ✅ Dark mode com persistência no localStorage
- ✅ Focus ring visível em todos os elementos interativos
- ✅ Skeleton loading sem layout shift
- ✅ Variantes de botão consistentes nos dois temas
- ✅ Organização clara de pastas por abordagem
- ✅ Uso de tokens de design (cores, espaçamentos, raios, sombras)
- ✅ README detalhado para cada implementação
