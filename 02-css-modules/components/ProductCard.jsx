import React, { useState, useEffect } from 'react';
import Button from './Button';
import { formatPrice, renderStars } from '../../shared/data';
import styles from './ProductCard.module.css';

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
    <article className={styles.productCard}>
      <div className={styles.productImageContainer}>
        {product.tag && (
          <span 
            className={`${styles.productTag} ${styles[product.tag.toLowerCase()]}`}
            aria-label={`Tag: ${product.tag}`}
          >
            {product.tag}
          </span>
        )}
        
        <img
          src={product.image}
          alt={product.title}
          className={`${styles.productImage} ${imageLoaded ? styles.loaded : styles.loading}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </div>
      
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        
        <div className={styles.productRating} aria-label={`Avaliação: ${product.rating} de 5 estrelas`}>
          <span aria-hidden="true">{renderStars(product.rating)}</span>
          <span className={styles.productRatingText}>({product.rating})</span>
        </div>
        
        <p className={styles.productPrice} aria-label={`Preço: ${formatPrice(product.price)}`}>
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