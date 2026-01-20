// src/lib/solutionsData.ts

export type SolutionSection = {
  title: string;
  description: string;
  bullets: string[];
};

export type SolutionPageDefinition = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  sections: SolutionSection[];
  recommendedModules: Array<{ title: string; href: string; description: string }>;
};

export const SOLUTIONS_PAGES: SolutionPageDefinition[] = [
  {
    slug: 'startups',
    title: 'UNOBITS for Startups',
    subtitle: 'Move fast without building a messy tool stack.',
    summary:
      'Replace scattered tools with one connected OS so your team ships faster, stays aligned, and keeps clean customer context from day one.',
    sections: [
      {
        title: 'Launch with one source of truth',
        description:
          'Capture product discussions, customer feedback, tasks, and docs in one place — then turn them into execution immediately.',
        bullets: ['Unified dashboard for founders', 'Chat + inbox linked to work', 'Projects + boards for shipping'],
      },
      {
        title: 'Automate the busywork early',
        description:
          'Use automations and sequences to keep pipelines moving without hiring extra ops headcount.',
        bullets: ['Lead → onboarding → project hand‑offs', 'Follow‑ups and reminders', 'Reporting that grows with you'],
      },
      {
        title: 'Scale without losing context',
        description:
          'As your team grows, UNOBITS keeps every conversation connected to the right client, project, and file.',
        bullets: ['Role‑based access', 'Team portal for internal alignment', 'Client portal for external visibility'],
      },
    ],
    recommendedModules: [
      { title: 'Dashboard', href: '/product/dashboard', description: 'Leadership visibility and global search.' },
      { title: 'Projects', href: '/product/projects', description: 'Build and ship with connected execution.' },
      { title: 'Automations', href: '/product/automations', description: 'Route work and follow‑ups automatically.' },
    ],
  },
  {
    slug: 'agencies',
    title: 'UNOBITS for Agencies',
    subtitle: 'From pitch to payment — run your entire client lifecycle in one OS.',
    summary:
      'Stop losing time to status meetings and scattered tools. Keep clients, projects, inbox, approvals, and deliverables under one roof.',
    sections: [
      {
        title: 'Shared client context',
        description:
          'Every client gets one timeline: messages, files, notes, deliverables, and project status.',
        bullets: ['CRM + client profiles', 'Email + shared inbox routing', 'Linked project workspaces'],
      },
      {
        title: 'Deliver with confidence',
        description:
          'Track progress, time, and capacity so you can hit deadlines and protect margins.',
        bullets: ['Boards + templates', 'Time tracking connected to tasks', 'Reports for utilization and delivery'],
      },
      {
        title: 'Client portal experiences',
        description:
          'Give clients a clean place to approve work and see status — without endless email threads.',
        bullets: ['Secure file sharing', 'Approvals + requests', 'Automated updates'],
      },
    ],
    recommendedModules: [
      { title: 'CRM', href: '/product/crm', description: 'Pipelines and client records that connect to delivery.' },
      { title: 'Client Portal', href: '/product/client-portal', description: 'Client-facing visibility and approvals.' },
      { title: 'Time Tracking', href: '/product/time-tracking', description: 'Margins and utilization in one view.' },
    ],
  },
  {
    slug: 'industry',
    title: 'Solutions by Industry',
    subtitle: 'Configure UNOBITS for how your industry delivers work.',
    summary:
      'Whether you’re delivering services, managing operations, or coordinating teams, UNOBITS adapts with templates, permissions, and modular tools.',
    sections: [
      {
        title: 'Services & consulting',
        description:
          'Turn communication into delivery and keep clients informed without extra tools.',
        bullets: ['Client portals + onboarding flows', 'Projects, boards, and time tracking', 'Reports for utilization and revenue'],
      },
      {
        title: 'Operations-heavy teams',
        description:
          'Standardize internal workflows and approvals with an “office OS” layer.',
        bullets: ['Office workflows + SOPs', 'Inventory and add‑ons where relevant', 'Automations to reduce manual hand‑offs'],
      },
      {
        title: 'Product & tech teams',
        description:
          'Align planning, communication, and execution around a single data model.',
        bullets: ['Dashboards + reporting', 'Docs, notes, and files in context', 'External collaboration experiences'],
      },
    ],
    recommendedModules: [
      { title: 'Workspace', href: '/product/workspace', description: 'Projects, boards, and office workflows.' },
      { title: 'Productivity', href: '/product/productivity', description: 'Calendar, notes, and files in one place.' },
      { title: 'Reports', href: '/product/reports', description: 'Operational visibility across the business.' },
    ],
  },
  {
    slug: 'team-size',
    title: 'Solutions by Team Size',
    subtitle: 'From solo operators to enterprise teams.',
    summary:
      'Start simple and expand into portals, automation, and Digital Twin capabilities as your org grows. UNOBITS is modular, so you only add what you need.',
    sections: [
      {
        title: 'Solo & small teams',
        description:
          'One place for notes, projects, and communication — without setup overhead.',
        bullets: ['Start with a free trial on any plan', 'Simple projects + chat + inbox workflows', 'Scale into CRM, portals, and automation when you’re ready'],
      },
      {
        title: 'Growing teams',
        description:
          'Bring client work, delivery, and internal operations together without tool sprawl.',
        bullets: ['Shared inbox + routing', 'Time tracking + reporting', 'Automations and sequences'],
      },
      {
        title: 'Enterprise orgs',
        description:
          'Custom workflows, onboarding, and dedicated support to match complex requirements.',
        bullets: ['Custom plan with dedicated rollout support', 'Advanced roles, portals, and integrations', 'Security reviews and SLAs'],
      },
    ],
    recommendedModules: [
      { title: 'Pricing', href: '/pricing', description: 'Find the right plan and rollout path.' },
      { title: 'Security', href: '/security', description: 'Security overview and controls.' },
      { title: 'Integrations', href: '/integrations', description: 'Connect existing systems and tools.' },
    ],
  },
];

export const SOLUTION_SLUGS = SOLUTIONS_PAGES.map((p) => p.slug);

export function getSolutionPage(slug: string) {
  return SOLUTIONS_PAGES.find((p) => p.slug === slug);
}
