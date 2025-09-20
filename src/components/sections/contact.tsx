'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { siteConfig } from '@/data';
import { emailConfig, isEmailConfigValid } from '@/lib/emailjs-config';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize EmailJS once on component mount
  useEffect(() => {
    if (!isEmailConfigValid()) {
      console.error('EmailJS configuration is incomplete');
      return;
    }

    try {
      emailjs.init({
        publicKey: emailConfig.publicKey,
      });
      setIsInitialized(true);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      setIsInitialized(false);
    }
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check initialization
      if (!isInitialized) {
        throw new Error('Email service is not initialized');
      }

      // Check internet connection
      if (!navigator.onLine) {
        throw new Error('No internet connection. Please check your network and try again.');
      }

      // Log only non-sensitive information
      console.log('Attempting to send email from:', {
        name: data.name,
        email: data.email,
        messageLength: data.message.length,
      });

      // Attempt to send email
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          subject: data.subject,
          from_name: data.name,
          time: new Date().toLocaleString(),
          message: data.message,
          from_email: data.email
        },
        emailConfig.publicKey
      ).catch(error => {
        // Handle network or CORS errors
        if (error.message.includes('Failed to fetch') || error.message.includes('access control')) {
          throw new Error('Unable to connect to email service. Please try again later.');
        }
        throw error;
      });

      if (result.status === 200) {
        setSubmitStatus('success');
        reset();
        console.log('Email sent successfully');
      } else {
        throw new Error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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
              
              <form className="form-grid" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">{siteConfig.sections.contact.form.labels.name}</label>
                  <input
                    type="text"
                    id="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder={siteConfig.sections.contact.form.placeholders.name}
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">{siteConfig.sections.contact.form.labels.email}</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder={siteConfig.sections.contact.form.placeholders.email}
                    {...register('email')}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">{siteConfig.sections.contact.form.labels.subject}</label>
                  <input
                    type="text"
                    id="subject"
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    placeholder={siteConfig.sections.contact.form.placeholders.subject}
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject.message}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{siteConfig.sections.contact.form.labels.message}</label>
                  <textarea
                    id="message"
                    rows={6}
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    placeholder={siteConfig.sections.contact.form.placeholders.message}
                    {...register('message')}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message.message}</span>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    Failed to send message. Please try again later.
                  </div>
                )}
                
                <button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : siteConfig.sections.contact.form.submitButton}
                </button>
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
