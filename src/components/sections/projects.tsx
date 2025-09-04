'use client';

import { projects } from '@/data';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'data', name: 'Data Science' },
    { id: 'other', name: 'Other' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title fade-in">Featured Projects</div>
        <div className="section-subtitle fade-in delay-1">
          A showcase of my recent work, demonstrating my skills and passion for building innovative solutions.
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
            <div
              key={project.id}
              className="project-card scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="project-image">
                <span>{project.title.charAt(0)}</span>
                {project.featured && (
                  <div className="project-featured">Featured</div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-gray-600 px-2 py-0.5 text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="project-footer">
                  <span className="project-date">
                    {new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                  <Link href={`/projects/${project.slug}`} className="project-link">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-btn fade-in delay-6">
          <Link href="/projects">
            <button className="btn btn-secondary">View All Projects →</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
