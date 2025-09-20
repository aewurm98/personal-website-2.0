'use client';

import { aboutData, siteConfig } from '@/data';

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title fade-in">{siteConfig.sections.about.title}</div>
        <div className="section-subtitle fade-in delay-1">
          {siteConfig.sections.about.subtitle}
        </div>

        <div className="about-grid">
          {/* Top Row */}
          <div className="about-top-row">
            {/* Who I Am */}
            <div className="about-intro slide-in-left delay-2">
              <h3>{siteConfig.sections.about.headings.whoIAm}</h3>
              <p>{aboutData.description}</p>
            </div>
            
            {/* Areas of Interest */}
            <div className="about-interests slide-in-right delay-2">
              <h3>{siteConfig.sections.about.headings.interests}</h3>
              <div className="interests">
                {aboutData.interests.map((interest, index) => (
                  <span key={interest} className="interest-tag scale-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="about-bottom-row">
            {/* Education */}
            <div className="about-education slide-in-left delay-3">
              <h4>{siteConfig.sections.about.headings.education}</h4>
              <div className="education-cards">
                {aboutData.education.map((edu, index) => (
                  <div key={`${edu.institution}-${edu.degree}`} className="education-card scale-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                    <h5>{edu.degree}</h5>
                    <p>{edu.institution}</p>
                    <p>{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Stats */}
            <div className="about-stats slide-in-right delay-3">
              <h4>{siteConfig.sections.about.headings.experience}</h4>
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
      </div>
    </section>
  );
}
