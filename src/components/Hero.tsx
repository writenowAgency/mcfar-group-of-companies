import React, { useState } from 'react';
import './Hero.css';
import constructionImg from '../assets/construction.avif';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Expert Construction & Project Management</h1>
          <p className="slogan">"Full project handling from start to finish."</p>
          <p className="description">
            Quality building, plumbing, and interior solutions.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Free Quote</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          {!imgError ? (
            <img 
              src={constructionImg} 
              alt="Mcfar Group Construction Site" 
              className="hero-main-img" 
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="img-placeholder hero-main-img">
              <svg viewBox="0 0 24 24" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M3 7v14M21 7v14M9 21V11h6v10M2 7l10-5 10 5" />
              </svg>
              <span>CONSTRUCTION SITE</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
