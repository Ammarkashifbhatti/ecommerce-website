import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'credit_card'
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
    if (!/^\d{11}$/.test(formData.phone)) newErrors.phone = "Enter a valid 11-digit phone number!";
    if (!formData.address.trim()) newErrors.address = "Address is required!";
    if (!formData.city.trim()) newErrors.city = "City is required!";
    if (!/^\d{5}$/.test(formData.zip)) newErrors.zip = "Enter a valid 5-digit ZIP code!";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Checkout submitted:', formData);
    alert('Order placed successfully! ✅');
  };

  return (
    
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h1>Checkout</h1>

        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div>
          <label>ZIP Code:</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
          {errors.zip && <p className="error">{errors.zip}</p>}
        </div>

        <div>
          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
