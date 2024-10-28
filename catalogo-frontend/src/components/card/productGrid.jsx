'use client';

import React, {useState} from 'react';
import Modal from 'react-modal';
import ProductCard from "@/components/card/productCard";
import ProductPreview from "@/components/card/ProductPreview";
import './ProductPreview.css';


export default function ProductGrid({ products }) {
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
    <div className="gridStyle">
      {products.length === 0 ? (
        <p>No se encontraron productos con los filtros seleccionados.</p>
      ) : (
        products.map(product => (
          <div key={product.id} onClick={() => openModal(product)}>
            <ProductCard product={product} />
          </div>
        ))
      )}

      <Modal
        className="modal-content"
        isOpen={showModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button className="modal-button" onClick={closeModal}>Cerrar</button>
        {selectedProduct && (
          <ProductPreview product={selectedProduct} />
        )}
      </Modal>
    </div>
  );
}