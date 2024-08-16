// src/Home.jsx
import React from 'react';
import './Home.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Your Dynamic Business Card Provider</h1>
        <p>Create and share your digital business card in seconds.</p>
        <a href="/card-creation" className="cta-button">Get Started</a>
        
        <Link to="/login" className="cta-button">Login</Link>
      </header>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Easy Card Creation</h3>
            <p>Create a customized digital business card with your personal or business details.</p>
          </div>
          <div className="feature-item">
            <h3>QR Code Sharing</h3>
            <p>Instantly share your card via a unique URL or QR code.</p>
          </div>
          <div className="feature-item">
            <h3>Profile Management</h3>
            <p>Keep your information up to date with easy profile management features.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Us?</h2>
        <ul className="benefits-list">
          <li>Fast and user-friendly card creation process.</li>
          <li>Modern and responsive design for any device.</li>
          <li>Secure and easy sharing options with QR codes and URLs.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2024 Business Card Provider. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
