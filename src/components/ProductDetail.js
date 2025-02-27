import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  const productDetails = {
    1: { name: 'Product 1', price: '$10', description: 'Description for Product 1', image: 'path/to/image1.jpg' },
    2: { name: 'Product 2', price: '$20', description: 'Description for Product 2', image: 'path/to/image2.jpg' },
    3: { name: 'Product 3', price: '$30', description: 'Description for Product 3', image: 'path/to/image3.jpg' },
    4: { name: 'Product 4', price: '$40', description: 'Description for Product 3', image: 'path/to/image3.jpg' },
  };

  const product = productDetails[id];

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductDetail;
