import Image from 'next/image';
import React from 'react';
import './ProductPreview.css';

export default function ProductPreview ({ product }) {
  return (
    <div className="product-preview">
      <div className="product-preview-info">
        <Image
          src={'/240x150.png'}
          alt={"img"}
          width={240}
          height={150}
          className="product-preview-image"
        />
        <h2 className="product-preview-name">{product.name}</h2>
        <p className="product-preview-price">Pecio: ${product.price}</p>
        <p className="product-preview-description">Descripción: {product.description}</p>

      </div>
    </div>
  );
}