// src/components/product/ZigZagLayout.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

type Feature = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  highlights: string[];
};

type ZigZagLayoutProps = {
  features: Feature[];
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ZigZagLayout({ features }: ZigZagLayoutProps) {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-headings dark:text-white sm:text-4xl">
              All-in-One Power
            </h2>
            <p className="mt-4 text-lg leading-8 text-body-copy dark:text-slate-400">
              Discover the features that will revolutionize your workflow.
            </p>
          </div>
          <div className="mt-16 space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-16"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={index % 2 === 0 ? 'lg:order-last' : ''}>
                  <h3 className="text-2xl font-bold tracking-tight text-headings dark:text-white sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-body-copy dark:text-slate-400">
                    {feature.description}
                  </p>
                  <ul role="list" className="mt-8 space-y-4 text-body-copy dark:text-slate-400">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-x-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-none text-neon-teal" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}