import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Full Project Management',
      text: 'We handle everything from the initial planning and building to the final painting and built-in cupboards.'
    },
    {
      title: 'Quality Craftsmanship',
      text: 'Our team consists of skilled professionals dedicated to delivering excellence in every detail.'
    },
    {
      title: 'Reliable & Timely',
      text: 'We respect your time and budget, ensuring projects are completed on schedule without compromising quality.'
    },
    {
      title: 'Turnkey Solutions',
      text: 'Move into a perfectly finished space. Our "start to finish" approach means no hassle for you.'
    }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="container why-us-container">
        <div className="why-us-content">
          <h2 className="section-title" style={{textAlign: 'left', marginLeft: 0}}>Why Choose Us?</h2>
          <p className="subtitle">Discover the advantage of working with a team that values your vision.</p>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-item">
                <div className="reason-dot"></div>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-us-visual">
          <img 
            src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1000" 
            alt="Interior Work" 
            className="why-us-img" 
          />
          <div className="slogan-badge-overlay">
            <h3>"We handle the full project from start to finish."</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
