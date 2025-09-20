'use client';

import { siteConfig } from '@/data';

export default function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title fade-in">{siteConfig.sections.contact.title}</div>
        <div className="section-subtitle fade-in delay-1">
          {siteConfig.sections.contact.subtitle}
        </div>

        <div className="contact-content">
          <div className="slide-in-left delay-2">
            <div className="contact-form">
              <h3>{siteConfig.sections.contact.form.title}</h3>
              <p>{siteConfig.sections.contact.form.description}</p>
              
              <form className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">{siteConfig.sections.contact.form.labels.name}</label>
                  <input type="text" id="name" placeholder={siteConfig.sections.contact.form.placeholders.name} name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{siteConfig.sections.contact.form.labels.email}</label>
                  <input type="email" id="email" placeholder={siteConfig.sections.contact.form.placeholders.email} name="email" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">{siteConfig.sections.contact.form.labels.subject}</label>
                  <input type="text" id="subject" placeholder={siteConfig.sections.contact.form.placeholders.subject} name="subject" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{siteConfig.sections.contact.form.labels.message}</label>
                  <textarea id="message" name="message" rows={6} placeholder={siteConfig.sections.contact.form.placeholders.message}></textarea>
                </div>
                
                <button type="submit" className="submit-btn">{siteConfig.sections.contact.form.submitButton}</button>
              </form>
            </div>
          </div>
          
          <div className="slide-in-right delay-3">
            <div className="contact-info">
              <h3>{siteConfig.sections.contact.connect.title}</h3>
              <p>{siteConfig.sections.contact.connect.description}</p>
            </div>
            
            <div className="contact-methods">
              <a href={`mailto:${siteConfig.email}`} className="contact-method">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>{siteConfig.sections.contact.contactMethods.email}</h4>
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
                  <h4>{siteConfig.sections.contact.contactMethods.phone}</h4>
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
                  <h4>{siteConfig.sections.contact.contactMethods.location}</h4>
                  <p>{siteConfig.location}</p>
                </div>
              </div>
            </div>
            
            <div className="status-card">
              <h4>{siteConfig.sections.contact.status.title}</h4>
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">{siteConfig.sections.contact.status.text}</span>
              </div>
              <div className="status-tags">
                {siteConfig.sections.contact.status.tags.map((tag) => (
                  <span key={tag} className="status-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
