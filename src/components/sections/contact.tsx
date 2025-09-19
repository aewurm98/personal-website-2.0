'use client';

import { siteConfig } from '@/data';

export default function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title fade-in">Get In Touch</div>
        <div className="section-subtitle fade-in delay-1">
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </div>

        <div className="contact-content">
          <div className="slide-in-left delay-2">
            <div className="contact-form">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
              
              <form className="space-y-6">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" name="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your.email@example.com" name="email" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="What's this about?" name="subject" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} placeholder="Tell me about your project or opportunity..."></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="slide-in-right delay-3">
            <div className="contact-info">
              <h3>Let&apos;s Connect</h3>
              <p>I&apos;m always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!</p>
            </div>
            
            <div className="contact-methods">
              <a href={`mailto:${siteConfig.email}`} className="contact-method">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>{siteConfig.email}</p>
                </div>
              </a>
              
              <a href={`tel:${siteConfig.phone}`} className="contact-method">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+1 (914) 815-2447</p>
                </div>
              </a>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>{siteConfig.location}</p>
                </div>
              </div>
            </div>
            
            <div className="status-card">
              <h4>Current Status</h4>
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">Available for new opportunities</span>
              </div>
              <div className="status-tags">
                <span className="status-tag">Open to Work</span>
                <span className="status-tag">Freelance</span>
                <span className="status-tag">Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
