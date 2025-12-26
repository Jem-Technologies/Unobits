// src/lib/resourcesData.ts

export type ResourcePost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readTime: string;
  category: string;
  author: string;
  image: string;
  content: Array<{ heading: string; body: string[] }>;
};

export const RESOURCE_POSTS: ResourcePost[] = [
  {
    slug: 'one-tab-operating-system',
    title: 'The One‑Tab Operating System: Why tool sprawl kills execution',
    excerpt:
      'Modern teams lose hours each week bouncing between apps. Here’s how a connected OS approach keeps context attached to the work itself.',
    date: '2025-12-01',
    readTime: '6 min read',
    category: 'Productivity',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The hidden cost of “just one more tool”',
        body: [
          'Tool sprawl doesn’t look like a crisis on day one. It starts as convenience: one app for chat, one for tasks, one for docs, one for CRM.',
          'But as your team grows, every hand‑off becomes a cross‑app relay — and context gets lost in transit.',
        ],
      },
      {
        heading: 'A connected OS keeps context attached',
        body: [
          'Instead of “integrating” a stack, a single OS design connects objects natively: clients, conversations, tasks, files, and reports.',
          'The result is less copy/paste, fewer status meetings, and faster decisions because everyone sees the same truth.',
        ],
      },
    ],
  },
  {
    slug: 'unified-inbox-to-workflow',
    title: 'From inbox to workflow: turning communication into execution',
    excerpt:
      'Email and chat are where work starts. Learn how to route, assign, and track conversations so they become real progress.',
    date: '2025-11-18',
    readTime: '5 min read',
    category: 'Communication',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Stop treating messages like loose ends',
        body: [
          'If your team lives in inboxes, you’re managing work with “read/unread” as your primary workflow.',
          'A shared inbox plus routing rules turns messages into owned, trackable work items.',
        ],
      },
      {
        heading: 'Make every conversation searchable and connected',
        body: [
          'Link threads to clients, projects, and tasks. This keeps new teammates from asking the same questions and prevents decisions from disappearing.',
        ],
      },
    ],
  },
  {
    slug: 'agency-delivery-with-portals',
    title: 'Agency delivery without chaos: portals, approvals, and clear status',
    excerpt:
      'Clients want visibility and fast answers. Here’s a portal-driven workflow that cuts status meetings and prevents endless email threads.',
    date: '2025-10-29',
    readTime: '7 min read',
    category: 'Clients & Business',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The real problem: status is scattered',
        body: [
          'Most agency friction comes from visibility gaps. Clients ask for updates because they can’t see progress in real time.',
          'A client portal solves this by giving one source of truth for deliverables, files, and approvals.',
        ],
      },
      {
        heading: 'Approvals should be a workflow, not a thread',
        body: [
          'When approvals live in email, they get missed. In a portal, approvals are owned, tracked, and timestamped — and everyone can see what’s next.',
        ],
      },
    ],
  },
  {
    slug: 'automation-basics',
    title: 'Automation basics: 10 workflows every team should automate',
    excerpt:
      'Automations are how you scale quality. These are the first 10 workflows that remove repetitive work and reduce mistakes.',
    date: '2025-10-12',
    readTime: '8 min read',
    category: 'Automations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Start with routing and reminders',
        body: [
          'The fastest wins come from routing and reminders: auto-assign by client, auto-follow-up after meetings, and auto-create tasks from form submissions.',
        ],
      },
      {
        heading: 'Then connect your lifecycle',
        body: [
          'Automate hand-offs between CRM, onboarding, delivery, and reporting. The goal is fewer manual transitions and less context loss.',
        ],
      },
    ],
  },
  {
    slug: 'digital-twin-explained',
    title: 'Digital Twin for teams: what it means and why it matters',
    excerpt:
      'A Digital Twin isn’t just for factories. In UNOBITS, it means your business data is structured and connected — making reporting and automation dramatically easier.',
    date: '2025-09-28',
    readTime: '6 min read',
    category: 'Digital Twin',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'From disconnected tools to a connected model',
        body: [
          'When your tools don’t share a model, reports become spreadsheets and automations become fragile.',
          'A Digital Twin keeps business objects connected: clients, projects, assets, conversations, and outcomes.',
        ],
      },
      {
        heading: 'Why this changes everything',
        body: [
          'Connected data means better reporting, faster onboarding, and fewer mistakes because workflows can rely on consistent structure.',
        ],
      },
    ],
  },
  {
    slug: 'integrations-roadmap',
    title: 'Integrations roadmap: what’s available today and what’s coming next',
    excerpt:
      'UNOBITS is designed to be the command center. Here’s how integrations, webhooks, and upcoming social media connectors fit into the ecosystem.',
    date: '2025-09-15',
    readTime: '4 min read',
    category: 'Integrations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The “command center” integration philosophy',
        body: [
          'Integrations should reduce tool switching, not increase it. UNOBITS focuses on syncing essentials while keeping execution inside the OS.',
        ],
      },
      {
        heading: 'Social media integrations (coming soon)',
        body: [
          'We’re building connectors that bring key social signals into UNOBITS so teams can route messages, tasks, and workflows without living in social tabs.',
        ],
      },
    ],
  },
];

export const RESOURCE_SLUGS = RESOURCE_POSTS.map((p) => p.slug);

export const RESOURCE_CATEGORIES = Array.from(
  RESOURCE_POSTS.reduce((acc, p) => {
    acc.add(p.category);
    return acc;
  }, new Set<string>())
).sort((a, b) => a.localeCompare(b));

export function getPost(slug: string): ResourcePost | undefined {
  return RESOURCE_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): ResourcePost[] {
  return RESOURCE_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
