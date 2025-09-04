'use client';

import { experiences, skills } from '@/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-title fade-in">Experience & Skills</div>
        <div className="section-subtitle fade-in delay-1">
          My professional journey and technical expertise across various domains.
        </div>

        <div className="experience-content">
          <div className="timeline">
            <h3 className="fade-in delay-2">Work Experience</h3>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="timeline-item fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h4 className="timeline-title">{experience.position}</h4>
                        <p className="timeline-company">{experience.company}</p>
                        <p className="timeline-location">{experience.location}</p>
                      </div>
                      <div className="timeline-date">
                        <p>{experience.startDate} - {experience.current ? 'Present' : experience.endDate}</p>
                        {experience.current && (
                          <span className="status-tag">Current</span>
                        )}
                      </div>
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
          </div>
          
          <div className="skills-section">
            <h3 className="fade-in delay-2">Technical Skills</h3>
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
