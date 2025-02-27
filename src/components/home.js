import React from 'react';
import { color, motion } from "framer-motion";
import './Home.css';
import product1 from '../assets/product1.jpg';
import image2 from '../assets/image2.webp'; // Ensure the correct path
const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Air Force', image: product1 },
    { id: 2, name: 'Sneakers', image: product1 },
    { id: 3, name: 'Jordans', image: product1 },
    { id: 4, name: 'Boots', image: product1 },
    
  ];
  const About_image = [
    { id: 1, image: image2 }  // ✅ Added 'id'
  ];

  return (
    <div className="home-container">
      <h1> Ammar's collection</h1>
      <section>
        <p>Welcome to Ammar's Collection
        Step into a world of style and comfort with Ammar's Collection—your go-to destination for trendy and high-quality footwear. Whether you're looking for classic sneakers, stylish casuals, or performance-driven shoes, we have something for everyone. Our collection is crafted with precision, ensuring durability, elegance, and ultimate comfort in every step.

At Ammar's Collection, we believe that footwear is more than just an accessory—it's a statement. Our carefully selected designs cater to every occasion, from casual outings to special events, helping you express your personality with confidence. With a commitment to quality and affordability, we bring you the latest trends without compromising on comfort.

Explore our featured products and elevate your fashion game with the newest designs. Find the perfect pair that matches your style, and enjoy a seamless shopping experience with us. Shop now and walk with confidence! 🚀👟</p>
        <h2>Featured Products</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name}  />
              
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

<section className="info-section">
  {/* About Us - Slides in from the left */}
  <motion.div 
    className="about-us"
    initial={{ opacity: 0, x: -50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
  >
    <h2>About Us</h2>
    <p style={{ textAlign: 'justify' }} >
      At Ammar's Collection, we believe that the right pair of shoes can transform your look and boost your confidence.  
      Our carefully curated selection offers the latest trends, unmatched comfort, and high-quality craftsmanship—all at affordable prices.  
      Whether you're stepping out for a casual day or making a bold fashion statement, we've got the perfect pair for you.  
      Stay stylish, stay comfortable—shop with us today! 🏆👞👟
    </p>
  </motion.div>  

  {/* Image - Slides in from the right */}
  <motion.div 
    className="image-container"
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
  >
    {About_image.map(product => (
    <img key={product.id} src={product.image} alt="About us" className='About_image'/>
    ))}
  </motion.div>      
</section>
    </div>
  );
};

export default Home;