import React from 'react';
import './productCard.css';

function ProductCard({ title, description, price, imageUrl, category, author, rating, reviews }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card-image" />
      <div className="product-card-content">
        <p className="product-card-category">{category}</p>
        <h2 className="product-card-title">{title}</h2>
        <p className="product-card-author">{author}</p>
        <div className="product-card-rating">
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span className="product-card-reviews">({reviews})</span>
        </div>
        <p className="product-card-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;