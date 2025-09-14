import React from 'react';

const Skeleton = () => {
  return (
    <div className="product-card" aria-label="Carregando produto...">
      <div className="product-image-container">
        <div className="skeleton-shimmer w-full h-full rounded-lg" />
      </div>
      
      <div className="skeleton-shimmer h-5 rounded mb-2 w-4/5" />
      <div className="skeleton-shimmer h-5 rounded mb-6 w-3/5" />
      <div className="skeleton-shimmer h-4 rounded mb-2 w-2/5" />
      <div className="skeleton-shimmer h-6 rounded mb-6 w-1/3" />
      <div className="skeleton-shimmer h-10 rounded" />
    </div>
  );
};

export default Skeleton;