'use client';

import Image from 'next/image';
import { heroData } from '@/data';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactAndFocus = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      
      // Use scroll event listener to detect when scroll completes
      let scrollTimeout: NodeJS.Timeout;
      
      const handleScrollEnd = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Scroll has stopped, focus the input
          const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
          if (nameInput) {
            nameInput.focus();
          }
          // Remove the event listener after focusing
          window.removeEventListener('scroll', handleScrollEnd);
        }, 100); // 100ms delay after scroll stops
      };
      
      // Add scroll listener
      window.addEventListener('scroll', handleScrollEnd, { passive: true });
    }
  };

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
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            
            <button 
              className="btn btn-secondary"
              onClick={scrollToContactAndFocus}
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-image slide-in-right delay-2">
          <Image
            src={heroData.image}
            alt={`${heroData.name} profile photo`}
            width={400}
            height={400}
            className="profile-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
