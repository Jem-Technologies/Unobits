'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Palette, Link as LinkIcon, PlaySquare, Unplug } from 'lucide-react';

const ChaosVsOrder = () => {
  return (
    <section id="stop-digital-chaos" className="scroll-mt-28 py-24 bg-slate-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-extrabold text-headings dark:text-white">Stop the Digital Chaos</h2>
           <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
             Tired of juggling a dozen apps that don't talk to each other? UNOBITS consolidates CRM, inbox, projects, docs, chat, and reporting into one scalable workspace.
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side (The Old Way) */}
          <div className="bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-white/10 p-8 rounded-3xl text-center">
             <div className="relative h-48 flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute top-4 left-10 text-red-500 bg-red-100 dark:bg-red-900/50 p-3 rounded-full"
                >
                  <MessageSquare size={32} />
                </motion.div>
                 <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute top-16 right-8 text-blue-500 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full"
                >
                  <Database size={32} />
                </motion.div>
                 <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-20 text-orange-500 bg-orange-100 dark:bg-orange-900/50 p-3 rounded-full"
                >
                  <Palette size={32} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 right-24 text-gray-500 bg-gray-100 dark:bg-gray-900/50 p-3 rounded-full"
                >
                  <LinkIcon size={32} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute top-24 left-36 text-purple-500 bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full"
                >
                  <PlaySquare size={32} />
                </motion.div>
             </div>
             <h3 className="mt-6 text-xl font-bold text-headings dark:text-white">Fragmented Data. Cluttered Workflow.</h3>
             <p className="mt-2 text-body-copy dark:text-slate-400">Information is scattered, context is lost, and productivity suffers.</p>
          </div>

          {/* Right Side (The UNOBITS Way) */}
           <div className="bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-white/10 p-8 rounded-3xl text-center">
             <div className="relative h-48 flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="absolute w-24 h-24 bg-neon-teal/10 text-neon-teal rounded-full flex items-center justify-center"
                >
                  <Unplug size={40} />
                </motion.div>

                <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                  <motion.path d="M 100 100 L 50 50" stroke="#00D4FF" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }} />
                  <motion.path d="M 100 100 L 150 50" stroke="#00D4FF" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }} />
                  <motion.path d="M 100 100 L 50 150" stroke="#00D4FF" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }} />
                  <motion.path d="M 100 100 L 150 150" stroke="#00D4FF" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.9 }} viewport={{ once: true }} />
                </svg>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute top-8 left-8 font-semibold text-sm">Sales</motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.1 }} className="absolute top-8 right-8 font-semibold text-sm">Ops</motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-8 font-semibold text-sm">Marketing</motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-8 right-8 font-semibold text-sm">HR</motion.p>

             </div>
             <h3 className="mt-6 text-xl font-bold text-headings dark:text-white">Unified Intelligence. Seamless Operation.</h3>
             <p className="mt-2 text-body-copy dark:text-slate-400">One platform to connect every team, process, and piece of data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChaosVsOrder;
