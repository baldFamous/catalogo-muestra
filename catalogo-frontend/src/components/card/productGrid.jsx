'use client';

import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import ProductCard from "@/components/card/productCard";
import ProductPreview from "@/components/card/ProductPreview";
import './ProductPreview.css';

const products = [
  {
    id: 1,
    name: 'Producto de Ejemplo 1',
    description: 'Descripción detallada del producto de ejemplo 1',
    price: 10.00,
    imageUrl: '',
    category: 'Categoría 1',
  },
  {
    id: 2,
    name: 'Producto de Ejemplo 2',
    description: 'Descripción detallada del producto de ejemplo 2',
    price: 20.00,
    imageUrl: '/flores.png',
    category: 'Categoría 2',
  },
  {
    id: 3,
    name: 'Producto de Ejemplo 3',
    description: 'Descripción detallada del producto de ejemplo 3',
    price: 30.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 3',
  },
  {
    id: 4,
    name: 'Producto de Ejemplo 4',
    description: 'Descripción detallada del producto de ejemplo 4',
    price: 40.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 4',
  },
  {
    id: 5,
    name: 'Producto de Ejemplo 5',
    description: 'Descripción detallada del producto de ejemplo 5',
    price: 50.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 5',
  },
  {
    id: 6,
    name: 'Producto de Ejemplo 6',
    description: 'Descripción detallada del producto de ejemplo 6',
    price: 60.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 6',
  },
  {
    id: 7,
    name: 'Producto de Ejemplo 7',
    description: 'Descripción detallada del producto de ejemplo 7',
    price: 70.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 7',
  },
  {
    id: 8,
    name: 'Producto de Ejemplo 8',
    description: 'Descripción detallada del producto de ejemplo 8',
    price: 80.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 8',
  },
  {
    id: 9,
    name: 'Producto de Ejemplo 9',
    description: 'Descripción detallada del producto de ejemplo 9',
    price: 90.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 9',
  },
  {
    id: 10,
    name: 'Producto de Ejemplo 10',
    description: 'Descripción detallada del producto de ejemplo 10',
    price: 100.00,
    imageUrl: '/240x150.png',
    category: 'Categoría 10',
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
