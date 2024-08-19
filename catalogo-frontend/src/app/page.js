import React from 'react';
import ProductGrid from "@/components/card/productGrid";
import FilterSide from "@/components/filters/filterSide";
import './page.css';

export default function Home() {
  return (
    <div className="pageLayoutStyle">
      <FilterSide/>
      <div className="productLayoutStyle">
        <ProductGrid/>
      </div>
    </div>
  );
}

