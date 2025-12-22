import InnerPageHero from '@/components/common/InnerPageHero';
import Footer from '@/components/Footer';
import BlogGrid from '@/components/resources/BlogGrid';

// Sample data - in a real app, this would be fetched from a CMS
const samplePosts = [
  {
    id: 1,
    title: 'Introduction to Unobits',
    href: '#',
    description:
      'Welcome to Unobits, the all-in-one platform designed to streamline your workflow. Learn how we are redefining collaboration, automation, and data management for teams worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    category: { title: 'Company News', href: '#' },
    author: {
      name: 'James Evans',
      role: 'Co-Founder / CEO',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use SEO to drive sales',
    href: '#',
    description: 'Discover actionable strategies to improve your search rankings and drive organic traffic to your business using modern SEO techniques and content optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description: 'In today’s competitive market, customer experience is king. Here are five proven ways to ensure your users stay happy, engaged, and loyal to your brand.',
    imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 12, 2024',
    datetime: '2024-02-12',
    category: { title: 'Business', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'The Art of Asynchronous Communication',
    href: '#',
    description: 'Asynchronous work is the key to unlocking productivity in distributed teams. Learn how to implement it effectively without losing the personal touch.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 05, 2024',
    datetime: '2024-02-05',
    category: { title: 'Remote Work', href: '#' },
    author: {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Securing Your Enterprise Data',
    href: '#',
    description: 'Data breaches are on the rise. Explore our comprehensive guide on best practices for enterprise security, compliance, and risk management.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'Jan 28, 2024',
    datetime: '2024-01-28',
    category: { title: 'Security', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Head of Security',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 6,
    title: 'Automating the Mundane',
    href: '#',
    description: 'Stop wasting time on repetitive tasks. We explore the top automation workflows in Unobits that can save your team 20+ hours a week.',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'Jan 15, 2024',
    datetime: '2024-01-15',
    category: { title: 'Productivity', href: '#' },
    author: {
      name: 'Dries Vincent',
      role: 'Product Manager',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 7,
    title: 'API First: Building for Scale',
    href: '#',
    description: 'Why an API-first approach matters for modern SaaS applications and how it enables seamless integration with your existing technical stack.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'Jan 08, 2024',
    datetime: '2024-01-08',
    category: { title: 'Engineering', href: '#' },
    author: {
      name: 'Whitney Francis',
      role: 'Senior Engineer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 8,
    title: 'Building a Culture of Innovation',
    href: '#',
    description: 'Innovation doesn\'t happen by accident. Learn how to foster a creative environment where new ideas flourish and diverse teams thrive.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    date: 'Dec 22, 2023',
    datetime: '2023-12-22',
    category: { title: 'Leadership', href: '#' },
    author: {
      name: 'Leonard Krasner',
      role: 'VP of People',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 9,
    title: 'What\'s New in Unobits v2.0',
    href: '#',
    description: 'A deep dive into our latest major release, featuring enhanced real-time collaboration tools, dark mode, and a brand new mobile application.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80',
    date: 'Dec 15, 2023',
    datetime: '2023-12-15',
    category: { title: 'Product Update', href: '#' },
    author: {
      name: 'Floyd Miles',
      role: 'Product Designer',
      href: '#',
      imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];


export default function ResourcesPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <main className="isolate">
        <InnerPageHero
          title="Insights & Resources"
          subtitle="Explore our collection of articles, guides, and tutorials to help you get the most out of UNOBITS."
          breadcrumbs={[{ name: 'Resources', href: '/resources' }]}
        />

        <BlogGrid posts={samplePosts} />

      </main>
      <Footer />
    </div>
  );
}