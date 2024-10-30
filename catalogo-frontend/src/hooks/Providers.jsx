'use client';
import { CartProvider } from '@/hooks/CartContext';

const Providers = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default Providers;