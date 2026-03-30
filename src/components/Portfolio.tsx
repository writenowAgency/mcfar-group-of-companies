import React, { useState } from 'react';
import './Portfolio.css';
import pavementImg from '../assets/lush-backyard-garden-with-stone-path_537415-6288.jpg';
import cupboardsImg from '../assets/pexels-photo-15409513.jpg';

const projects = [
  {
    id: 1,
    title: 'Luxury Villa Renovation',
    location: 'Sandton, Johannesburg',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Modern Office Block',
    location: 'Midrand',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    category: 'Commercial'
  },
  {
    id: 3,
    title: 'Complex Tiling Project',
    location: 'Pretoria East',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    category: 'Finishing'
  },
  {
    id: 4,
    title: 'Retail Store Fit-out',
    location: 'Rosebank Mall',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop',
    category: 'Commercial'
  },
  {
    id: 5,
    title: 'Garden Paving & Landscaping',
    location: 'Centurion',
    image: pavementImg,
    category: 'Exterior'
  },
  {
    id: 6,
    title: 'Custom Kitchen Installation',
    location: 'Fourways',
    image: cupboardsImg,
    category: 'Residential'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [imgError, setImgError] = useState<{[key: number]: boolean}>({});

  const categories = ['All', 'Residential', 'Commercial', 'Finishing', 'Exterior'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const handleImgError = (id: number) => {
    setImgError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="portfolio-page">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                {!imgError[project.id] ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="portfolio-img" 
                    onError={() => handleImgError(project.id)}
                  />
                ) : (
                  <div className="img-placeholder portfolio-img">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                )}
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
