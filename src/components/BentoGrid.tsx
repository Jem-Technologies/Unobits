'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, Smartphone, Zap } from 'lucide-react'; // Changed Trello to LayoutDashboard

const BentoCard = ({ className, children, ...props }) => (
  <motion.div
    className={`bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 ${className}`}
    whileHover={{
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
    }}
    {...props}
  >
    {children}
  </motion.div>
);

const BentoGrid = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-headings dark:text-white">A Powerful Suite of Tools</h2>
          <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
            UNOBITS provides everything you need to manage your projects, collaborate with your team, and automate your workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8">
          {/* Card 1 (Large - Project Management) */}
          <BentoCard className="md:col-span-2 row-span-1">
            <LayoutDashboard className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Project Management</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Drag, drop, done. Organize tasks, track progress, and hit your deadlines with our intuitive Kanban boards.</p>
             <div className="mt-4 flex space-x-2">
                <div className="w-1/3 bg-slate-200 dark:bg-slate-700 rounded-lg p-2 space-y-2">
                    <div className="h-8 bg-white dark:bg-slate-600 rounded"></div>
                    <div className="h-12 bg-white dark:bg-slate-600 rounded"></div>
                </div>
                 <div className="w-1/3 bg-slate-200 dark:bg-slate-700 rounded-lg p-2 space-y-2">
                    <div className="h-10 bg-white dark:bg-slate-600 rounded"></div>
                </div>
                 <div className="w-1/3 bg-slate-200 dark:bg-slate-700 rounded-lg p-2 space-y-2">
                    <div className="h-6 bg-white dark:bg-slate-600 rounded"></div>
                    <div className="h-16 bg-white dark:bg-slate-600 rounded"></div>
                </div>
            </div>
          </BentoCard>

          {/* Card 2 (Small - Docs) */}
          <BentoCard className="md:col-span-1 row-span-1">
            <FileText className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Docs</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Real-time collaboration. Create, edit, and share documents with your team, all in one place.</p>
          </BentoCard>

          {/* Card 3 (Tall - Mobile App) */}
          <BentoCard className="md:col-span-1 row-span-2">
             <Smartphone className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Mobile App</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Run your business from your pocket. Our fully-featured mobile app keeps you connected on the go.</p>
             <div className="mt-4 flex-grow flex items-center justify-center">
                 <div className="w-40 h-80 bg-slate-200 dark:bg-slate-700 rounded-3xl border-4 border-slate-300 dark:border-slate-600 p-2">
                    <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl"></div>
                 </div>
             </div>
          </BentoCard>

          {/* Card 4 (Medium - Automations) */}
          <BentoCard className="md:col-span-2 row-span-1">
            <Zap className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Automations</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Put your repetitive tasks on autopilot. Connect Email to CRM, projects to chat, and more.</p>
             <div className="mt-4 flex items-center justify-center space-x-4">
                <span className="text-3xl">📧</span>
                <div className="w-24 h-1 border-t-2 border-dashed border-slate-300 dark:border-slate-600"></div>
                <span className="text-3xl">📈</span>
             </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
