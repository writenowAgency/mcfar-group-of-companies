import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Mcfar Group Logo" className="footer-logo-img" />
              </Link>
            </div>
            <p>Professional construction and project management services. We handle the full project from start to finish.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services">Building</Link></li>
              <li><Link to="/services">Plumbing</Link></li>
              <li><Link to="/services">Ceilings</Link></li>
              <li><Link to="/services">Floor & Roof Tiles</Link></li>
              <li><Link to="/services">Pavement</Link></li>
              <li><Link to="/services">Painting</Link></li>
              <li><Link to="/services">Built-In Cupboards</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Mcfar Group of Companies and Projects PTY (LTD). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
