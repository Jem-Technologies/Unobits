'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import type { ResourcePost } from '@/lib/resourcesData';
import { slugify } from '@/lib/slugify';

type Post = ResourcePost;

type BlogGridProps = {
  posts: Post[];
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

export default function BlogGrid({ posts }: BlogGridProps) {
  const categoryHref = (category: string) => `/resources/category/${slugify(category)}`;

  return (
    <div className="bg-white dark:bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-headings dark:text-white sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-body-copy dark:text-slate-400">
                Stay up to date with the latest news, tips, and insights from the UNOBITS team.
            </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className="group relative flex flex-col items-start justify-between"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div className="relative w-full">
                <Image
                  src={post.image}
                  alt=""
                  width={800}
                  height={600}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-body-copy dark:text-slate-400">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <Link
                    href={categoryHref(post.category)}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    {post.category}
                  </Link>
                  <span className="text-body-copy dark:text-slate-400">•</span>
                  <span className="text-body-copy dark:text-slate-400">{post.readTime}</span>
                </div>
                <div className="relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-headings dark:text-white group-hover:text-gray-600 dark:group-hover:text-slate-300">
                    <Link href={`/resources/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-body-copy dark:text-slate-400">{post.excerpt}</p>
                </div>
                <p className="mt-6 text-xs font-semibold text-slate-500 dark:text-slate-400">By {post.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}