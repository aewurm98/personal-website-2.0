'use client';

import { projects, siteConfig } from '@/data';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title fade-in">{siteConfig.sections.projects.title}</div>
        <div className="section-subtitle fade-in delay-1">
          {siteConfig.sections.projects.subtitle}
        </div>

        <div className="filter-buttons fade-in delay-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="project-card scale-in cursor-pointer hover:scale-[1.02] transition-transform block"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="project-thumbnail"
                  style={{ 
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(243 244 246)'
                  }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
                  {project.featured && (
                    <div className="project-featured">Featured</div>
                  )}
                  <div className="project-category">
                    {project.category === 'web' && 'Web'}
                    {project.category === 'mobile' && 'Mobile'}
                    {project.category === 'ai' && 'AI/ML'}
                    {project.category === 'data' && 'Data'}
                    {project.category === 'other' && 'Other'}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="project-date">
                    {new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                  <span className="project-link">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
