'use client';
import React, { ReactNode, CSSProperties } from 'react'; // Import CSSProperties
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  className?: string;           // Optional: allows Tailwind classes
  style?: CSSProperties;        // Optional: allows inline styles
}

const AnimatedSection = ({ children, className, style }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}     // Pass the class down
      style={style}             // Pass the style down
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;