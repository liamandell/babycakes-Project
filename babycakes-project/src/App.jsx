import React from 'react';
import './App.css';
import pieImage from './images/image19.jpeg';
import logo from './images/logo.png';
import box from './images/image12.png';
export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Bakery Logo" className="logo-img" />
          <h1 className="logo-text">Baby Cakes Bakery</h1>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="about" className="section fade-in">
        <h3>About Us</h3>
        <p>
          We are a family-owned bakery serving the Port Arthur community with love and freshly baked treats. Our passion
          for quality ingredients and traditional recipes is what makes every bite memorable.
        </p>
      </section>

      <section id="menu" className="section fade-in">
        <h3>Menu Highlights</h3>
        <div className="menu-items">
          <div className="menu-item">
            <img src={pieImage} alt="Pie" className="menu-img" />
            <h4>Cinnamon Role </h4>
            <p>our southern classic cinnamon role.</p>
          </div>
          <div className="menu-item">
            <img src={box} alt="Menu item" className="menu-img" />

            <h4>Mix and Match</h4>
            <p>mix and match any pastires for the whole family</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section fade-in">
        <h3>Contact Us</h3>
        <p>Email: portarthurbakery@example.com</p>
        <p>Phone: (409) 123-4567</p>
        <p>Address: 123 Main St, Port Arthur, TX</p>
      </section>
    </div>
  );
}