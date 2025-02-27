// filepath: /C:/Users/Administrator/OneDrive/Desktop/E-commerce-website/ecommerce-website/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar'; // Import Navbar
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <Router>
      <ErrorBoundary>
        <Navbar /> {/* Add Navbar here */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart cartItems={cart} handleRemove={handleRemove} handleQuantityChange={handleQuantityChange} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);