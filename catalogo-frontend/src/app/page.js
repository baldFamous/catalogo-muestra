import React from 'react';
import ProductGrid from "@/components/card/productGrid";
import FilterSide from "@/components/filters/filterSide";
import './page.css';

export default function Home() {
  return (
    <div className="pageLayoutStyle">
      <FilterSide/>
      <div className="productLayoutStyle">
        <h1>Product Catalog</h1>
        <p>Browse our wide selection of products</p>
        <ProductGrid/>
      </div>
    </div>
  );
}

