'use client';

import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  proficiency: 'Novice' | 'Fair' | 'Intermediate' | 'Proficient' | 'Expert';
  animate: boolean;
}

const proficiencyToWidth = {
  'Novice': '40%',
  'Fair': '55%',
  'Intermediate': '70%',
  'Proficient': '85%',
  'Expert': '100%'
};

export default function SkillBar({ name, proficiency, animate }: SkillBarProps) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{proficiency}</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animate ? proficiencyToWidth[proficiency] : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="skill-progress"
        />
      </div>
    </div>
  );
}