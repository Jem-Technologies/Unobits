// src/components/MegaMenu.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

type MenuItem = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type MegaMenuProps = {
  menu: {
    featured: MenuItem[];
    grid: MenuItem[];
  };
  onClose: () => void;
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
};

export default function MegaMenu({ menu, onClose }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute left-0 top-full w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 shadow-lg"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-12 gap-x-8 py-10">
          {/* Featured Section */}
          <div className="col-span-4">
            <h3 className="mb-4 text-sm font-semibold text-body-copy dark:text-slate-400">Featured</h3>
            <div className="space-y-4">
              {menu.featured.map((item, i) => (
                <motion.div key={item.name} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <Link
                    href={item.href}
                    className="group flex items-start gap-x-4 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                      <item.icon className="h-6 w-6 text-neon-teal" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-headings dark:text-white">{item.name}</p>
                      <p className="text-sm text-body-copy dark:text-slate-400">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Grid Section */}
          <div className="col-span-8">
            <h3 className="mb-4 text-sm font-semibold text-body-copy dark:text-slate-400">Core Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {menu.grid.map((item, i) => (
                <motion.div key={item.name} custom={i + menu.featured.length} variants={itemVariants} initial="hidden" animate="visible">
                  <Link
                    href={item.href}
                    className="group flex items-center gap-x-4 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={onClose}
                  >
                     <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                      <item.icon className="h-6 w-6 text-neon-teal" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-headings dark:text-white">{item.name}</p>
                      <p className="text-sm text-body-copy dark:text-slate-400">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}