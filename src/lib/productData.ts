// src/lib/productData.ts

export type ProductFeatureSection = {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  highlights: string[];
};

export type ProductPageDefinition = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  comingSoon?: boolean;
  sections: ProductFeatureSection[];
  relatedSlugs?: string[];
};

const img = (label: string) =>
  `https://placehold.co/1600x1000/050507/00D4FF?text=${encodeURIComponent(label)}`;

function makeHub(
  slug: string,
  title: string,
  subtitle: string,
  category: string,
  summary: string,
  sectionLabels: Array<{ title: string; desc: string; bullets: string[] }>,
  relatedSlugs: string[]
): ProductPageDefinition {
  return {
    slug,
    title,
    subtitle,
    category,
    summary,
    sections: sectionLabels.map((s, i) => ({
      name: `${slug}-section-${i + 1}`,
      title: s.title,
      description: s.desc,
      imageUrl: img(`${title} · ${s.title}`),
      highlights: s.bullets,
    })),
    relatedSlugs,
  };
}

function makeModule(
  slug: string,
  title: string,
  subtitle: string,
  category: string,
  summary: string,
  bullets: string[],
  relatedSlugs: string[]
): ProductPageDefinition {
  return {
    slug,
    title,
    subtitle,
    category,
    summary,
    sections: [
      {
        name: `${slug}-overview`,
        title: `Built for real work — not more tabs`,
        description:
          `UNOBITS keeps ${title.toLowerCase()} connected to your projects, clients, and communication so your team works in one place.`,
        imageUrl: img(title),
        highlights: bullets,
      },
      {
        name: `${slug}-connected`,
        title: `Connected to the rest of your OS`,
        description:
          `Link ${title.toLowerCase()} directly to CRM records, project tasks, files, and automations so context never gets lost.`,
        imageUrl: img(`${title} · Connected`),
        highlights: [
          'Cross‑link anything (clients ↔ tasks ↔ conversations)',
          'Permissions & roles keep data clean',
          'Search across the entire workspace',
        ],
      },
    ],
    relatedSlugs,
  };
}

/**
 * Product pages — mirrors the full platform map.
 *
 * Tip: keep slugs stable because static export generates one page per slug.
 */
export const PRODUCT_PAGES: ProductPageDefinition[] = [
  // Platform
  makeModule(
    'dashboard',
    'Dashboard',
    'Your entire business, summarized in one place.',
    'Platform',
    'A unified command center that pulls in live work, conversations, clients, and KPIs.',
    ['Live activity feed across projects, inbox, and clients', 'Pin what matters: boards, reports, and notes', 'Company‑wide search & quick actions'],
    ['communication', 'workspace', 'productivity', 'reports']
  ),

  // Communication hub
  makeHub(
    'communication',
    'Communication',
    'Inbox, chat, and email — in one shared context.',
    'Communication',
    'Turn communication into structured work: assign, route, and tie every message to a client or project.',
    [
      {
        title: 'One inbox for everything',
        desc: 'Route conversations from chat and connected email into shared workflows.',
        bullets: ['Shared inbox views for teams', 'Assign, tag, and set SLAs', 'Turn messages into tasks instantly'],
      },
      {
        title: 'Real‑time collaboration',
        desc: 'Keep decisions in the open with threads, mentions, and live presence.',
        bullets: ['@mentions & threaded discussions', 'Presence indicators and activity', 'File sharing + searchable history'],
      },
      {
        title: 'Automate your communication',
        desc: 'Use triggers to route, triage, and follow up without extra tools.',
        bullets: ['Auto‑assign based on client/project', 'Sequences & follow‑ups', 'Integrations + webhooks'],
      },
    ],
    ['inbox', 'chat', 'email', 'automations']
  ),
  makeModule(
    'inbox',
    'Inbox',
    'A shared inbox that works like a workflow.',
    'Communication',
    'Triage, assign, and resolve customer and internal messages with full context.',
    ['Shared inboxes + team assignment', 'Internal notes and collision detection', 'Link every thread to CRM & projects'],
    ['communication', 'email', 'crm']
  ),
  makeModule(
    'chat',
    'Chat',
    'Fast team chat that stays connected to work.',
    'Communication',
    'Threads, channels, and direct messages with built‑in context.',
    ['Channels for teams and projects', 'Threaded conversations + mentions', 'Share files, notes, and tasks inline'],
    ['communication', 'projects', 'files']
  ),
  makeModule(
    'email',
    'Email',
    'Bring email inside your business OS.',
    'Communication',
    'Connected email that syncs with your inbox, CRM, sequences, and tasks.',
    ['Connect multiple accounts & aliases', 'Shared inbox + routing rules', 'Tie emails to CRM records automatically'],
    ['communication', 'inbox', 'sequences', 'crm']
  ),

  // Workspace hub
  makeHub(
    'workspace',
    'Workspace',
    'Projects, boards, office workflows, and time tracking.',
    'Workspace',
    'Run delivery and internal ops from one workspace: planning, execution, review, and reporting.',
    [
      {
        title: 'Projects that connect to clients',
        desc: 'Every project can attach to a client, deal, or onboarding step.',
        bullets: ['Client‑linked projects', 'Task dependencies & ownership', 'Milestones + delivery checklists'],
      },
      {
        title: 'Visual execution',
        desc: 'Boards and views that match how your team works.',
        bullets: ['Kanban boards, lists, calendars', 'Swimlanes & custom statuses', 'Templates for repeatable work'],
      },
      {
        title: 'Operational visibility',
        desc: 'Track time and capacity for accurate delivery and billing.',
        bullets: ['Time tracking by project/task', 'Team availability view', 'Reports for utilization and delivery'],
      },
    ],
    ['projects', 'boards', 'office', 'time-tracking']
  ),
  makeModule(
    'projects',
    'Projects',
    'Plan, execute, and deliver with total clarity.',
    'Workspace',
    'A flexible project system that stays connected to chat, email, files, and clients.',
    ['Multiple views: list, board, calendar', 'Templates for repeatable work', 'Link tasks to CRM & inbox threads'],
    ['workspace', 'boards', 'crm']
  ),
  makeModule(
    'boards',
    'Boards',
    'Whiteboards, planning boards, and real‑time drawing.',
    'Workspace',
    'Collaborate visually with live cursors, sketching, and sticky‑note workflows.',
    ['Real‑time drawing + sticky notes', 'Wireframes, mindmaps, and planning canvases', 'Export to files or turn into tasks'],
    ['workspace', 'external', 'files']
  ),
  makeModule(
    'office',
    'Office',
    'Internal operations, approvals, and repeatable processes.',
    'Workspace',
    'Standardize how work moves through your business — without adding another tool.',
    ['Requests & approvals', 'Policies, SOPs, and templates', 'Link processes to projects and automations'],
    ['workspace', 'automations', 'reports']
  ),
  makeModule(
    'time-tracking',
    'Time Tracking',
    'Track time where work happens.',
    'Workspace',
    'Fast timers and accurate timesheets connected directly to tasks and clients.',
    ['Timers inside tasks', 'Timesheets + approvals', 'Utilization and billing reports'],
    ['workspace', 'finance', 'reports']
  ),

  // Automations
  makeModule(
    'automations',
    'Automations',
    'Make work run itself with triggers and actions.',
    'Automation',
    'Automate routing, follow‑ups, reminders, and hand‑offs across the entire platform.',
    ['No‑code rules: when X happens, do Y', 'Cross‑module automations (CRM → projects → inbox)', 'Integrations + webhooks'],
    ['integrations', 'sequences', 'workspace']
  ),

  // Productivity hub
  makeHub(
    'productivity',
    'Productivity',
    'Calendar, notes, and files — designed to move work forward.',
    'Productivity',
    'Capture ideas, store documents, and schedule work — all connected to projects and clients.',
    [
      {
        title: 'Calendar that understands your work',
        desc: 'Schedule meetings and time blocks that connect to clients and projects.',
        bullets: ['Calendar views + quick scheduling', 'Link events to work items', 'Team availability planning'],
      },
      {
        title: 'Notes you can act on',
        desc: 'Turn notes into tasks and connect them to work instantly.',
        bullets: ['Meeting notes templates', 'Convert to tasks/projects', 'Search across notes & files'],
      },
      {
        title: 'Files where teams collaborate',
        desc: 'Store and share files in the same place you communicate and execute.',
        bullets: ['Versioning + comments', 'Permissions & link sharing', 'Attach files to anything'],
      },
    ],
    ['calendar', 'notes', 'files']
  ),
  makeModule(
    'calendar',
    'Calendar',
    'Plan your time like a team.',
    'Productivity',
    'Personal and team calendars that link to projects, clients, and tasks.',
    ['Team scheduling + availability', 'Time blocks for focused work', 'Event‑to‑task and event‑to‑client links'],
    ['productivity', 'projects', 'crm']
  ),
  makeModule(
    'notes',
    'Notes',
    'Write it once. Use it everywhere.',
    'Productivity',
    'Knowledge, meeting notes, and documentation that becomes action.',
    ['Templates for meetings & SOPs', 'Mention teammates and link work', 'Convert sections to tasks'],
    ['productivity', 'office', 'files']
  ),
  makeModule(
    'files',
    'Files',
    'A modern file system for teams.',
    'Productivity',
    'Store, organize, and collaborate on files in the same OS as your projects and clients.',
    ['Folders, tags, and powerful search', 'Permissions and link sharing', 'Attach to projects, CRM, and inbox threads'],
    ['productivity', 'projects', 'crm']
  ),

  // Clients & Business hub
  makeHub(
    'growth',
    'Growth',
    'Scale revenue without scaling tools.',
    'Growth',
    'Connect CRM, shared inbox, outreach sequences, onboarding, and reporting — so “lead → customer → delivery” runs in one workflow.',
    [
      {
        title: 'Capture and qualify leads',
        desc: 'Centralize inbound conversations and keep context attached to the pipeline.',
        bullets: ['Shared inbox routing for inbound', 'CRM stages for qualification', 'Tasks created from real conversations'],
      },
      {
        title: 'Turn deals into onboarding automatically',
        desc: 'Standardize what happens after “won” so nothing falls through the cracks.',
        bullets: ['Onboarding templates and checklists', 'Client portal setup for visibility', 'Automations for reminders and hand-offs'],
      },
      {
        title: 'Measure what matters',
        desc: 'Track pipeline health and delivery outcomes without spreadsheets.',
        bullets: ['Dashboards by pipeline and client', 'Connected reports across modules', 'Less manual reporting busywork'],
      },
    ],
    ['crm', 'inbox', 'sequences', 'onboarding', 'client-portal', 'reports']
  ),

  makeHub(
    'operations',
    'Operations',
    'Run daily execution with less chaos.',
    'Operations',
    'Standardize how work gets done across projects, approvals, time, portals, and reporting — designed mobile‑first for founders and operators.',
    [
      {
        title: 'Standardize execution',
        desc: 'Turn recurring work into templates your team can follow.',
        bullets: ['Project templates and boards', 'Tasks connected to files and decisions', 'Clear ownership and due dates'],
      },
      {
        title: 'Operational clarity',
        desc: 'See what is happening without chasing updates.',
        bullets: ['Dashboards and reporting', 'Time tracking and utilization', 'Mobile-first leadership visibility'],
      },
      {
        title: 'Approvals and internal workflows',
        desc: 'Requests, approvals, and SOPs live with the work — not scattered across email threads.',
        bullets: ['Office workflows for approvals', 'Team portal for policies and navigation', 'Automations for routing and reminders'],
      },
    ],
    ['projects', 'boards', 'office', 'time-tracking', 'team-portal', 'dashboard', 'reports', 'mobile-app']
  ),

  makeHub(
    'clients-business',
    'Clients & Business',
    'CRM, onboarding, sequences, builder, finance, inventory, and add‑ons.',
    'Clients & Business',
    'Everything you need to win, onboard, deliver, and retain customers — without stitching tools together.',
    [
      {
        title: 'CRM that connects to delivery',
        desc: 'Move from lead → onboarding → project → renewal without losing context.',
        bullets: ['Pipelines + stages', 'Client profiles with full activity', 'One click: create projects & tasks'],
      },
      {
        title: 'Onboarding & sequences',
        desc: 'Standardize onboarding and automate follow‑ups.',
        bullets: ['Guided onboarding checklists', 'Sequences for outreach & nurturing', 'Triggers for hand‑offs'],
      },
      {
        title: 'Business tooling',
        desc: 'Finance and inventory features built into the OS (no tab switching).',
        bullets: ['Finance tracking', 'Inventory & add‑ons', 'Reports across clients & operations'],
      },
    ],
    ['crm', 'onboarding', 'sequences', 'builder', 'finance', 'inventory', 'add-ons']
  ),
  makeModule(
    'crm',
    'CRM',
    'Client records that include the whole story.',
    'Clients & Business',
    'A CRM that’s tightly connected to email, inbox, projects, and reporting.',
    ['Pipelines + deal stages', 'Full timeline: messages, tasks, files, notes', 'Automations and sequences'],
    ['clients-business', 'email', 'projects']
  ),
  makeModule(
    'onboarding',
    'Onboarding',
    'Repeatable onboarding experiences for every client and teammate.',
    'Clients & Business',
    'Guided onboarding checklists, templates, and automation that make hand‑offs painless.',
    ['Onboarding flows & templates', 'Automated tasks and reminders', 'Portal‑ready onboarding views'],
    ['clients-business', 'client-portal', 'automations']
  ),
  makeModule(
    'sequences',
    'Sequences',
    'Automated outreach and follow‑up that feels personal.',
    'Clients & Business',
    'Build sequences that sync with CRM stages and inbox activity.',
    ['Multi‑step sequences with delays', 'CRM‑triggered follow‑ups', 'Stop/skip logic based on replies'],
    ['clients-business', 'email', 'automations']
  ),
  makeModule(
    'builder',
    'Builder',
    'Design workflows, portals, and web elements — fast.',
    'Clients & Business',
    'A flexible builder for pages, flows, and structured experiences across your OS.',
    ['Drag‑and‑drop building blocks', 'Reusable templates', 'Connect elements to data & automations'],
    ['web-elements', 'client-portal', 'integrations']
  ),
  makeModule(
    'finance',
    'Finance',
    'Track financial operations inside your OS.',
    'Clients & Business',
    'Lightweight finance tooling connected to clients, time tracking, and inventory.',
    ['Track costs and revenue by client/project', 'Time‑to‑billing visibility', 'Reporting across operations'],
    ['inventory', 'time-tracking', 'reports']
  ),
  makeModule(
    'inventory',
    'Inventory',
    'Know what you have and what’s next.',
    'Clients & Business',
    'Inventory tracking connected to projects, add‑ons, and reporting.',
    ['Stock levels and movement tracking', 'Attach inventory to projects/orders', 'Inventory reports & alerts'],
    ['finance', 'add-ons', 'reports']
  ),
  makeModule(
    'add-ons',
    'Add‑Ons',
    'Extend the OS with modular capabilities.',
    'Clients & Business',
    'Enable add‑ons as your business grows: portals, integrations, exports, and more.',
    ['Turn features on/off per workspace', 'Upgrade paths by plan', 'Keep everything in one ecosystem'],
    ['integrations', 'client-portal', 'team-portal']
  ),

  // Digital Twin hub
  makeHub(
    'digital-twin',
    'Digital Twin',
    'Mirror your business operations — then automate and optimize them.',
    'Digital Twin',
    'A structured representation of your work, clients, assets, and processes for reporting and automation.',
    [
      {
        title: 'Structured business objects',
        desc: 'Model clients, projects, assets, and workflows as connected records.',
        bullets: ['Connected records across modules', 'Consistent reporting', 'Permissions and audit trails'],
      },
      {
        title: 'Web elements & embeds',
        desc: 'Expose the right pieces of your OS externally—securely.',
        bullets: ['Embeddable elements', 'Portals and forms', 'Controlled access and sharing'],
      },
      {
        title: 'Integrations & external systems',
        desc: 'Connect to the tools you must keep—without losing your single-tab workflow.',
        bullets: ['Native integrations + webhooks', 'External project/collaboration app', 'Exports and reporting APIs'],
      },
    ],
    ['web-elements', 'reports', 'integrations', 'external']
  ),
  makeModule(
    'web-elements',
    'Web Elements',
    'Embed UNOBITS anywhere.',
    'Digital Twin',
    'Turn internal processes into secure, shareable elements and experiences.',
    ['Embeddable widgets and forms', 'Client-facing secure views', 'Connect elements to data and automations'],
    ['builder', 'client-portal', 'integrations']
  ),
  makeModule(
    'reports',
    'Reports',
    'See what’s happening—instantly.',
    'Digital Twin',
    'Operational reporting across projects, communication, clients, and finance.',
    ['Dashboards for teams and leadership', 'Delivery & utilization reports', 'CRM + pipeline visibility'],
    ['dashboard', 'time-tracking', 'crm']
  ),
  {
    ...makeModule(
      'integrations',
      'Integrations',
      'Connect the tools you need—without living in them.',
      'Digital Twin',
      'Integrations keep your ecosystem connected while UNOBITS stays your command center.',
      ['Native integrations + webhooks', 'Automation connectors', 'Data export & reporting access', 'Social media integrations (coming soon)'],
      ['external', 'automations', 'reports']
    ),
    // Highlight the requested upcoming feature.
    comingSoon: false,
  },
  makeModule(
    'external',
    'External',
    'External collaboration and real‑time project experiences.',
    'Digital Twin',
    'A dedicated external app for high‑frequency collaboration: live boards, rapid project sync, and real‑time teamwork.',
    ['Ultra real‑time collaboration experience', 'Live drawing boards + shared canvases', 'Syncs back to your UNOBITS workspace'],
    ['boards', 'projects', 'communication']
  ),

  // Portals
  makeModule(
    'client-portal',
    'Client Portal',
    'Give clients a clean, secure view of work in progress.',
    'Portals',
    'Share status, files, messages, and requests without messy email threads.',
    ['Client-facing dashboards', 'Secure file sharing and approvals', 'Requests, forms, and updates'],
    ['team-portal', 'onboarding', 'web-elements']
  ),
  makeModule(
    'team-portal',
    'Team Portal',
    'A home base for your internal team.',
    'Portals',
    'Keep team updates, policies, and operational workflows in one place.',
    ['Role-based navigation', 'Office docs + SOPs', 'Unified notifications'],
    ['client-portal', 'office', 'dashboard']
  ),

  // Help
  makeModule(
    'help-center',
    'Help Center',
    'Answers, guides, and best practices to keep you moving.',
    'Support',
    'Searchable help content plus support channels for every plan.',
    ['Guides by module', 'Troubleshooting and onboarding', 'Contact support when you need it'],
    ['automations', 'integrations', 'onboarding']
  ),

  // Ecosystem + Apps
  makeHub(
    'ecosystem',
    'The UNOBITS Ecosystem',
    'One platform. One login. One tab.',
    'Platform',
    'UNOBITS replaces the “stack” with a connected operating system: communication, delivery, CRM, docs, reporting, and automations.',
    [
      {
        title: 'One tab workflow',
        desc: 'Stop bouncing between apps and keep context attached to the work itself.',
        bullets: ['Unified navigation & global search', 'One data model across modules', 'Fewer hand-offs and copy/paste'],
      },
      {
        title: 'Everything is connected',
        desc: 'Messages, files, tasks, and clients are linked — not isolated.',
        bullets: ['CRM ↔ inbox ↔ projects', 'Notes & docs stay in context', 'Automations tie it all together'],
      },
      {
        title: 'External + integrations when you need them',
        desc: 'Keep what you must, but work inside UNOBITS.',
        bullets: ['Integrations & webhooks', 'External collaboration app', 'Exports and reports'],
      },
    ],
    [
      'dashboard',
      'communication',
      'workspace',
      'productivity',
      'clients-business',
      'digital-twin',
    ]
  ),
  makeModule(
    'mobile-app',
    'Mobile App',
    'Run your business from anywhere.',
    'Apps',
    'UNOBITS mobile keeps your inbox, tasks, notes, and client updates in your pocket.',
    ['Fast inbox & notifications', 'Create tasks, notes, and updates on the go', 'Secure access with device protections'],
    ['desktop-app', 'ecosystem', 'communication']
  ),
  makeModule(
    'desktop-app',
    'Desktop App',
    'A focused workspace for power users.',
    'Apps',
    'Stay in flow with a dedicated desktop experience for high‑volume work.',
    ['Multi‑window workflows', 'Keyboard shortcuts and quick search', 'Offline-friendly caching (where supported)'],
    ['mobile-app', 'ecosystem', 'workspace']
  ),
];

export const PRODUCT_PAGE_MAP = new Map(PRODUCT_PAGES.map((p) => [p.slug, p] as const));

export const PRODUCT_SLUGS = PRODUCT_PAGES.map((p) => p.slug);

export const PRODUCT_CATEGORIES = Array.from(
  PRODUCT_PAGES.reduce((acc, p) => {
    if (!acc.has(p.category)) acc.set(p.category, []);
    acc.get(p.category)!.push(p);
    return acc;
  }, new Map<string, ProductPageDefinition[]>()).entries()
).map(([category, pages]) => ({
  category,
  pages: pages.sort((a, b) => a.title.localeCompare(b.title)),
}));

export function getProductPage(slug: string): ProductPageDefinition | undefined {
  return PRODUCT_PAGE_MAP.get(slug);
}
