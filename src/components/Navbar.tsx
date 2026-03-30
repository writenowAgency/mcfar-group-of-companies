import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Mcfar Group Logo" className="logo-img" />
          </Link>
        </div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active-link' : ''}>Portfolio</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active-link' : ''}>Blog</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About Us</Link></li>
          <li><Link to="/contact" className={`btn btn-primary ${location.pathname === '/contact' ? 'active-btn' : ''}`}>Contact</Link></li>
        </ul>

        <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
