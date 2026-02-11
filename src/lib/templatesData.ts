// src/lib/templatesData.ts

export type TemplateStep = {
  title: string;
  description: string;
  bullets: string[];
};

export type TemplatePageDefinition = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  /** A lightweight “preview” image. Use remote placeholders so the marketing site stays light. */
  image: string;
  bestFor: string[];
  includesModules: Array<{ title: string; href: string }>;
  steps: TemplateStep[];
  faqs: Array<{ q: string; a: string }>;
};

export const TEMPLATE_PAGES: TemplatePageDefinition[] = [
  {
    slug: 'digital-marketing-agency',
    title: 'Digital Marketing Agency Template',
    subtitle: 'A ready-to-run agency workspace: leads → onboarding → delivery → reporting.',
    summary:
      'Replace 6–10 tools with one connected OS. This template includes CRM pipelines, shared inbox routing, project templates, client portal views, and reporting dashboards for recurring delivery.',
    image: 'https://placehold.co/1200x675/png?text=Digital%20Marketing%20Agency%20Template',
    bestFor: ['Marketing agencies', 'Creative studios', 'Performance teams', 'Client delivery businesses'],
    includesModules: [
      { title: 'Inbox', href: '/product/inbox' },
      { title: 'CRM', href: '/product/crm' },
      { title: 'Onboarding', href: '/product/onboarding' },
      { title: 'Projects', href: '/product/projects' },
      { title: 'Client Portal', href: '/product/client-portal' },
      { title: 'Reports', href: '/product/reports' },
      { title: 'Automations', href: '/product/automations' },
    ],
    steps: [
      {
        title: 'Capture and qualify leads',
        description: 'Centralize inbound leads and route conversations without losing context.',
        bullets: ['Shared inbox triage (assign, tag, SLA)', 'CRM pipeline stages for qualification', 'Auto-create follow-up tasks from inbox threads'],
      },
      {
        title: 'Standardize onboarding',
        description: 'Kick off every new client with the same predictable hand-offs.',
        bullets: ['Onboarding checklist template', 'Welcome email sequence + reminders', 'Client portal setup for approvals & assets'],
      },
      {
        title: 'Deliver with repeatable projects',
        description: 'Turn services into reusable project templates and weekly rhythms.',
        bullets: ['Project templates (SEO, ads, social, content)', 'Weekly reporting tasks', 'Client-visible milestones'],
      },
      {
        title: 'Report outcomes without spreadsheets',
        description: 'Keep performance reporting connected to delivery work.',
        bullets: ['Dashboards by client and service line', 'Delivery + utilization visibility', 'Monthly executive summary structure'],
      },
    ],
    faqs: [
      {
        q: 'Can I preview the template before signing up?',
        a: 'Yes — this public library is designed to show what you’ll get inside UNOBITS. When you start a trial, you can apply the template and tweak it to match your services.',
      },
      {
        q: 'Does this template work for a small agency (1–5 people)?',
        a: 'Yes. The template scales down: use fewer stages and fewer automations at first, then expand as the team grows.',
      },
    ],
  },
  {
    slug: 'retail-startup',
    title: 'Retail Startup Template',
    subtitle: 'Run retail ops with fewer apps: inventory, sales follow-ups, and daily execution.',
    summary:
      'A modern retail workspace that connects customer conversations, inventory signals, internal tasks, and reporting — so founders can operate mobile-first.',
    image: 'https://placehold.co/1200x675/png?text=Retail%20Startup%20Template',
    bestFor: ['Retail startups', 'Pop-up stores', 'Small multi-location operators'],
    includesModules: [
      { title: 'Inbox', href: '/product/inbox' },
      { title: 'CRM', href: '/product/crm' },
      { title: 'Inventory', href: '/product/inventory' },
      { title: 'Office', href: '/product/office' },
      { title: 'Reports', href: '/product/reports' },
      { title: 'Mobile App', href: '/product/mobile-app' },
    ],
    steps: [
      {
        title: 'Keep customer conversations organized',
        description: 'Handle support, questions, and sales inquiries without chaos.',
        bullets: ['Shared inbox routing', 'Link conversations to customer records', 'Follow-up tasks with reminders'],
      },
      {
        title: 'Track inventory without extra tabs',
        description: 'Connect inventory to operations and reporting.',
        bullets: ['Inventory movement tracking', 'Low-stock alerts (via workflows)', 'Inventory reports for planning'],
      },
      {
        title: 'Run daily operations',
        description: 'Standardize recurring tasks so the store stays consistent.',
        bullets: ['Daily/weekly checklists', 'Approvals and requests', 'Role-based access for staff'],
      },
    ],
    faqs: [
      {
        q: 'Can UNOBITS replace my POS system?',
        a: 'UNOBITS focuses on operating workflows (communication, tasks, inventory tracking, reporting). If you need a dedicated POS, you can keep it and connect insights/workflows via integrations.',
      },
    ],
  },
  {
    slug: 'saas-startup',
    title: 'SaaS Startup Template',
    subtitle: 'A founder-friendly workspace: sales, support, delivery, and internal execution in one OS.',
    summary:
      'Connect inbound support, CRM pipeline, onboarding, and product delivery tasks so nothing falls through the cracks — even when the team is small and moving fast.',
    image: 'https://placehold.co/1200x675/png?text=SaaS%20Startup%20Template',
    bestFor: ['SaaS founders', 'Remote teams', 'Early-stage startups'],
    includesModules: [
      { title: 'Inbox', href: '/product/inbox' },
      { title: 'CRM', href: '/product/crm' },
      { title: 'Projects', href: '/product/projects' },
      { title: 'Notes', href: '/product/notes' },
      { title: 'Automations', href: '/product/automations' },
      { title: 'Reports', href: '/product/reports' },
      { title: 'Mobile App', href: '/product/mobile-app' },
    ],
    steps: [
      {
        title: 'Unify sales + support',
        description: 'One place to manage prospect conversations and customer issues.',
        bullets: ['Shared inbox triage', 'Link threads to CRM records', 'Auto-create tasks for urgent issues'],
      },
      {
        title: 'Onboard customers predictably',
        description: 'Turn onboarding into a checklist + automated sequence.',
        bullets: ['Onboarding project template', 'Reminder sequence for missing setup steps', 'Client portal for visibility'],
      },
      {
        title: 'Ship with clarity',
        description: 'Keep product work and customer feedback connected.',
        bullets: ['Projects + boards', 'Notes connected to tasks', 'Reporting on cycle time and throughput'],
      },
    ],
    faqs: [
      {
        q: 'Is this template “too much” for a solo founder?',
        a: 'Not at all. Start with inbox + CRM + a lightweight project board. Add automation and reporting only when the workflow is stable.',
      },
    ],
  },
  {
    slug: 'consulting-studio',
    title: 'Consulting Studio Template',
    subtitle: 'A clean client delivery system for consultants: proposals → onboarding → execution → renewal.',
    summary:
      'Designed for service businesses that sell expertise: keep conversations, deliverables, files, and renewals in one connected workspace.',
    image: 'https://placehold.co/1200x675/png?text=Consulting%20Studio%20Template',
    bestFor: ['Consultants', 'Boutique firms', 'Fractional operators'],
    includesModules: [
      { title: 'CRM', href: '/product/crm' },
      { title: 'Sequences', href: '/product/sequences' },
      { title: 'Projects', href: '/product/projects' },
      { title: 'Files', href: '/product/files' },
      { title: 'Client Portal', href: '/product/client-portal' },
      { title: 'Reports', href: '/product/reports' },
    ],
    steps: [
      {
        title: 'Manage your pipeline',
        description: 'Track opportunities and keep outreach consistent.',
        bullets: ['Pipeline stages', 'Follow-up sequences', 'Notes + next steps tied to each deal'],
      },
      {
        title: 'Deliver work with portals',
        description: 'Reduce email by giving clients one clean view of progress.',
        bullets: ['Client portal status', 'Secure file sharing', 'Approvals and requests'],
      },
      {
        title: 'Renew and expand accounts',
        description: 'Make renewals predictable with reminders and health indicators.',
        bullets: ['Renewal tasks', 'Reporting visibility', 'Client timeline history'],
      },
    ],
    faqs: [
      {
        q: 'Does the template include proposal documents?',
        a: 'It includes a proposal workflow structure (pipeline stages, follow-ups, and project kickoff). You can attach your own proposal docs or adapt a doc template inside UNOBITS.',
      },
    ],
  },
  {
    slug: 'ecommerce-ops',
    title: 'E‑commerce Ops Template',
    subtitle: 'Connect customer conversations, fulfillment workflows, and operational reporting.',
    summary:
      'A template for operators who want fewer tabs: inbox triage, task routing, inventory signals, and reporting dashboards tied together.',
    image: 'https://placehold.co/1200x675/png?text=E-commerce%20Ops%20Template',
    bestFor: ['E‑commerce operators', 'Small teams', 'Ops managers'],
    includesModules: [
      { title: 'Inbox', href: '/product/inbox' },
      { title: 'Projects', href: '/product/projects' },
      { title: 'Office', href: '/product/office' },
      { title: 'Inventory', href: '/product/inventory' },
      { title: 'Reports', href: '/product/reports' },
      { title: 'Automations', href: '/product/automations' },
    ],
    steps: [
      {
        title: 'Triage support and operations requests',
        description: 'Keep customer issues and ops tasks out of personal inboxes.',
        bullets: ['Shared inbox routing', 'Tags for common issues', 'Auto-create tasks for refunds/fulfillment checks'],
      },
      {
        title: 'Operate with repeatable checklists',
        description: 'Turn recurring ops into predictable workflows.',
        bullets: ['Daily ops checklist', 'Approvals for exceptions', 'SOP links inside tasks'],
      },
      {
        title: 'Track inventory + report',
        description: 'Make inventory and ops visible without spreadsheets.',
        bullets: ['Inventory records linked to tasks', 'Alerts via workflows', 'Reports for stock movement'],
      },
    ],
    faqs: [
      {
        q: 'Can I integrate with Shopify or other commerce platforms?',
        a: 'UNOBITS supports integrations and webhooks. Many teams start by keeping their commerce platform and running ops workflows inside UNOBITS.',
      },
    ],
  },
];

export const TEMPLATE_SLUGS = TEMPLATE_PAGES.map((t) => t.slug);

export function getTemplatePage(slug: string) {
  return TEMPLATE_PAGES.find((t) => t.slug === slug);
}
