'use client';

import { aboutData } from '@/data';

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title fade-in">About Me</div>
        <div className="section-subtitle fade-in delay-1">
          Get to know me better and understand my background, interests, and what drives me.
        </div>

        <div className="about-content">
          <div className="about-text slide-in-left delay-2">
            <div className="mb-8">
              <h3>Who I Am</h3>
              <p>{aboutData.description}</p>
            </div>
            
            <div className="mb-8">
              <h4>Education</h4>
              <div className="education-card">
                <h5>{aboutData.education.degree}</h5>
                <p>{aboutData.education.school}</p>
                <p>{aboutData.education.year}</p>
              </div>
            </div>
          </div>
          
          <div className="slide-in-right delay-3">
            <div className="mb-8">
              <h3>Areas of Interest</h3>
              <div className="interests">
                {aboutData.interests.map((interest, index) => (
                  <span key={interest} className="interest-tag scale-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="stats-grid">
              {aboutData.stats.map((stat, index) => (
                <div key={stat.label} className="stat-card scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
