'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, CheckSquare, BarChart2, Briefcase } from 'lucide-react';

const TABS_DATA = [
  {
    icon: <MessageSquare size={24} className="mr-4 text-neon-teal" />,
    title: 'Communication',
    description: 'Chat, Email & Video calls.',
    image: '/placeholder.svg', // Replace with actual screenshot path
  },
  {
    icon: <CheckSquare size={24} className="mr-4 text-neon-teal" />,
    title: 'Productivity',
    description: 'Docs, Sheets & Whiteboards.',
    image: '/placeholder.svg', // Replace with actual screenshot path
  },
  {
    icon: <BarChart2 size={24} className="mr-4 text-neon-teal" />,
    title: 'Growth',
    description: 'CRM, Email Marketing & Funnels.',
    image: '/placeholder.svg', // Replace with actual screenshot path
  },
  {
    icon: <Briefcase size={24} className="mr-4 text-neon-teal" />,
    title: 'Operations',
    description: 'Project Mgmt & HR.',
    image: '/placeholder.svg', // Replace with actual screenshot path
  },
];

const CorePillars = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-headings dark:text-white">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-4 text-lg text-body-copy dark:text-slate-400 max-w-2xl mx-auto">
            A fully integrated suite of tools to run your entire business from a single, unified platform.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Vertical Tabs */}
          <div className="lg:col-span-1 flex flex-col space-y-2">
            {TABS_DATA.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                  activeTab === index
                    ? 'bg-neon-teal/10 shadow-sm'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center">
                   {tab.icon}
                   <div>
                     <h3 className="font-bold text-md text-headings dark:text-white">{tab.title}</h3>
                     <p className="text-sm text-body-copy dark:text-slate-400">{tab.description}</p>
                   </div>
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="lg:col-span-2 relative h-96 lg:h-auto min-h-[400px] bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={TABS_DATA[activeTab].image}
                  alt={`${TABS_DATA[activeTab].title} Screenshot`}
                  className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white">{TABS_DATA[activeTab].title}</h3>
                 </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
