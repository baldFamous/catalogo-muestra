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
          imageUrl: '/conj1.png',
          category: 'Categoria 1',
          brand: 'Marca 1',
        },
        {
          id: 2,
          name: 'Producto de Ejemplo 2',
          description: 'Descripción detallada del producto de ejemplo 2',
          price: 75.00,
          imageUrl: '/conj2.png',
          category: 'Categoria 2',
          brand: 'Marca 2',
        },
        {
          id: 3,
          name: 'Producto de Ejemplo 3',
          description: 'Descripción detallada del producto de ejemplo 3',
          price: 50.00,
          imageUrl: '/conj3.png',
          category: 'Categoria 2',
          brand: 'Marca 3',
        },
        {
          id: 4,
          name: 'Producto de Ejemplo 4',
          description: 'Descripción detallada del producto de ejemplo 4',
          price: 80.00,
          imageUrl: '/conj4.png',
          category: 'Categoria 1',
          brand: 'Marca 2',
        },
        {
          id: 5,
          name: 'Producto de Ejemplo 5',
          description: 'Descripción detallada del producto de ejemplo 5',
          price: 37.00,
          imageUrl: '/conj5.png',
          category: 'Categoria 2',
          brand: 'Marca 3',
        },
        {
          id: 6,
          name: 'Producto de Ejemplo 6',
          description: 'Descripción detallada del producto de ejemplo 6',
          price: 18.00,
          imageUrl: '/conj6.png',
          category: 'Categoria 3',
          brand: 'Marca 3',
        },
        {
          id: 7,
          name: 'Producto de Ejemplo 7',
          description: 'Descripción detallada del producto de ejemplo 7',
          price: 50.00,
          imageUrl: '/conj7.png',
          category: 'Categoria 2',
          brand: 'Marca 1',
        },
        {
          id: 8,
          name: 'Producto de Ejemplo 8',
          description: 'Descripción detallada del producto de ejemplo 8',
          price: 40.00,
          imageUrl: '/conj8.png',
          category: 'Categoria 2',
          brand: 'Marca 1',
        }
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