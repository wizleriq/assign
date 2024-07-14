// components/ProductList.js
import React from 'react';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const { data, isLoading, isError } = useProducts(1);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products</p>;

  return (
    <div className="product-grid">
      {data.products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          {/* Add more product details and Add to Cart button here */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(product => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold">{product.price}</p>
            </div>
          ))}
        </div>