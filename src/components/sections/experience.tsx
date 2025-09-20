'use client';

import Image from 'next/image';
import { experiences, internships, skills, siteConfig } from '@/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-title fade-in">{siteConfig.sections.experience.title}</div>
        <div className="section-subtitle fade-in delay-1">
          {siteConfig.sections.experience.subtitle}
        </div>

        <div className="experience-content">
          <div className="timeline">
            <h3 className="fade-in delay-2">{siteConfig.sections.experience.headings.workExperience}</h3>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="timeline-item fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-title">{experience.position}</h4>
                        <p className="timeline-company">
                          {experience.companyUrl ? (
                            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                              {experience.company}
                            </a>
                          ) : (
                            experience.company
                          )}
                        </p>
                        <div className="timeline-meta">
                          <p className="timeline-location">{experience.location}</p>
                          <p className="timeline-date">{experience.startDate} - {experience.current ? 'Present' : experience.endDate}</p>
                        </div>
                      </div>
                      {experience.companyLogo && (
                        <a 
                          href={experience.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="company-logo"
                        >
                          <Image 
                            src={experience.companyLogo} 
                            alt={`${experience.company} logo`}
                            width={32}
                            height={32}
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          />
                        </a>
                      )}
                    </div>
                    
                    <div className="timeline-description">
                      <ul>
                        {experience.description.map((achievement: string, i: number) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="timeline-tech">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="internships">
              <h3 className="fade-in delay-2">{siteConfig.sections.experience.headings.internships}</h3>
              <div className="internship-section">
                <div className="timeline-marker"></div>
                <div className="internship-grid">
                  {internships.map((internship, index) => (
                    <div 
                      key={internship.id} 
                      className="internship-card-wrapper fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="internship-card">
                        <div className="internship-header">
                          <div>
                            <h4 className="internship-title">{internship.position}</h4>
                            <p className="internship-company">
                              {internship.companyUrl ? (
                                <a href={internship.companyUrl} target="_blank" rel="noopener noreferrer">
                                  {internship.company}
                                </a>
                              ) : (
                                internship.company
                              )}
                            </p>
                            <div className="internship-meta">
                              <p className="internship-location">{internship.location}</p>
                              <p className="internship-date">{internship.startDate} - {internship.endDate}</p>
                            </div>
                          </div>
                          {internship.companyLogo && (
                            <a 
                              href={internship.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="internship-logo"
                            >
                              <Image 
                                src={internship.companyLogo} 
                                alt={`${internship.company} logo`}
                                width={32}
                                height={32}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3 className="fade-in delay-2">{siteConfig.sections.experience.headings.technicalSkills}</h3>
            {['frontend', 'backend', 'database', 'devops', 'ai', 'other'].map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="skill-category fade-in" style={{ animationDelay: `${0.4}s` }}>
                  <h4>{category}</h4>
                  <div>
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">
                            {skill.proficiency >= 4 ? 'Expert' : skill.proficiency >= 3 ? 'Advanced' : 'Intermediate'}
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
