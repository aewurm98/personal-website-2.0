'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
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
          <div className="min-h-screen bg-white">
      {/* Header */}
              <div className="bg-gray-100/30 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/#projects">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h1>
                                  <p className="text-lg text-gray-600 max-w-2xl">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank">
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Project Image */}
            <div className="relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                About This Project
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="flex items-center space-x-3 p-4 bg-white border border-gray-300 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-900">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Project Info */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Details
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-gray-600" />
                                      <span className="text-sm text-gray-600">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                                      <span className="text-sm text-gray-600 capitalize">
                    {project.category} Project
                  </span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank">
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </Button>
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank">
                    <Button size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Live Site
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}