'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
    
    const variants = {
      default: 'border-transparent bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200',
      outline: 'text-gray-900 border-gray-300',
      destructive: 'border-transparent bg-red-600 text-white hover:bg-red-700'
    };
    
    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-xs',
      lg: 'px-3 py-1 text-sm'
    };

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
