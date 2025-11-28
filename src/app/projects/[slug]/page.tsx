'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react';
import { projects } from '@/data';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <div className="project-detail-header">
        <div className="project-detail-header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#projects" className="project-detail-link-item" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <ArrowLeft className="project-detail-link-icon" />
              <span>Back to Projects</span>
            </Link>
            
            <div className="project-detail-header-flex" style={{ marginTop: '1rem' }}>
              <div>
                <h1 className="project-detail-title">
                  {project.title}
                </h1>
                <p className="project-detail-description">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-detail-content">
        <div className="project-detail-grid">
          {/* Main Content */}
          <motion.div
            className="project-detail-main"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Project Image */}
            <div className="project-detail-image">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  minHeight: '16rem',
                  maxHeight: '20rem',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Project Description */}
            <div className="project-detail-section">
              <h2>About This Project</h2>
              <p>{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="project-detail-section">
              <h2>Key Features</h2>
              <div className="project-detail-features">
                {[
                  'Responsive Design',
                  'Modern UI/UX',
                  'Performance Optimized',
                  'SEO Friendly',
                  'Cross-browser Compatible',
                  'Accessibility Compliant'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="project-detail-feature"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="project-detail-feature-dot" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="project-detail-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Project Info */}
            <div className="project-detail-card">
              <h3>Project Details</h3>
              
              <div className="project-detail-info">
                <div className="project-detail-info-item">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                
                <div className="project-detail-info-item">
                  <div style={{
                    width: '1rem',
                    height: '1rem',
                    borderRadius: '50%',
                    background: '#2563eb'
                  }} />
                  <span style={{ textTransform: 'capitalize' }}>
                    {project.category} Project
                  </span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="project-detail-card">
              <h3>Technologies Used</h3>
              <div className="project-detail-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="project-detail-card">
                <h3>Project Links</h3>
                <div className="project-detail-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-detail-link-item"
                    >
                      <Github className="project-detail-link-icon" />
                      <span>View Project</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-detail-link-item"
                    >
                      <ExternalLink className="project-detail-link-icon" />
                      <span>View Site</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
