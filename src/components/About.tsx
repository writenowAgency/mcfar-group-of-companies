import React, { useState } from 'react';
import './About.css';
import logo from '../assets/logo.jpg';

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image">
          {!imgError ? (
            <img 
              src={logo} 
              alt="Mcfar Group Logo" 
              className="about-main-img" 
              style={{ objectFit: 'contain', padding: '2rem', backgroundColor: '#ffffff' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="img-placeholder about-main-img">
              <svg viewBox="0 0 24 24" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>MCFAR GROUP TEAM</span>
            </div>
          )}
        </div>
        <div className="about-content">
          <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>About Mcfar Group</h2>
          <p className="about-text">
            Mcfar Group of Companies and Projects PTY (LTD) is a leading construction and project management firm dedicated to transforming visions into reality. With years of experience in the industry, we have built a reputation for excellence, reliability, and unparalleled craftsmanship.
          </p>
          <p className="about-text">
            Our unique value proposition lies in our comprehensive "start to finish" approach. We believe that a project is more than just a building; it's a dream being realized. That's why we manage every aspect of the project, from the initial foundation and structural work to the final touches of painting and custom built-in cupboards.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Turnkey</span>
              <span className="stat-label">Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
