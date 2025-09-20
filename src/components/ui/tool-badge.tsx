'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillTool } from '@/types';

interface ToolBadgeProps {
  tool: SkillTool;
  index: number;
}

interface ToolBadgesProps {
  tools: SkillTool[];
}

function ToolBadge({ tool, index }: ToolBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="inline-flex items-center px-3 py-1.5 m-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {tool.icon && (
        <div className="w-4 h-4 mr-2 relative">
          <Image
            src={`/icons/${tool.icon}.svg`}
            alt={tool.name}
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {tool.name}
      </span>
    </motion.div>
  );
}

export default function ToolBadges({ tools }: ToolBadgesProps) {
  return (
    <div className="flex flex-wrap -m-1 mt-2">
      {tools.map((tool, index) => (
        <ToolBadge key={tool.name} tool={tool} index={index} />
      ))}
    </div>
  );
}
