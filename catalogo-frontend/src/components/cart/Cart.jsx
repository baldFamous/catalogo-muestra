'use client';
import { useCart } from '@/hooks/CartContext';
import Modal from 'react-modal';
import './Cart.css';

export default function Cart({ isOpen, onRequestClose }) {
  const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    updateQuantity(productId, quantity);
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Carrito de Compras"
    >
      <h2>Carrito de Compras</h2>
      <button onClick={onRequestClose} className="close-button">Cerrar</button><br/>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Precio: ${item.price}</p>
                <p>Marca: {item.brand}</p>
              </div>
              <div className="item-actions">
                <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="quantity-input"
                />
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart} className="clear-cart-button">
            Vaciar Carrito
          </button>
          {/* Puedes agregar un botón para proceder al pago aquí */}
        </div>
      )}
    </Modal>
  );
}