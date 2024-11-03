'use client';
import { useCart } from '@/hooks/CartContext';
import { useState } from 'react';
import Cart from './Cart';

export default function CartButton() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  // Calcular el número total de artículos en el carrito
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <button onClick={handleOpenCart} style={{ top: '20px', right: '20px', padding: '10px 15px', cursor: 'pointer' }}>
        🛒 Carrito ({totalItems})
      </button>
      <Cart isOpen={isCartOpen} onRequestClose={handleCloseCart} />
    </>
  );
}