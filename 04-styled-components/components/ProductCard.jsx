import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import { formatPrice, renderStars } from '../../shared/data';

const ProductCardContainer = styled.article`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  transition: all ${props => props.theme.transitions.normal};
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  &:focus-within {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  margin-bottom: ${props => props.theme.spacing.lg};
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.border};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity ${props => props.theme.transitions.normal};

  ${props => props.loading && css`
    opacity: 0;
  `}

  ${props => props.loaded && css`
    opacity: 1;
  `}
`;

const ProductTag = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing.sm};
  right: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;

  ${props => props.variant === 'novo' && css`
    background-color: ${props.theme.colors.success};
    color: white;
  `}

  ${props => props.variant === 'promo' && css`
    background-color: ${props.theme.colors.warning};
    color: white;
  `}
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 ${props => props.theme.spacing.sm} 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
`;

const ProductRating = styled.div`
  color: ${props => props.theme.colors.warning};
  margin-bottom: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
`;

const ProductRatingText = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ProductCard = ({ product, onAddToCart, isLoading }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (product?.image) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = product.image;
    }
  }, [product?.image]);

  if (isLoading || !product) {
    return <div>Carregando...</div>;
  }

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <ProductCardContainer>
      <ProductImageContainer>
        {product.tag && (
          <ProductTag 
            variant={product.tag.toLowerCase()}
            aria-label={`Tag: ${product.tag}`}
          >
            {product.tag}
          </ProductTag>
        )}
        
        <ProductImage
          src={product.image}
          alt={product.title}
          loading={!imageLoaded}
          loaded={imageLoaded}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </ProductImageContainer>
      
      <div>
        <ProductTitle>{product.title}</ProductTitle>
        
        <ProductRating aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <span aria-hidden="true">{renderStars(product.rating)}</span>
          <ProductRatingText>({product.rating})</ProductRatingText>
        </ProductRating>
        
        <ProductPrice aria-label={`Preço: ${formatPrice(product.price)}`}>
          {formatPrice(product.price)}
        </ProductPrice>
        
        <Button
          variant="solid"
          onClick={handleAddToCart}
          aria-label={`Adicionar ${product.title} ao carrinho`}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;