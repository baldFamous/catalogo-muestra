import React from 'react';
import './productCard.css';
import Image from 'next/image';

function ProductCard({ imageUrl, name, description, price, category }) {
  return (
    <div className="product-card">
      <Image
        className="product-card-image"
        src={'/240x150.png'}
        alt={name}
        width={240}
        height={150}
      />
      <div className="product-card-content">
        <h2 className="product-card-name">{name}</h2>
        <p className="product-card-description">{description}</p>
        <p className="product-card-category">{category}</p>
        <p className="product-card-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;