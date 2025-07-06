import React from 'react';
import { motion } from 'framer-motion';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  index: number; // Add index prop for staggered animation
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children, index }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 // Staggered delay
      }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold text-purple-300 border-b-2 border-purple-700 pb-4 mb-6">{title}</h3>
      {children}
    </motion.section>
  );
};

export default ResumeSection;