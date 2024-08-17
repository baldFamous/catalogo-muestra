import React from 'react';
import './filterSide.css';

function FilterSide() {
  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="category">Category</label>
        <select id="category" className="filter-select">
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="price">Price</label>
        <select id="price" className="filter-select">
          <option value="all">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="brand">Brand</label>
        <select id="brand" className="filter-select">
          <option value="all">All</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </div>
    </div>
  );
}

export default FilterSide;