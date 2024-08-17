import React from 'react';
import ProductCard from "@/components/card/productCard";


const products = [
  {
    id: 1,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 2,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 3,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 2,
    rating: 3,
    reviews: 15,
  },
  {
    id: 1,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 2,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 3,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 2,
    rating: 3,
    reviews: 15,
  },
  {
    id: 1,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 2,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 3,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 2,
    rating: 3,
    reviews: 15,
  },
  {
    id: 1,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 2,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 'Caterina Morar',
    rating: 3,
    reviews: 15,
  },
  {
    id: 3,
    title: 'The Documentary of Trout',
    description: 'Caterina Morar',
    price: 499.00,
    imageUrl: 'https://via.placeholder.com/240x150',
    category: 'Magazine',
    author: 2,
    rating: 3,
    reviews: 15,
  },
];

function ProductGrid() {
  return (
    <div style={gridStyle}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
          category={product.category}
          author={product.author}
          rating={product.rating}
          reviews={product.reviews}
        />
      ))}
    </div>
  );
}

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '16px',
};

export default ProductGrid;