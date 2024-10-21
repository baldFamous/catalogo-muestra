'use client';

import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import ProductCard from "@/components/card/productCard";
import ProductPreview from "@/components/card/ProductPreview";
import './ProductPreview.css';

const products = [
  {
    id: 1,
    name: 'Cable 2mm',
    description: 'Cable de 2mm de grosor',
    price: 11.96,
    imageUrl: '/240x150.png',
    category: 'Cables',
  },
  {
    id: 2,
    name: 'Interruptor de Luz',
    description: 'Interruptor de luz de alta calidad',
    price: 5.50,
    imageUrl: '/flores.png',
    category: 'Interruptores',
  },
  {
    id: 3,
    name: 'Enchufe Doble',
    description: 'Enchufe doble con toma de tierra',
    price: 8.75,
    imageUrl: '/240x150.png',
    category: 'Enchufes',
  },
  {
    id: 4,
    name: 'Tubo LED 18W',
    description: 'Tubo LED de 18W y 120cm de largo',
    price: 12.30,
    imageUrl: '/240x150.png',
    category: 'Iluminación',
  },
  {
    id: 5,
    name: 'Caja de Distribución',
    description: 'Caja de distribución de 12 módulos',
    price: 25.40,
    imageUrl: '/240x150.png',
    category: 'Distribución',
  },
  {
    id: 6,
    name: 'Regleta de Enchufes',
    description: 'Regleta de enchufes con protección',
    price: 15.20,
    imageUrl: '/240x150.png',
    category: 'Enchufes',
  },
  {
    id: 7,
    name: 'Bombilla LED 9W',
    description: 'Bombilla LED de bajo consumo 9W',
    price: 3.60,
    imageUrl: '/240x150.png',
    category: 'Iluminación',
  },
  {
    id: 8,
    name: 'Timbre Eléctrico',
    description: 'Timbre eléctrico con sonido fuerte',
    price: 9.80,
    imageUrl: '/240x150.png',
    category: 'Accesorios',
  },
  {
    id: 9,
    name: 'Caja de Conexiones',
    description: 'Caja de conexiones estanca',
    price: 6.50,
    imageUrl: '/240x150.png',
    category: 'Accesorios',
  },
  {
    id: 10,
    name: 'Cable HDMI 2m',
    description: 'Cable HDMI de 2 metros, alta velocidad',
    price: 14.99,
    imageUrl: '/240x150.png',
    category: 'Cables',
  },
  {
    id: 11,
    name: 'Cinta Aislante',
    description: 'Cinta aislante resistente al calor',
    price: 2.30,
    imageUrl: '/240x150.png',
    category: 'Accesorios',
  },
  {
    id: 12,
    name: 'Foco Proyector LED',
    description: 'Foco proyector LED de 50W',
    price: 19.90,
    imageUrl: '/240x150.png',
    category: 'Iluminación',
  },
  {
    id: 13,
    name: 'Detector de Movimiento',
    description: 'Detector de movimiento para iluminación',
    price: 13.25,
    imageUrl: '/240x150.png',
    category: 'Accesorios',
  },
  {
    id: 14,
    name: 'Adaptador de Corriente',
    description: 'Adaptador de corriente universal',
    price: 7.40,
    imageUrl: '/240x150.png',
    category: 'Accesorios',
  },
  {
    id: 15,
    name: 'Alargador Eléctrico 5m',
    description: 'Alargador eléctrico de 5 metros',
    price: 9.95,
    imageUrl: '/240x150.png',
    category: 'Cables',
  },
];

export default function ProductGrid() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setShowModal(false);
    };

  return (
    <div style={gridStyle}>
      {products.map(product => (
          <div key={product.id} onClick={() => openModal(product)}>
            <ProductCard product={product}/>
          </div>
      ))}
      <Modal className="modal-content" isOpen={showModal}>
        <button className="modal-button" onClick={() => closeModal()}>Close</button>
        {selectedProduct && (
            <ProductPreview product={selectedProduct} />
        )}
      </Modal>
    </div>
  );
}
const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '16px',
};
