import React, { useState } from 'react';
import './Services.css';
import tilesImg from '../assets/luxury-living.jpg';
import pavementImg from '../assets/pavement.jpg';
import cupboardsImg from '../assets/cupboards.jpg';

const servicesList = [
  {
    title: 'Building',
    description: 'Complete construction services from foundation to finish, ensuring structural integrity and excellence.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v14M21 7v14M9 21V11h6v10M2 7l10-5 10 5" />
      </svg>
    )
  },
  {
    title: 'Plumbing',
    description: 'Expert plumbing installations and repairs for residential and commercial projects.',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M5 12h14M2 17l5 5M17 17l5 5M2 7l5-5M17 7l5-5" />
      </svg>
    )
  },
  {
    title: 'Ceilings',
    description: 'Professional ceiling installations, from standard board to ornate decorative designs.',
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    )
  },
  {
    title: 'Floor & Roof Tiles',
    description: 'Premium tiling solutions for floors and roofs, combining durability with aesthetic appeal.',
    image: tilesImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    )
  },
  {
    title: 'Pavement',
    description: 'High-quality paving services for driveways, walkways, and outdoor spaces.',
    image: pavementImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
      </svg>
    )
  },
  {
    title: 'Painting',
    description: 'Interior and exterior painting services that bring color and life to your spaces.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 14h6M8 21v-6a3 3 0 0 1 3-3h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v17" />
        <path d="M3 12v9" />
      </svg>
    )
  },
  {
    title: 'Built-In Cupboards',
    description: 'Custom-designed built-in cupboards for kitchens, bedrooms, and offices.',
    image: cupboardsImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M7 8h1M7 12h1M16 8h1M16 12h1" />
      </svg>
    )
  }
];

const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="service-card">
      <div className="service-img-wrapper">
        {!imgError ? (
          <img 
            src={service.image} 
            alt={service.title} 
            className="service-card-img" 
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="img-placeholder service-card-img">
            {service.icon}
          </div>
        )}
        <div className="service-icon-overlay">
          {service.icon}
        </div>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
