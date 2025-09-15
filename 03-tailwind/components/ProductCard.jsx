import React, { useState, useEffect } from 'react';
import Button from './Button';
import { formatPrice, renderStars } from '../../shared/data';

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

  const tagClasses = {
    'Novo': 'product-tag-new',
    'novo': 'product-tag-new',
    'Promo': 'product-tag-promo',
    'promo': 'product-tag-promo'
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        {product.tag && (
          <span 
            className={`product-tag ${tagClasses[product.tag] || 'product-tag-new'}`}
            aria-label={`Tag: ${product.tag}`}
          >
            {product.tag}
          </span>
        )}
        
        <img
          src={product.image}
          alt={product.title}
          className={`product-image ${imageLoaded ? 'product-image-loaded' : 'product-image-loading'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        
        <div className="product-rating" aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <span aria-hidden="true">{renderStars(product.rating)}</span>
          <span className="product-rating-text">({product.rating})</span>
        </div>
        
        <p className="product-price" aria-label={`Preço: ${formatPrice(product.price)}`}>
          {formatPrice(product.price)}
        </p>
        
        <Button
          variant="solid"
          onClick={handleAddToCart}
          aria-label={`Adicionar ${product.title} ao carrinho`}
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;