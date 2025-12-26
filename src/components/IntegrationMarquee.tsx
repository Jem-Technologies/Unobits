'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Calendar, Mail, FolderOpen, Webhook, Share2 } from 'lucide-react';

const logos = [
  { icon: <Mail size={40} />, name: 'Email & Inbox' },
  { icon: <Calendar size={40} />, name: 'Calendar Sync' },
  { icon: <FolderOpen size={40} />, name: 'Files & Storage' },
  { icon: <Zap size={40} />, name: 'Automation Connectors' },
  { icon: <Webhook size={40} />, name: 'Webhooks & API' },
  { icon: <Share2 size={40} />, name: 'Social Media (coming soon)' },
];

// Duplicate logos to create a seamless loop
const extendedLogos = [...logos, ...logos, ...logos, ...logos];

const IntegrationMarquee = () => {
  return (
    <section className="py-20 bg-white dark:bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-headings dark:text-white">Plays Well With Others</h2>
        <p className="mt-4 text-lg text-body-copy dark:text-slate-400">
          Even though UNOBITS can replace many apps, we also connect to the tools you already love.
        </p>
        <div className="relative mt-12 overflow-hidden">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-obsidian z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-obsidian z-10"></div>

          <motion.div
            className="flex space-x-16"
            animate={{
              x: [0, -1024], // Adjust this value based on the width of your logos + spacing
            }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center space-y-2 text-slate-500 dark:text-slate-400">
                {logo.icon}
                <span className="font-semibold">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationMarquee;
