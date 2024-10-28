'use client'
import React, {useState} from 'react';
import './filterSide.css';


export default function FilterSide({ onApplyFilters }) {
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState('all');
  const [brand, setBrand] = useState('all');

  const handleFilter = () => {
    const selectedFilters = {
      category,
      price,
      brand,
    };
    onApplyFilters(selectedFilters);
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-top">
        <h2>Filtros</h2>
        <button onClick={handleFilter}>Aplicar Filtros</button>
      </div>

      {/* Filtro de Categoría */}
      <div className="filter-group">
        <label htmlFor="category">Categorías</label>
        <select
          id="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="filter-select"
        >
          <option value="all">Todos</option>
          <option value="Categoria 1">Categoria 1</option>
          <option value="Categoria 2">Categoria 2</option>
          <option value="Categoria 3">Categoria 3</option>
        </select>
      </div>

      {/* Filtro de Precio */}
      <div className="filter-group">
        <label htmlFor="price">Precio</label>
        <select
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="filter-select"
        >
          <option value="all">Todos</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>

      {/* Filtro de Marca */}
      <div className="filter-group">
        <label htmlFor="brand">Marca</label>
        <select
          id="brand"
          value={brand}
          onChange={e => setBrand(e.target.value)}
          className="filter-select"
        >
          <option value="all">Todos</option>
          <option value="Marca 1">Marca 1</option>
          <option value="Marca 2">Marca 2</option>
          <option value="Marca 3">Marca 3</option>
        </select>
      </div>
    </div>
  );
}

