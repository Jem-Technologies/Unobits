'use client';
import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { LayoutDashboard, FileText, Smartphone, Zap } from 'lucide-react';
import { MiniAutomation, MiniDoc, MiniKanban, MiniMobile } from './illustrations/MicroAnimations';

interface BentoCardProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ className, children, ...props }) => (
  <motion.div
    className={`u-surface-soft p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:-translate-y-2 ${className}`}
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
          <BentoCard className="md:col-span-2 row-span-1">
            <LayoutDashboard className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Project Management</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Drag, drop, done. Organize tasks, track progress, and hit your deadlines with our intuitive Kanban boards.</p>
            <MiniKanban />
          </BentoCard>

          <BentoCard className="md:col-span-1 row-span-1">
            <FileText className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Docs</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Real-time collaboration. Create, edit, and share documents with your team, all in one place.</p>
            <MiniDoc />
          </BentoCard>

          <BentoCard className="md:col-span-1 row-span-2">
             <Smartphone className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Mobile App</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Run your business from your pocket. Our fully-featured mobile app keeps you connected on the go.</p>
            <div className="flex-grow">
              <MiniMobile />
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-2 row-span-1">
            <Zap className="w-12 h-12 mb-4 text-neon-teal" />
            <h3 className="text-2xl font-bold text-headings dark:text-white">Automations</h3>
            <p className="mt-2 text-body-copy dark:text-slate-400">Put your repetitive tasks on autopilot. Connect Email to CRM, projects to chat, and more.</p>
            <MiniAutomation />
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
