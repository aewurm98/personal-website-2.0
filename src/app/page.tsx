import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
