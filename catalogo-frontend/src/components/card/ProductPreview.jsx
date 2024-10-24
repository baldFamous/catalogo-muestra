import Image from 'next/image';
import React from 'react';
import './ProductPreview.css';

export default function ProductPreview ({ product }) {
  return (
    <div>
      <div>
        <Image
          src={product.imageUrl}
          alt={"img"}
          width={300}
          height={270}
          className="product-preview-image"
        />
        <h2>{product.name}</h2>
        <p>Pecio: ${product.price}</p>
        <p>Descripción: {product.description}</p>

      </div>
    </div>
  );
}