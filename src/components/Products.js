import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import product from '../assets/product.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
const Products = ({ addToCart }) => {
  const productList = [
    { id: 1, name: 'Nike Mens Air Force 1 07 LV8', price: 20, image: product},
    { id: 2, name: 'Nike Mens Air Force 1 07 -white', price: 40, image: product2 },
    { id: 3, name: 'Air Force 1 Low Paris - Black', price: 30, image: product3 },
    { id: 4, name: 'Nike Mens Air Force 1 Low 07-rainbow ', price: 50, image: product4 },
  ];

  return (
    <div className='product-container'>
      <h1>Products List</h1>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Products;
