'use client';

import { heroData } from '@/data';

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text fade-in">
          <h1>
            Hi, I&apos;m{' '}
            <span>{heroData.name}</span>
          </h1>
          
          <h2>{heroData.title}</h2>
          
          <p>{heroData.description}</p>

          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>

        <div className="hero-image slide-in-right delay-2">
          <div className="profile-placeholder">AW</div>
        </div>
      </div>
    </section>
  );
}
