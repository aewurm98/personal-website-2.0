'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data';
import SkillBar from '@/components/ui/skill-bar';
import { useIntersection } from '@/hooks/use-intersection';

const categories = ['finance', 'operations', 'development'] as const;
const categoryTitles = {
  finance: 'Finance',
  operations: 'Operations',
  development: 'Development'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Skills() {
  const [ref, isInView] = useIntersection({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="skills-section">
      <div className="container">
        <div className="section-title">Technical Skills</div>
        <div className="section-subtitle">
          My expertise across different domains
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="skill-category"
            >
              <h3 className="text-xl font-semibold mb-6">{categoryTitles[category]}</h3>
              <div>
                <div className="space-y-4 mb-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        animate={isInView}
                      />
                    ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Tools & Technologies</h4>
                  <div className="tools-grid">
                    {skills
                      .filter((skill) => skill.category === category)
                      .flatMap((skill) => skill.tools)
                      .filter((tool, index, self) => 
                        index === self.findIndex((t) => t.name === tool.name)
                      )
                      .map((tool) => (
                        <motion.span
                          key={tool.name}
                          variants={itemVariants}
                          className="tech-tag"
                        >
                          {tool.name}
                        </motion.span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}