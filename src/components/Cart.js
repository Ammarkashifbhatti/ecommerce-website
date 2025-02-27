import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, handleRemove, handleQuantityChange }) => {
  return (
    <div className='cart-container'>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className='checkout-button-container'>
            <button className='checkout-button'>
              <Link to="/Checkout"><p>Checkout</p></Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};

export default Cart;