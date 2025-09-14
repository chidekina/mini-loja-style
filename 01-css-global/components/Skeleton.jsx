import React from 'react';

const Skeleton = () => {
  return (
    <div className="product-card" aria-label="Carregando produto...">
      <div className="product-image-container">
        <div className="skeleton skeleton-image" />
      </div>
      
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-title-second" />
      <div className="skeleton skeleton-rating" />
      <div className="skeleton skeleton-price" />
      <div className="skeleton skeleton-button" />
    </div>
  );
};

export default Skeleton;