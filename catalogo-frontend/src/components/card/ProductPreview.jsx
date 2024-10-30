import Image from 'next/image';
import React from 'react';
import './ProductPreview.css';
import { useCart } from '@/hooks/CartContext';


export default function ProductPreview ({ product }) {
    const { addToCart } = useCart();
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

        <button onClick={() => addToCart(product)} style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}>
        Añadir al Carrito
      </button>

      </div>
    </div>
  );
}