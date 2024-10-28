'use client'

import { useState, useEffect } from 'react';
import ProductGrid from "@/components/card/productGrid";
import FilterSide from "@/components/filters/filterSide";
import './page.css';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    brand: 'all',
  });


  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = [
        {
          id: 1,
          name: 'Producto de Ejemplo 1',
          description: 'Descripción detallada del producto de ejemplo 1',
          price: 10.00,
          imageUrl: '',
          category: 'Categoria 1',
          brand: 'Marca 1',
        },
        {
          id: 2,
          name: 'Producto de Ejemplo 2',
          description: 'Descripción detallada del producto de ejemplo 2',
          price: 75.00,
          imageUrl: '',
          category: 'Categoria 2',
          brand: 'Marca 2',
        },
        // Agrega más productos según tus necesidades
      ];
      setProducts(productsData);
      setFilteredProducts(productsData);
    };

    fetchProducts();
  }, []);

  const handleFilter = (selectedFilters) => {
    setFilters(selectedFilters);

    let filtered = products;

    if (selectedFilters.category && selectedFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === selectedFilters.category);
    }

    if (selectedFilters.price && selectedFilters.price !== 'all') {
      const [min, max] = selectedFilters.price.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    if (selectedFilters.brand && selectedFilters.brand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedFilters.brand);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="pageLayoutStyle">
      <FilterSide onApplyFilters={handleFilter} />
      <div className="productLayoutStyle">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}