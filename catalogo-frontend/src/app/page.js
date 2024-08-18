import React from 'react';
import ProductGrid from "@/components/card/productGrid";
import FilterSide from "@/components/filters/filterSide";
import './page.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className="pageLayoutStyle">
      <FilterSide/>
      <div className="productLayoutStyle">
        <div className="header">
          <h1>Catalogo XXXX</h1>
          <Link href="/about">
            <button className="aboutButton"> Sobre el negocio</button>
          </Link>
        </div>
        <ProductGrid/>
      </div>
    </div>
  );
}

