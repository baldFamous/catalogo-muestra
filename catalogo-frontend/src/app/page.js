import React from 'react';
import ProductGrid from "@/components/card/productGrid";
import FilterSide from "@/components/filters/filterSide";

export default function Home() {
  return (
    <div style={pageLayoutStyle}>
      <FilterSide/>
      <div style={productLayoutStyle}>
        <h1>Product Catalog</h1>
        <p>Browse our wide selection of products</p>
        <ProductGrid/>
      </div>
    </div>
  );
}

const pageLayoutStyle = {
  display: 'flex',
  gap: '20px',
  padding: '20px',
};

const productLayoutStyle = {
  flex: 1,
};
