'use client';
import { useCart } from '@/hooks/CartContext';
import Modal from 'react-modal';


export default function Cart({ isOpen, onRequestClose }) {
  const { cartItems, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    updateQuantity(productId, quantity);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Carrito de Compras"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          maxWidth: '600px',
          width: '90%',
          padding: '20px',
        },
      }}
    >
      <h2>Carrito de Compras</h2>
      <button onClick={onRequestClose} style={{ float: 'right', padding: '5px 10px' }}>Cerrar</button>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <div>
                <h4>{item.name}</h4>
                <p>Precio: ${item.price}</p>
                <p>Marca: {item.brand}</p>
              </div>
              <div>
                <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  style={{ width: '60px', marginLeft: '5px' }}
                />
                <button onClick={() => removeFromCart(item.id)} style={{ display: 'block', marginTop: '5px', padding: '5px 10px', cursor: 'pointer' }}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={clearCart} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#f44336', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Vaciar Carrito
          </button>
          {/* Puedes agregar un botón para proceder al pago aquí */}
        </div>
      )}
    </Modal>
  );
}