import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// Import all 4 implementations
import CssGlobalApp from './01-css-global/App.jsx';
import CssModulesApp from './02-css-modules/App.jsx';
import TailwindApp from './03-tailwind/App.jsx';
import StyledComponentsApp from './04-styled-components/App.jsx';

// Import styles for CSS Global
import './01-css-global/styles.css';
import './03-tailwind/styles.css';

// Styled components for the navigation
const NavContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin: 0 0 2rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin: 0 0 2.5rem 0;
  font-size: 1.2rem;
  font-weight: 300;
`;

const NavButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavButton = styled(Link)`
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$active ? '#4F46E5' : 'white'};
  text-decoration: none;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 2px solid ${props => props.$active ? 'transparent' : 'rgba(255, 255, 255, 0.2)'};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:hover:before {
    left: 100%;
  }
`;

const ButtonIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  filter: ${props => props.$active ? 'none' : 'brightness(1.2)'};
`;

const ButtonTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const ButtonDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: ${props => props.$active ? 0.8 : 0.9};
  line-height: 1.4;
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 280px);
  padding-top: 2rem;
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #4F46E5;
  color: white;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: #4338CA;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
  }
`;

const versions = [
  {
    path: '/',
    name: 'CSS Global',
    icon: '📁',
    description: 'CSS tradicional com custom properties',
    component: CssGlobalApp
  },
  {
    path: '/css-modules',
    name: 'CSS Modules',
    icon: '🔒',
    description: 'Escopo local automático',
    component: CssModulesApp
  },
  {
    path: '/tailwind',
    name: 'Tailwind CSS',
    icon: '⚡',
    description: 'Framework utility-first',
    component: TailwindApp
  },
  {
    path: '/styled-components',
    name: 'Styled Components',
    icon: '💅',
    description: 'CSS-in-JS com ThemeProvider',
    component: StyledComponentsApp
  }
];

const Navigation = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <NavContainer>
        <Title>🛍️ Mini Loja Style</Title>
        <Subtitle>4 implementações da mesma interface com técnicas CSS diferentes</Subtitle>
        
        <NavButtons>
          {versions.map((version) => (
            <NavButton
              key={version.path}
              to={version.path}
              $active={location.pathname === version.path}
            >
              <ButtonIcon $active={location.pathname === version.path}>
                {version.icon}
              </ButtonIcon>
              <ButtonTitle>{version.name}</ButtonTitle>
              <ButtonDescription $active={location.pathname === version.path}>
                {version.description}
              </ButtonDescription>
            </NavButton>
          ))}
        </NavButtons>
      </NavContainer>

      <BackToTop onClick={scrollToTop} title="Voltar ao topo">
        ↑
      </BackToTop>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<CssGlobalApp />} />
            <Route path="/css-modules" element={<CssModulesApp />} />
            <Route path="/tailwind" element={<TailwindApp />} />
            <Route path="/styled-components" element={<StyledComponentsApp />} />
          </Routes>
        </ContentWrapper>
      </div>
    </Router>
  );
};

export default App;