// src/lib/alternativesData.ts

export type ComparisonRow = {
  aspect: string;
  unobits: string;
  competitor: string;
};

export type AlternativePageDefinition = {
  slug: string;
  competitorName: string;
  /** H1 title */
  title: string;
  /** Hero subtitle */
  subtitle: string;
  /** Short summary paragraph used for meta + intro. */
  summary: string;
  /** Key reasons teams switch. */
  reasonsToSwitch: string[];
  /** Lightweight comparison rows (kept intentionally high-level to avoid inaccurate claims). */
  comparison: ComparisonRow[];
  /** Recommended UNOBITS modules to explore next */
  recommendedModules: Array<{ title: string; href: string; description: string }>;
  /** FAQ for rich results */
  faqs: Array<{ q: string; a: string }>;
};

export const ALTERNATIVES_PAGES: AlternativePageDefinition[] = [
  {
    slug: 'zoho',
    competitorName: 'Zoho',
    title: 'UNOBITS vs Zoho',
    subtitle: 'A Zoho alternative for founders who want fewer apps, less setup, and more connected context.',
    summary:
      'Zoho is a broad suite. UNOBITS is a single connected OS that links CRM, shared inbox, projects, docs, chat, and reporting — designed to reduce tab overload instead of expanding it.',
    reasonsToSwitch: [
      'Reduce “suite sprawl” by keeping customer context connected to delivery (inbox ↔ CRM ↔ projects).',
      'Launch fast with modern templates and workflows instead of stitching products together.',
      'Operate mobile‑first so founders can run the company from a phone without a clunky experience.',
    ],
    comparison: [
      {
        aspect: 'Core philosophy',
        unobits: 'One connected OS with a unified data model.',
        competitor: 'A suite of apps that you configure and connect.',
      },
      {
        aspect: 'Tab overload',
        unobits: 'Designed to replace multiple subscriptions with one workflow.',
        competitor: 'Often involves multiple apps + admin surfaces.',
      },
      {
        aspect: 'Client delivery',
        unobits: 'Client portals and delivery workflows are first‑class.',
        competitor: 'Delivery can vary by app configuration.',
      },
    ],
    recommendedModules: [
      { title: 'CRM', href: '/product/crm', description: 'Pipelines and client timelines connected to delivery.' },
      { title: 'Inbox', href: '/product/inbox', description: 'Shared inbox routing that stays linked to work.' },
      { title: 'Projects', href: '/product/projects', description: 'Delivery workspaces connected to clients and conversations.' },
      { title: 'Mobile App', href: '/product/mobile-app', description: 'Run the business from your phone (fast, focused, secure).' },
    ],
    faqs: [
      {
        q: 'Is UNOBITS a full Zoho One replacement?',
        a: 'UNOBITS is built to replace a large portion of a typical small‑business stack by connecting CRM, shared inbox, projects, docs, chat, automation, portals, and reporting in one OS. If you rely on a niche Zoho app, you can keep it and connect via integrations.',
      },
      {
        q: 'What is the fastest way to migrate from Zoho to UNOBITS?',
        a: 'Start with one workflow (for example: shared inbox + CRM + onboarding template). Import your contacts/deals, then standardize delivery using project templates and client portals. Expand to automation and reporting once the core flow is stable.',
      },
      {
        q: 'Do I need a technical team to set up UNOBITS?',
        a: 'No. UNOBITS is designed for founders and ops leads: templates, modular setup, and guided flows reduce complexity while still supporting custom workflows as you grow.',
      },
    ],
  },
  {
    slug: 'odoo',
    competitorName: 'Odoo',
    title: 'UNOBITS vs Odoo',
    subtitle: 'An Odoo alternative for startups who want a modern OS — not an ERP project.',
    summary:
      'Odoo is powerful, especially as an ERP. UNOBITS is built for speed: a connected OS that reduces tool sprawl with CRM, inbox, projects, portals, automation, and reporting — without heavy implementation overhead.',
    reasonsToSwitch: [
      'Avoid long ERP-style implementations when you need to move fast.',
      'Keep sales, support, and delivery connected (messages, tasks, files, and client context in one place).',
      'Use templates to launch repeatable operations (agencies, startups, services) quickly.',
    ],
    comparison: [
      {
        aspect: 'Implementation',
        unobits: 'Fast setup with modular workflows and templates.',
        competitor: 'Often benefits from deeper configuration and implementation.',
      },
      {
        aspect: 'Best fit',
        unobits: 'Startups, agencies, service businesses, modern teams.',
        competitor: 'ERP-heavy operations and accounting-centric workflows.',
      },
      {
        aspect: 'Mobile‑first operation',
        unobits: 'Mobile experience is a core selling point for founders.',
        competitor: 'Mobile experience depends on configuration and modules.',
      },
    ],
    recommendedModules: [
      { title: 'Clients & Business', href: '/product/clients-business', description: 'CRM, onboarding, sequences, finance, inventory — connected.' },
      { title: 'Office', href: '/product/office', description: 'Approvals, SOPs, internal workflows, and repeatable operations.' },
      { title: 'Reports', href: '/product/reports', description: 'Operational visibility across growth and delivery.' },
      { title: 'Templates Library', href: '/templates', description: 'Preview use‑case templates before you sign up.' },
    ],
    faqs: [
      {
        q: 'Is UNOBITS an ERP?',
        a: 'UNOBITS is positioned as a business operating system that connects growth, communication, delivery, and operations. Some finance/inventory capabilities exist, but the focus is reducing app sprawl and keeping context connected — not replacing every ERP function for every industry.',
      },
      {
        q: 'When should I choose Odoo instead?',
        a: 'If your core need is a deep ERP implementation with industry-specific accounting, manufacturing, or complex inventory workflows, Odoo can be a strong fit. If you want faster setup and a modern connected OS for teams, UNOBITS is built for that.',
      },
      {
        q: 'Can I keep parts of my current stack?',
        a: 'Yes. Many teams migrate progressively: start with UNOBITS for CRM + shared inbox + projects, then integrate or replace other tools over time.',
      },
    ],
  },
  {
    slug: 'hubspot',
    competitorName: 'HubSpot',
    title: 'UNOBITS vs HubSpot',
    subtitle: 'A HubSpot alternative for teams that want CRM + delivery + operations in one place.',
    summary:
      'HubSpot is great at marketing and CRM. UNOBITS connects the entire lifecycle: shared inbox, CRM, onboarding, projects, portals, automation, and reporting — so the hand‑off from “won” to “delivered” is seamless.',
    reasonsToSwitch: [
      'Connect sales conversations directly to onboarding and delivery work.',
      'Replace multiple tools (helpdesk, project manager, docs) with one OS.',
      'Reduce per-seat complexity by running workflows inside a single platform.',
    ],
    comparison: [
      {
        aspect: 'Lifecycle coverage',
        unobits: 'Lead → onboarding → delivery → renewal is connected by default.',
        competitor: 'Strong CRM/marketing; delivery often needs additional tools.',
      },
      {
        aspect: 'Shared inbox + projects',
        unobits: 'Native shared inbox routing tied to tasks and client records.',
        competitor: 'Often requires multiple products/hubs or integrations.',
      },
      {
        aspect: 'Templates',
        unobits: 'Public template library lowers barrier to entry.',
        competitor: 'Templates exist but vary by hub and setup.',
      },
    ],
    recommendedModules: [
      { title: 'Sequences', href: '/product/sequences', description: 'Outreach and follow‑ups that connect to CRM and inbox.' },
      { title: 'Onboarding', href: '/product/onboarding', description: 'Standardized onboarding flows and checklists.' },
      { title: 'Client Portal', href: '/product/client-portal', description: 'Client-facing visibility without email chaos.' },
    ],
    faqs: [
      {
        q: 'Does UNOBITS replace HubSpot Marketing Hub?',
        a: 'UNOBITS includes sequences and automation designed to connect growth with delivery. If your team relies on advanced marketing automation, you can keep HubSpot for that piece and still run core workflows inside UNOBITS.',
      },
      {
        q: 'What’s the biggest difference between UNOBITS and HubSpot?',
        a: 'UNOBITS is designed as an operating system across teams: inbox, CRM, projects, portals, automation, and reporting share one connected model — so context is never lost between departments.',
      },
    ],
  },
  {
    slug: 'salesforce',
    competitorName: 'Salesforce',
    title: 'UNOBITS vs Salesforce',
    subtitle: 'A Salesforce alternative for smaller teams who want speed and simplicity.',
    summary:
      'Salesforce is an enterprise CRM platform. UNOBITS is a connected OS for modern teams — easier to adopt, faster to run, and built to reduce tool sprawl across the entire workflow.',
    reasonsToSwitch: [
      'Get started fast without a heavy admin or implementation cycle.',
      'Keep conversations, delivery, and reporting tied to the same client record.',
      'Operate from mobile without sacrificing workflow clarity.',
    ],
    comparison: [
      {
        aspect: 'Time-to-value',
        unobits: 'Launch quickly with templates and opinionated workflows.',
        competitor: 'Often requires configuration and ongoing administration.',
      },
      {
        aspect: 'Beyond CRM',
        unobits: 'CRM + inbox + projects + portals + automation in one OS.',
        competitor: 'CRM core; broader workflows typically add more products.',
      },
      {
        aspect: 'Ideal team size',
        unobits: 'Startups to scaling teams that want an all-in-one OS.',
        competitor: 'Enterprise orgs with dedicated admins and complex requirements.',
      },
    ],
    recommendedModules: [
      { title: 'Dashboard', href: '/product/dashboard', description: 'Leadership visibility with global search across the OS.' },
      { title: 'Automations', href: '/product/automations', description: 'Triggers and actions across modules.' },
      { title: 'Reports', href: '/product/reports', description: 'Visibility across growth, delivery, and operations.' },
    ],
    faqs: [
      {
        q: 'Can UNOBITS handle enterprise complexity?',
        a: 'UNOBITS is modular and can scale into portals, automation, and structured “Digital Twin” capabilities. If you require highly customized enterprise CRM ecosystems, a dedicated enterprise platform may still be a fit — but many teams prefer UNOBITS for speed and simplicity.',
      },
    ],
  },
  {
    slug: 'clickup',
    competitorName: 'ClickUp',
    title: 'UNOBITS vs ClickUp',
    subtitle: 'A ClickUp alternative when you want projects connected to CRM and communication.',
    summary:
      'ClickUp is a strong project tool. UNOBITS connects projects to shared inbox, CRM, docs, chat, automation, and portals — so tasks are never detached from customers and conversations.',
    reasonsToSwitch: [
      'Stop losing customer context inside standalone task lists.',
      'Run client delivery with portals, approvals, and shared inbox routing.',
      'Replace a multi-tool stack with one OS that still feels fast.',
    ],
    comparison: [
      {
        aspect: 'Project context',
        unobits: 'Projects are connected to CRM records, inbox threads, and files.',
        competitor: 'Projects are the core; customer context may require integrations.',
      },
      {
        aspect: 'Client portals',
        unobits: 'Client portals are designed into the OS.',
        competitor: 'Portals typically require extra configuration or tools.',
      },
      {
        aspect: 'One-tab workflow',
        unobits: 'Replace multiple apps with one connected platform.',
        competitor: 'Often used alongside CRM/inbox/docs tools.',
      },
    ],
    recommendedModules: [
      { title: 'Projects', href: '/product/projects', description: 'Boards, templates, and delivery workspaces.' },
      { title: 'Client Portal', href: '/product/client-portal', description: 'Status, approvals, and secure sharing.' },
      { title: 'Inbox', href: '/product/inbox', description: 'Shared inbox routing linked to tasks.' },
    ],
    faqs: [
      {
        q: 'Can I still use ClickUp with UNOBITS?',
        a: 'Yes. If you want to keep ClickUp temporarily, you can integrate and migrate progressively. Many teams start by moving shared inbox + CRM + client portals into UNOBITS first.',
      },
    ],
  },
  {
    slug: 'notion',
    competitorName: 'Notion',
    title: 'UNOBITS vs Notion',
    subtitle: 'A Notion alternative for teams that need execution — not just docs.',
    summary:
      'Notion is great for docs and knowledge. UNOBITS adds connected execution: inbox → tasks → projects → portals → reporting — so ideas become delivery without tool switching.',
    reasonsToSwitch: [
      'Turn communication into execution without copy/paste.',
      'Keep docs, tasks, clients, and projects in one connected model.',
      'Use templates to standardize onboarding and operations.',
    ],
    comparison: [
      {
        aspect: 'Primary strength',
        unobits: 'End-to-end business OS (communication, CRM, delivery, ops).',
        competitor: 'Docs + knowledge management and lightweight databases.',
      },
      {
        aspect: 'Client lifecycle',
        unobits: 'CRM + shared inbox + delivery is connected by default.',
        competitor: 'Often requires additional tools for CRM/inbox/delivery.',
      },
      {
        aspect: 'Operational reporting',
        unobits: 'Reporting across modules with connected data.',
        competitor: 'Reporting depends on database setup and add-ons.',
      },
    ],
    recommendedModules: [
      { title: 'Notes', href: '/product/notes', description: 'Notes that turn into tasks and workflows.' },
      { title: 'Workspace', href: '/product/workspace', description: 'Projects, boards, and office workflows.' },
      { title: 'Automations', href: '/product/automations', description: 'Triggers and actions to remove busywork.' },
    ],
    faqs: [
      {
        q: 'Do I lose flexibility compared to Notion?',
        a: 'UNOBITS is modular: you can keep flexible docs and templates while adding connected execution across inbox, projects, portals, and reporting. Many teams prefer the clarity of an OS over endless custom databases.',
      },
    ],
  },
];

export const ALTERNATIVE_SLUGS = ALTERNATIVES_PAGES.map((p) => p.slug);

export function getAlternativePage(slug: string) {
  return ALTERNATIVES_PAGES.find((p) => p.slug === slug);
}
