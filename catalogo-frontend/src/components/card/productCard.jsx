import React from 'react';
import './productCard.css';
import Image from 'next/image';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Image
        className="product-card-image"
        src={product.imageUrl}
        alt={product.name}
        width={240}
        height={150}
      />
      <div className="product-card-content">
        <h2 className="product-card-name">{product.name}</h2>
        <p className="product-card-description">{product.description}</p>
        <p className="product-card-category">{product.category}</p>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;