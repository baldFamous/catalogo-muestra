import React from 'react';
import './filterSide.css';

function FilterSide() {
  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>

      <div className="filter-group">
        <label htmlFor="category">Categorías</label>
        <select id="category" className="filter-select">
          <option value="all">Todos</option>
          <option value="category1">Categoria 1</option>
          <option value="category2">Categoria 2</option>
          <option value="category3">Categoria 3</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price">Precio</label>
        <select id="price" className="filter-select">
          <option value="all">Todos</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="brand">Marca</label>
        <select id="brand" className="filter-select">
          <option value="all">Todos</option>
          <option value="brand1">Marca 1</option>
          <option value="brand2">Marca 2</option>
          <option value="brand3">Marca 3</option>
        </select>
      </div>

    </div>
  );
}

export default FilterSide;