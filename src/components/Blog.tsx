import React, { useState } from 'react';
import './Blog.css';
import constructionImg from '../assets/businessman-and-engineer-looking-at-a-building-blueprint-at-a-high-rise-building-construction-site-free-photo.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Sustainable Construction',
    excerpt: 'Exploring how new materials and building techniques are reducing the environmental impact of construction projects.',
    date: 'May 15, 2024',
    category: 'Industry Trends',
    image: constructionImg
  },
  {
    id: 2,
    title: 'Top 5 Renovation Tips for Your Home',
    excerpt: 'Whether you are updating a single room or doing a full overhaul, these tips will help you manage your project effectively.',
    date: 'June 2, 2024',
    category: 'Home Improvement',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Understanding Building Regulations in South Africa',
    excerpt: 'A guide to the legal requirements and safety standards you need to know before starting your next building project.',
    date: 'July 20, 2024',
    category: 'Legal & Safety',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop'
  }
];

const Blog: React.FC = () => {
  const [imgError, setImgError] = useState<{[key: number]: boolean}>({});

  const handleImgError = (id: number) => {
    setImgError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="blog-page">
      <div className="container">
        <h2 className="section-title">Our Blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-img-wrapper">
                {!imgError[post.id] ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="blog-card-img" 
                    onError={() => handleImgError(post.id)}
                  />
                ) : (
                  <div className="img-placeholder blog-card-img">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                  </div>
                )}
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">Read More &rarr;</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
