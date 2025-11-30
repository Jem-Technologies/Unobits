(function () {
  // ------------------------
  // THEME
  // ------------------------
  let currentTheme = 'dark';

  function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    currentTheme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch (_) {
      // ignore storage errors
    }
    const icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☾' : '☀';
    }
  }

  function initTheme() {
    let initial = 'dark';
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        initial = stored;
      }
    } catch (_) {}
    applyTheme(initial);
  }

  function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const next = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // ------------------------
  // HEADER BEHAVIOR
  // ------------------------
  function setupScrollHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 16) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  let mobileMenuEl = null;
  let mobileToggleEl = null;
  let productsMenuEl = null;
  let productsToggleEl = null;

  function closeMobileMenu() {
    if (mobileMenuEl && !mobileMenuEl.classList.contains('hidden')) {
      mobileMenuEl.classList.add('hidden');
      if (mobileToggleEl) {
        const icon = document.getElementById('mobile-menu-icon');
        if (icon) icon.textContent = '☰';
      }
    }
  }

  function closeProductsMenu() {
    if (productsMenuEl && !productsMenuEl.classList.contains('hidden')) {
      productsMenuEl.classList.add('hidden');
    }
  }

  function setupMenus() {
    mobileMenuEl = document.getElementById('mobile-menu');
    mobileToggleEl = document.getElementById('mobile-menu-toggle');
    productsMenuEl = document.getElementById('products-menu');
    productsToggleEl = document.getElementById('products-toggle');

    if (mobileToggleEl && mobileMenuEl) {
      mobileToggleEl.addEventListener('click', function (e) {
        e.stopPropagation();
        const icon = document.getElementById('mobile-menu-icon');
        const isHidden = mobileMenuEl.classList.contains('hidden');
        if (isHidden) {
          mobileMenuEl.classList.remove('hidden');
          if (icon) icon.textContent = '✕';
        } else {
          mobileMenuEl.classList.add('hidden');
          if (icon) icon.textContent = '☰';
        }
      });
    }

    if (productsToggleEl && productsMenuEl) {
      productsToggleEl.addEventListener('click', function (e) {
        e.stopPropagation();
        productsMenuEl.classList.toggle('hidden');
      });
    }

    document.addEventListener('click', function (e) {
      const target = e.target;
      if (
        productsMenuEl &&
        !productsMenuEl.classList.contains('hidden') &&
        target !== productsToggleEl &&
        !productsMenuEl.contains(target) &&
        (!productsToggleEl || !productsToggleEl.contains(target))
      ) {
        productsMenuEl.classList.add('hidden');
      }
    });
  }

  // ------------------------
  // ROUTER DATA
  // ------------------------

  const FEATURE_MODULES = {
    '/crm': {
      title: 'Client Relationships, Decoded.',
      subtitle: 'CRM SUITE',
      description:
        'A CRM that thinks for you. Track leads, automate follow-ups, and visualize your sales pipeline with a drag-and-drop interface that feels like a command center.',
      features: [
        'Automated Lead Scoring',
        'Email Timeline Sync',
        'Pipeline Visualization',
        'Contact Enrichment'
      ],
      cardLabel: 'Contacts, deals and activity logs in one pane.',
      metricA: '8,204',
      metricBLabel: 'Win rate',
      metricB: '31.4%'
    },
    '/analytics': {
      title: 'Data That Drives Decisions.',
      subtitle: 'ANALYTICS',
      description:
        'Connect all your data sources. Our dashboard aggregates metrics from WordPress, Stripe, and Google Analytics into a single, real-time board.',
      features: [
        'Real-time Traffic Monitoring',
        'Revenue Forecasting',
        'Custom Reports',
        'Dark Mode Charts'
      ],
      cardLabel: 'Live dashboards for traffic, revenue and retention.',
      metricA: '3,918',
      metricBLabel: 'Data freshness',
      metricB: '< 60s'
    },
    '/projects': {
      title: 'Ship Faster, Together.',
      subtitle: 'PROJECTS',
      description:
        'Kanban, List, or Timeline. Manage your engineering and design sprints with a tool built for high-velocity teams.',
      features: [
        'Sprint Planning',
        'Resource Allocation',
        'Time Tracking',
        'GitHub Integration'
      ],
      cardLabel: 'Sprints, tasks and delivery dates in sync.',
      metricA: '142',
      metricBLabel: 'On-time delivery',
      metricB: '96%'
    },
    '/finance': {
      title: 'Financial Clarity.',
      subtitle: 'FINANCE',
      description:
        'Invoicing, expense tracking, and payroll. Handle the numbers without leaving your operating system.',
      features: [
        'Auto-Recurring Invoices',
        'Expense Scanning',
        'Tax Estimation',
        'Stripe Connect'
      ],
      cardLabel: 'Cash flow, invoices and payouts in one ledger.',
      metricA: '$428k',
      metricBLabel: 'Paid on time',
      metricB: '92%'
    },
    '/marketing': {
      title: 'Campaigns on Autopilot.',
      subtitle: 'MARKETING',
      description:
        'Design beautiful emails, automate drip sequences, and track open rates. Directly integrated with your CRM data.',
      features: [
        'Drag-and-Drop Editor',
        'A/B Testing',
        'Audience Segmentation',
        'Social Media Scheduling'
      ],
      cardLabel: 'Emails, journeys and audiences wired to your CRM.',
      metricA: '27.8%',
      metricBLabel: 'Average open rate',
      metricB: '+6.2 pts'
    },
    '/wordpress': {
      title: 'Headless Power.',
      subtitle: 'WORDPRESS',
      description:
        'Manage multiple WordPress sites from one dashboard. Update plugins, publish posts, and check security health instantly.',
      features: [
        'Multi-site Management',
        'One-click Updates',
        'Content Sync',
        'Uptime Monitoring'
      ],
      cardLabel: 'Fleet-wide WordPress orchestration from one OS.',
      metricA: '36 sites',
      metricBLabel: 'Update coverage',
      metricB: '100%'
    }
  };

  const PRICING_TIERS = [
    {
      name: 'Starter',
      price: '$29',
      period: '/mo',
      desc: 'Perfect for freelancers and solo founders.',
      features: [
        '1 Workspace',
        'Up to 5 Projects',
        'Basic CRM (500 contacts)',
        'Email Support',
        'No WordPress Sync'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Growth',
      price: '$79',
      period: '/mo',
      desc: 'For growing teams needing full power.',
      features: [
        '5 Workspaces',
        'Unlimited Projects',
        'Advanced CRM (Unlimited)',
        'WordPress Integration',
        'Financial Analytics',
        'Priority Support'
      ],
      cta: 'Get Growth',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Server-grade control for large orgs.',
      features: [
        'Unlimited Everything',
        'Dedicated Server Instance',
        'Custom API Access',
        'White-labeling',
        '24/7 Phone Support',
        'On-premise Deployment Option'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  const FAQS = [
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, Unobits is a month-to-month service. You can cancel your subscription at any time from your dashboard settings.'
    },
    {
      q: 'Do you offer a free trial?',
      a: 'Absolutely. We offer a 14-day free trial on the Starter and Growth plans so you can test the OS before committing.'
    },
    {
      q: 'Is my data secure?',
      a: 'Security is our core philosophy. We use bank-grade AES-256 encryption for all data at rest and in transit. Regular audits ensure your data stays safe.'
    },
    {
      q: 'Can I upgrade later?',
      a: 'Yes, you can seamlessly upgrade from Starter to Growth instantly. Your data and settings will carry over automatically.'
    }
  ];

  const ABOUT_PARAGRAPHS = [
    'Unobits was born from a frustration with fragmented tools. We believe that a business should operate like a well-oiled machine—a singular server—rather than a collection of disconnected apps.',
    'Our mission is to provide the "Operating System" for modern enterprises. A sleek, seal-tight environment where data flows freely between finance, marketing, and operations.'
  ];

  const MODULE_OVERVIEW = [
    {
      id: 'inbox-chat',
      group: 'Communication',
      title: 'Inbox & Chat',
      caption:
        'Keep client email, shared inboxes and internal chat in one place so work never falls between tools.',
      bullets: [
        'Unified inbox with filters, thread list and full conversation view.',
        'Channel style chat for teams with file and voice note support.',
        'Per thread triage actions so you can assign, tag and move work forward.'
      ]
    },
    {
      id: 'workspace-projects',
      group: 'Execution',
      title: 'Workspace & Projects',
      caption:
        'Turn every client or initiative into a workspace with projects, tasks and time tracking wired together.',
      bullets: [
        'Projects grid plus a global Kanban board across workspaces.',
        'My Tasks view grouped into Today, Next and Later with drag and drop.',
        'Built in time tracker with lightweight reporting and CSV export.'
      ]
    },
    {
      id: 'crm-clients',
      group: 'Revenue',
      title: 'CRM & Clients',
      caption:
        'Manage the whole client lifecycle from first contact to paid invoice in one operating system.',
      bullets: [
        'Drag and drop pipeline board for deals and onboarding stages.',
        'Client brief pages with brand details, stakeholders and requirements.',
        'Sequences, reminders and billing tables so no renewal is forgotten.'
      ]
    },
    {
      id: 'automations',
      group: 'Automation',
      title: 'Rules & Automations',
      caption:
        'Describe how your business should react to events and let rules keep the system in motion.',
      bullets: [
        'Condition and action based rules that watch data and timelines for changes.',
        'Dry run tester so you can simulate what a rule would do before enabling it.',
        'System generated log of what ran and when for quick troubleshooting.'
      ]
    },
    {
      id: 'calendar-notes',
      group: 'Rhythm',
      title: 'Calendar & Notes',
      caption:
        'Stay on top of meetings and decisions without needing a separate calendar or notes app.',
      bullets: [
        'Month, week and day calendar views wired into workspaces and clients.',
        'Quick add events and lightweight scheduling helpers for busy teams.',
        'Plain note blocks with tags plus the ability to turn any line into a task.'
      ]
    },
    {
      id: 'reports-addons',
      group: 'Insights',
      title: 'Reports & Add‑Ons',
      caption:
        'Bring data and physical space into the same picture with lightweight reporting and digital twin tools.',
      bullets: [
        'Built in reports that visualise revenue, workload and pipeline health.',
        'Desk and space booking grids that mirror real world seating plans.',
        'Extensible add on surfaces designed to sit next to your everyday work.'
      ]
    },
    {
      id: 'admin-theme',
      group: 'Control',
      title: 'Admin & Theme',
      caption:
        'Tune the feel of the OS for different teams with fine grained control over appearance and access.',
      bullets: [
        'Theme colour picker, density options and wallpapers for different moods.',
        'High contrast and reduced motion friendly defaults for accessible workspaces.',
        'Role aware navigation and settings so Admins, Managers and Clients see the right tools.'
      ]
    }
  ];

  // ------------------------
  // PAGE TEMPLATES
  // ------------------------

  const HOME_TEMPLATE = `
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      <div class="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern bg-[length:40px_40px] opacity-40 dark:opacity-20 pointer-events-none"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left side -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 animate-fade-in-up text-glow">
            Your Business, Unified.
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 mb-8 animate-fade-in-up animate-delay-100">
            Unobits is the single source of truth for your entire operation. CRM, projects, billing, and marketing—all in one place.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 animate-fade-in-up animate-delay-200">
            <a href="#/pricing" class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition">
              Get started for free
              <span class="ml-2 inline-block">&rarr;</span>
            </a>
          </div>
          <p class="text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 animate-fade-in-up animate-delay-300">
              No credit card · 14‑day free trial
            </p>
        </div>

        <!-- Right side (Animation) -->
        <div class="relative w-full h-96 flex items-center justify-center animate-fade-in-up animate-delay-200">
          <div class="absolute w-40 h-40 rounded-full bg-indigo-500/20 blur-2xl"></div>
          <div class="orbiting-circle" style="animation-delay: -1s;"></div>
          <div class="orbiting-circle" style="animation-delay: -2s; background-color: #00f0ff;"></div>
          <div class="orbiting-circle" style="animation-delay: -3s; background-color: #f472b6;"></div>
          <div class="orbiting-circle" style="animation-delay: -4s; background-color: #34d399;"></div>
          <div class="text-white font-semibold text-lg">Unobits</div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Everything you need, nothing you don’t.</h2>
        <p class="text-slate-400 mb-12">A complete toolkit to run your business, beautifully integrated.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Communication -->
          <div class="glass-panel rounded-2xl p-6 text-left">
            <h3 class="text-lg font-semibold text-white mb-2">Communication</h3>
            <p class="text-sm text-slate-300">Inbox, Chat, and Email all in one place.</p>
          </div>
          <!-- Workspace -->
          <div class="glass-panel rounded-2xl p-6 text-left">
            <h3 class="text-lg font-semibold text-white mb-2">Workspace</h3>
            <p class="text-sm text-slate-300">Projects, Boards, Office, and Time Tracking.</p>
          </div>
          <!-- Productivity -->
          <div class="glass-panel rounded-2xl p-6 text-left">
            <h3 class="text-lg font-semibold text-white mb-2">Productivity</h3>
            <p class="text-sm text-slate-300">Calendar, Notes, Files, and Automations.</p>
          </div>
          <!-- Clients & Business -->
          <div class="glass-panel rounded-2xl p-6 text-left">
            <h3 class="text-lg font-semibold text-white mb-2">Clients & Business</h3>
            <p class="text-sm text-slate-300">CRM, Onboarding, Sequences, Builder, and Billing.</p>
          </div>
          <!-- Add-Ons -->
          <div class="glass-panel rounded-2xl p-6 text-left">
            <h3 class="text-lg font-semibold text-white mb-2">Add-Ons</h3>
            <p class="text-sm text-slate-300">Digital Twin, Web Elements, and Reports.</p>
          </div>
          <!-- Integrations -->
          <div class="glass-panel rounded-2xl p-6 text-left">
            <h3 class="text-lg font-semibold text-white mb-2">Integrations</h3>
            <p class="text-sm text-slate-300">Client Portal, Team Portal, and Help Center.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Explore Unobits</h2>
        <p class="text-slate-400 mb-12">Learn more about the platform and how it can help your business.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="#/features" class="glass-panel rounded-2xl p-6 text-left hover:bg-slate-900/50 transition-colors">
            <h3 class="text-lg font-semibold text-white mb-2">Features</h3>
            <p class="text-sm text-slate-300">Discover the full range of Unobits' capabilities.</p>
          </a>
          <a href="#/pricing" class="glass-panel rounded-2xl p-6 text-left hover:bg-slate-900/50 transition-colors">
            <h3 class="text-lg font-semibold text-white mb-2">Pricing</h3>
            <p class="text-sm text-slate-300">Find the perfect plan for your business.</p>
          </a>
          <a href="#/about" class="glass-panel rounded-2xl p-6 text-left hover:bg-slate-900/50 transition-colors">
            <h3 class="text-lg font-semibold text-white mb-2">About Us</h3>
            <p class="text-sm text-slate-300">Learn about our mission and our team.</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Demo Block Section -->
    <section class="py-16 bg-slate-900/50">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">See Unobits in Action</h2>
        <p class="text-slate-400 mb-8">Click around on the interactive demo to get a feel for the platform.</p>
        <div class="relative w-full h-[600px] rounded-2xl bg-slate-900 border border-slate-800 p-8">
          <p class="text-slate-500">[Interactive Demo Placeholder]</p>
        </div>
      </div>
    </section>

    <section class="py-16 border-t border-slate-900/10 dark:border-slate-50/[0.06]">
      <div class="max-w-6xl mx-auto px-6 grid gap-8 lg:grid-cols-3">
        <div class="glass-panel rounded-2xl p-6 flex flex-col gap-3">
          <p class="text-[11px] font-mono text-indigo-400">OPERATORS CLOUD</p>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">CRM, projects & billing in sync</h3>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Move from lead to invoice without ever leaving the OS. Contacts, pipelines, tasks and quotes all share the same timeline.
          </p>
        </div>
        <div class="glass-panel rounded-2xl p-6 flex flex-col gap-3">
          <p class="text-[11px] font-mono text-emerald-400">REAL‑TIME ANALYTICS</p>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Your numbers, live</h3>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Replace spreadsheet dashboards with live revenue, retention and campaign performance streaming from the core database.
          </p>
        </div>
        <div class="glass-panel rounded-2xl p-6 flex flex-col gap-3">
          <p class="text-[11px] font-mono text-sky-400">AGENCY‑GRADE</p>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">Built for client work</h3>
          <p class="text-sm text-slate-600 dark:text-slate-300">
            Multi‑workspace support, partner access, and WordPress orchestration so you can run dozens of accounts from one console.
          </p>
        </div>
      </div>
    </section>
  `;

  // ------------------------
  // RENDER FUNCTIONS
  // ------------------------

  function renderHome(container) {
    container.innerHTML = HOME_TEMPLATE;
  }

  function renderFeaturesHub(container) {
    const cards = Object.keys(FEATURE_MODULES)
      .map(function (path) {
        const mod = FEATURE_MODULES[path];
        return `
          <a href="#${path}" data-route="${path}"
             class="group rounded-2xl border border-slate-800/80 bg-slate-950/70 hover:bg-slate-900 transition-colors p-5 flex flex-col gap-3">
            <span class="text-[11px] font-mono text-slate-400">${mod.subtitle}</span>
            <span class="text-lg font-semibold text-white">${mod.title}</span>
            <p class="text-sm text-slate-400">
              ${mod.description}
            </p>
            <div class="mt-2 inline-flex items-center text-[11px] text-indigo-400">
              <span class="mr-1">Open module</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>
        `;
      })
      .join('');

    const moduleCards = MODULE_OVERVIEW.map(function (mod) {
      const bulletItems = mod.bullets
        .map(function (text) {
          return `
            <li class="flex items-start gap-3">
              <span class="mt-[3px] inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-400">✓</span>
              <span class="text-xs md:text-sm text-slate-600 dark:text-slate-200">${text}</span>
            </li>
          `;
        })
        .join('');

      return `
        <article class="unb-feature-card glass-panel rounded-2xl p-5 flex flex-col gap-4">
          <div class="flex items-center justify-between gap-3">
            <div class="inline-flex items-center gap-2">
              <div class="unb-feature-icon-ring unb-float inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60">
                <span class="text-[10px] font-mono text-emerald-300 tracking-[0.16em]">${mod.group}</span>
              </div>
              <h3 class="text-sm font-semibold text-slate-100">${mod.title}</h3>
            </div>
          </div>
          <p class="text-xs md:text-sm text-slate-400">
            ${mod.caption}
          </p>
          <ul class="space-y-2">
            ${bulletItems}
          </ul>
        </article>
      `;
    }).join('');

    container.innerHTML = `
      <section class="pt-10 md:pt-16 pb-10 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
        <div class="max-w-6xl mx-auto px-6 space-y-10">
          <header class="max-w-3xl">
            <p class="unb-section-kicker text-[11px] font-mono text-indigo-400 mb-3">
              PLATFORM MODULES
            </p>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Every major part of your business in one OS.
            </h1>
            <p class="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Start from the modules that matter today and grow into the full CRM, projects, finance and analytics stack without changing systems.
            </p>
          </header>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            ${cards}
          </div>
        </div>
      </section>

      <section class="py-12 md:py-16">
        <div class="max-w-6xl mx-auto px-6 space-y-10">
          <header class="max-w-3xl">
            <p class="unb-section-kicker text-[11px] font-mono text-emerald-400 mb-3">
              INSIDE THE OS
            </p>
            <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-3">
              A closer look at what Unobits includes out of the box.
            </h2>
            <p class="text-sm md:text-base text-slate-600 dark:text-slate-300">
              Under the hood you get communication, execution, automation, scheduling and admin controls that are already wired together so teams can just work.
            </p>
          </header>
          <div class="grid gap-5 md:grid-cols-2 unb-feature-grid">
            ${moduleCards}
          </div>
        </div>
      </section>
    `;
  }

  function renderFeaturePage(container, module) {
    const featureItems = module.features
      .map(function (text) {
        return `
          <li class="flex items-start gap-3">
            <span class="mt-[3px] inline-flex w-5 h-5 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] text-emerald-400">✓</span>
            <span class="text-sm text-slate-600 dark:text-slate-200">${text}</span>
          </li>
        `;
      })
      .join('');

    container.innerHTML = `
      <section class="pt-10 md:pt-16">
        <div class="max-w-6xl mx-auto px-6 grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-start">
          <div>
            <p class="text-[11px] font-mono text-indigo-400 mb-3 uppercase tracking-[0.16em]">${module.subtitle}</p>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              ${module.title}
            </h1>
            <p class="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6">
              ${module.description}
            </p>
            <ul class="space-y-3 mb-6">
              ${featureItems}
            </ul>
            <div class="flex flex-wrap gap-3">
              <a href="#/pricing" data-route="/pricing" class="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition">
                Add to workspace
              </a>
              <a href="#/features" data-route="/features" class="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900/40 transition">
                Back to architecture
              </a>
            </div>
          </div>

          <div class="glass-panel rounded-2xl p-5 md:p-6 bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 shadow-xl">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-2 text-[11px] text-slate-400">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Module Monitor</span>
              </div>
              <span class="text-[9px] uppercase tracking-[0.2em] text-slate-500">LIVE</span>
            </div>
            <div class="h-40 rounded-xl bg-slate-900/90 border border-slate-800 mb-4 flex items-center justify-center text-[11px] text-slate-500">
              ${module.cardLabel || 'Stream of events, jobs and metrics for this module.'}
            </div>
            <div class="grid grid-cols-2 gap-3 text-xs">
              <div class="rounded-lg border border-slate-800/80 bg-slate-900/60 p-3">
                <p class="text-slate-400 mb-1">Active records</p>
                <p class="text-lg font-semibold text-slate-50">${module.metricA || '12,482'}</p>
              </div>
              <div class="rounded-lg border border-slate-800/80 bg-slate-900/60 p-3">
                <p class="text-slate-400 mb-1">${module.metricBLabel || 'SLA'}</p>
                <p class="text-lg font-semibold text-emerald-400">${module.metricB || '99.3%'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderPricing(container) {
    const tierCards = PRICING_TIERS.map(function (tier) {
      const borderClass = tier.highlighted
        ? 'border-indigo-500 bg-slate-950 text-white shadow-xl shadow-indigo-500/40'
        : 'border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-950/60';
      const badge = tier.highlighted
        ? `
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.16em] bg-indigo-500 text-white uppercase shadow-lg">
          Most popular
        </div>
      `
        : '';
      const priceMarkup =
        tier.price === 'Custom'
          ? `<span class="text-2xl font-semibold">${tier.price}</span>`
          : `<span class="text-3xl font-bold">${tier.price}</span><span class="ml-1 text-sm text-slate-500 dark:text-slate-400">${tier.period}</span>`;

      const featureItems = tier.features
        .map(function (feat) {
          return `
          <li class="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
            <span class="mt-[2px] inline-flex w-4 h-4 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] text-emerald-400">✓</span>
            <span>${feat}</span>
          </li>
        `;
        })
        .join('');

      const buttonClass = tier.highlighted
        ? 'bg-white text-slate-900 hover:bg-slate-100'
        : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500';

      return `
        <div class="relative rounded-2xl border ${borderClass} p-6 flex flex-col h-full">
          ${badge}
          <div class="mb-6 text-left">
            <h3 class="text-base font-semibold mb-1">${tier.name}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">${tier.desc}</p>
            <div class="flex items-baseline gap-1">
              ${priceMarkup}
            </div>
          </div>
          <ul class="space-y-2 mb-6 flex-1 text-left">
            ${featureItems}
          </ul>
          <button class="w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold ${buttonClass}">
            ${tier.cta}
          </button>
        </div>
      `;
    }).join('');

    const faqHtml = FAQS.map(function (faq) {
      return `
        <details class="group border border-slate-200 dark:border-slate-800 rounded-xl p-4">
          <summary class="flex items-center justify-between gap-2 cursor-pointer">
            <span class="text-xs font-medium text-slate-800 dark:text-slate-200">${faq.q}</span>
            <span class="text-slate-400 group-open:rotate-180 transition-transform text-sm">&or;</span>
          </summary>
          <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">
            ${faq.a}
          </p>
        </details>
      `;
    }).join('');

    container.innerHTML = `
      <section class="pt-10 md:pt-16 overflow-x-hidden">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <p class="text-[11px] font-mono text-indigo-400 mb-2 uppercase tracking-[0.16em]">Pricing</p>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Simple, transparent pricing.
            </h1>
            <p class="text-sm md:text-base text-slate-600 dark:text-slate-300">
              No hidden fees. No server maintenance costs. Cancel anytime.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            ${tierCards}
          </div>

          <div class="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">Frequently asked questions</h2>
              <div class="space-y-4">
                ${faqHtml}
              </div>
            </div>

            <div class="glass-panel rounded-2xl p-5 border border-slate-800 bg-slate-950/80 text-sm text-slate-200">
              <h3 class="text-sm font-semibold mb-2">Need something more custom?</h3>
              <p class="text-[11px] text-slate-400 mb-4">
                Talk to our team about dedicated infrastructure, on‑premise deployments or security reviews.
              </p>
              <a href="mailto:sales@unobits.com" class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-600 text-[11px] font-semibold text-white hover:bg-indigo-500">
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAbout(container) {
    container.innerHTML = `
      <section class="pt-10 md:pt-16">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white animate-fade-in-up">
            About Unobits
          </h1>
          <div class="space-y-4 text-sm md:text-base text-slate-600 dark:text-slate-300 mb-10 animate-fade-in-up animate-delay-100">
            <p>${ABOUT_PARAGRAPHS[0]}</p>
            <p>${ABOUT_PARAGRAPHS[1]}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animate-delay-200">
            <div class="glass-panel h-32 rounded-2xl border border-slate-800 flex flex-col items-start justify-center p-4">
              <p class="text-[11px] text-slate-400 mb-1 uppercase tracking-[0.16em]">Teams</p>
              <p class="text-sm font-semibold text-slate-50">Digital agencies, studios & operators.</p>
            </div>
            <div class="glass-panel h-32 rounded-2xl border border-slate-800 flex flex-col items-start justify-center p-4">
              <p class="text-[11px] text-slate-400 mb-1 uppercase tracking-[0.16em]">Philosophy</p>
              <p class="text-sm font-semibold text-slate-50">Opinionated defaults, flexible wiring.</p>
            </div>
            <div class="glass-panel h-32 rounded-2xl border border-slate-800 flex flex-col items-start justify-center p-4">
              <p class="text-[11px] text-slate-400 mb-1 uppercase tracking-[0.16em]">Stack</p>
              <p class="text-sm font-semibold text-slate-50">One unified OS instead of 12 tools.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderContact(container) {
    container.innerHTML = `
      <section class="pt-10 md:pt-16">
        <div class="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="animate-fade-in-up">
            <h1 class="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Get in touch
            </h1>
            <p class="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6">
              Have a question about the Enterprise OS? Our team usually responds within 2 hours during business days.
            </p>

            <div class="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center text-xs">
                  ✉
                </div>
                <div>
                  <p class="font-medium">Support</p>
                  <p class="text-[11px] text-slate-500">
                    <a href="mailto:support@unobits.com" class="hover:text-slate-300">support@unobits.com</a>
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-slate-100 dark:bg-white/10 rounded-full flex items-center justify-center text-xs">
                  ◎
                </div>
                <div>
                  <p class="font-medium">Sales & demos</p>
                  <p class="text-[11px] text-slate-500">
                    Tell us about your team and we'll tailor a walkthrough.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-panel rounded-2xl p-5 border border-slate-800 animate-fade-in-up animate-delay-100">
            <form id="contact-form" class="space-y-4 text-sm">
              <div>
                <label for="contact-name" class="block text-[11px] font-medium text-slate-400 mb-1">Name</label>
                <input id="contact-name" type="text" required class="w-full rounded-lg border border-slate-700 bg-black/20 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label for="contact-email" class="block text-[11px] font-medium text-slate-400 mb-1">Work email</label>
                <input id="contact-email" type="email" required class="w-full rounded-lg border border-slate-700 bg-black/20 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="you@company.com" />
              </div>
              <div>
                <label for="contact-company" class="block text-[11px] font-medium text-slate-400 mb-1">Company</label>
                <input id="contact-company" type="text" class="w-full rounded-lg border border-slate-700 bg-black/20 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Studio Inc." />
              </div>
              <div>
                <label for="contact-message" class="block text-[11px] font-medium text-slate-400 mb-1">What are you looking to run on Unobits?</label>
                <textarea id="contact-message" rows="4" class="w-full rounded-lg border border-slate-700 bg-black/20 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Tell us about your stack, team size and workflow."></textarea>
              </div>
              <button type="submit" class="w-full inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold px-4 py-2.5 hover:bg-indigo-500">
                Send message
              </button>
              <p id="contact-result" class="text-[11px] text-slate-500 hidden mt-1">
                Thanks, we received your message. We'll get back to you shortly.
              </p>
            </form>
          </div>
        </div>
      </section>
    `;

    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        const result = document.getElementById('contact-result');
        if (result) {
          result.classList.remove('hidden');
        }
      });
    }
  }

  function renderNotFound(container) {
    container.innerHTML = `
      <section class="pt-10 md:pt-16">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <p class="text-[11px] font-mono text-indigo-400 mb-2 uppercase tracking-[0.16em]">404</p>
          <h1 class="text-3xl md:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
            Route not found.
          </h1>
          <p class="text-sm text-slate-600 dark:text-slate-300 mb-6">
            The module or page you requested does not exist in this Enterprise OS.
          </p>
          <a href="#/" data-route="/" class="inline-flex items-center justify-center px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500">
            Back to home
          </a>
        </div>
      </section>
    `;
  }

  // ------------------------
  // ROUTER CORE
  // ------------------------

  const ROUTES = {
    '/': renderHome,
    '/features': renderFeaturesHub,
    '/pricing': renderPricing,
    '/about': renderAbout,
    '/contact': renderContact,
    '/crm': function (c) {
      renderFeaturePage(c, FEATURE_MODULES['/crm']);
    },
    '/analytics': function (c) {
      renderFeaturePage(c, FEATURE_MODULES['/analytics']);
    },
    '/projects': function (c) {
      renderFeaturePage(c, FEATURE_MODULES['/projects']);
    },
    '/finance': function (c) {
      renderFeaturePage(c, FEATURE_MODULES['/finance']);
    },
    '/marketing': function (c) {
      renderFeaturePage(c, FEATURE_MODULES['/marketing']);
    },
    '/wordpress': function (c) {
      renderFeaturePage(c, FEATURE_MODULES['/wordpress']);
    }
  };

  function getCurrentPath() {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1) || '/';
    return path;
  }

  function highlightNav(path) {
    const links = document.querySelectorAll('[data-route]');
    links.forEach(function (link) {
      const route = link.getAttribute('data-route');
      if (!route) return;
      if (route === path) {
        link.classList.add('text-white', 'font-semibold');
      } else {
        link.classList.remove('text-white', 'font-semibold');
      }
    });
  }

  function renderRoute() {
    const path = getCurrentPath();
    const main = document.getElementById('app-main');
    if (!main) return;
    const handler = ROUTES[path] || renderNotFound;
    main.innerHTML = '';
    handler(main);
    highlightNav(path);
    closeMobileMenu();
    closeProductsMenu();
    window.scrollTo(0, 0);
  }

  // ------------------------
  // INIT
  // ------------------------

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    setupThemeToggle();
    setupMenus();
    setupScrollHeader();
    renderRoute();
  });

  window.addEventListener('hashchange', function () {
    renderRoute();
  });
})();



/* UNOBITS AUTH START */
(function(){
  'use strict';
  // Do not leak globals, expose minimal API under window.auth
  const APP_ORIGIN = 'https://unobits.app';
  const API_BASE   = `${APP_ORIGIN}/api`;

  // --- tiny helpers (scoped) ---
  const $  = (sel, d=document)=> d.querySelector(sel);
  const $$ = (sel, d=document)=> Array.from(d.querySelectorAll(sel));
  const on = (el, ev, fn)=> el && el.addEventListener(ev, fn);
  const slugifyOrg = (s='')=> (s||'').toString()
      .trim().toLowerCase()
      .replace(/[^a-z0-9]+/g,'-')
      .replace(/^-+|-+$/g,'');

  function getOrgFromPath(){
    try {
      const parts = location.pathname.split('/').filter(Boolean);
      const i = parts.findIndex(p => p === 'o' || p === 'organization');
      if (i >= 0 && parts[i+1]) return parts[i+1].toLowerCase();
    } catch(_) {}
    return null;
  }

  async function apiPost(url, payload){
    const isAbs = /^https?:\/\//i.test(url);
    const full  = isAbs ? url : (url.startsWith('/api') ? `${APP_ORIGIN}${url}` : `${API_BASE}${url}`);
    const res = await fetch(full, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'include', // cookie-based auth
      body: JSON.stringify(payload||{})
    });
    const raw = await res.text();
    let json = null;
    try { json = JSON.parse(raw); } catch {}
    if (!res.ok){
      const msg = (json && (json.error||json.detail)) || raw || (`HTTP ${res.status}`);
      throw new Error(msg);
    }
    return json || {};
  }

  // minimal toast (non-invasive)
  function toast(msg, variant='error'){
    let el = $('#unbToast');
    if (!el){
      el = document.createElement('div');
      el.id = 'unbToast';
      el.setAttribute('aria-live','polite');
      el.className = 'fixed left-1/2 -translate-x-1/2 top-4 z-[999999]';
      document.body.appendChild(el);
    }
    const item = document.createElement('div');
    item.className = 'mb-2 rounded-lg border px-3 py-2 text-xs shadow-xl bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100';
    item.textContent = msg;
    el.appendChild(item);
    setTimeout(()=>{ item.style.opacity='0'; item.style.transform='translateY(-4px)'; item.style.transition='all .3s ease'; }, 3200);
    setTimeout(()=>{ item.remove(); }, 3600);
  }

  function setBusy(btn, busy){
    if (!btn) return;
    if (busy){
      btn.disabled = true;
      if (!btn.querySelector('.unb-spinner')){
        const svg = '<svg class="unb-spinner w-4 h-4 mr-2 inline-block animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>';
        const span = btn.querySelector('.unb-btn-text');
        if (span) span.insertAdjacentHTML('afterbegin', svg);
        else btn.insertAdjacentHTML('afterbegin', svg);
      }
    } else {
      btn.disabled = false;
      const s = btn.querySelector('.unb-spinner');
      if (s) s.remove();
    }
  }

  function openLogin(){ const d = $('#loginModal'); d && d.showModal(); }
  function openSignup(){ const d = $('#signupModal'); d && d.showModal(); }

  async function doLogin(){
    const email    = $('#loginEmail')?.value.trim();
    const password = $('#loginPwd')?.value;
    let org_slug   = getOrgFromPath();
    if (!org_slug){
      const raw = $('#loginOrg')?.value.trim();
      if (!raw){ toast('Please enter your Organization or leave it blank.'); org_slug = undefined; }
      else org_slug = slugifyOrg(raw);
    }
    if (!email || !password) return toast('Please enter your email and password.');
    const btn = $('#loginSubmit');
    try {
      setBusy(btn, true);
      await apiPost('/api/login', { email, password, org_slug });
      location.href = APP_ORIGIN + '/';
    } catch (err) {
      toast('Login failed: ' + err.message);
    } finally {
      setBusy(btn, false);
    }
  }

  async function doSignup(){
    const name     = $('#suName')?.value.trim();
    const email    = $('#suEmail')?.value.trim();
    const company  = $('#suCompany')?.value.trim();
    const pass1    = $('#suPwd')?.value;
    const pass2    = $('#suPwd2')?.value;
    const tosOk    = $('#suTos')?.checked;

    if (!name || !email) return toast('Please fill your name and email.');
    if ((pass1||'').length < 8) return toast('Password must be at least 8 characters.');
    if (pass1 !== pass2) return toast('Passwords do not match.');
    if (!tosOk) return toast('Please accept Terms & Privacy.');

    const btn = $('#signupSubmit');
    try {
      setBusy(btn, true);
      await apiPost('/api/signup', { name, email, company, password: pass1 });
      toast('Account created! Check your inbox to verify.');
      $('#signupModal')?.close();
      openLogin();
      $('#loginEmail') && ($('#loginEmail').value = email);
    } catch (err) {
      toast('Signup failed: ' + err.message);
    } finally {
      setBusy(btn, false);
    }
  }

  function bindAuth(){
    const loginModal  = $('#loginModal');
    const signupModal = $('#signupModal');

    // open triggers if present
    ['openLogin','openSignup','openLoginM','openSignupM','ctaSignup','ctaSignup2','footerSignup']
      .forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        on(el, 'click', (e)=>{
          e.preventDefault();
          (id.toLowerCase().includes('login') ? openLogin() : openSignup());
        });
      });

    // swap links
    on($('#swapToSignup'), 'click', (e)=>{ e.preventDefault(); loginModal?.close(); openSignup(); });
    on($('#swapToLogin'),  'click', (e)=>{ e.preventDefault(); signupModal?.close(); openLogin();  });

    // form bindings
    on($('#loginForm'),  'submit', (e)=>{ e.preventDefault(); doLogin(); });
    on($('#loginSubmit'),'click',  (e)=>{ e.preventDefault(); doLogin(); });
    on($('#signupForm'), 'submit', (e)=>{ e.preventDefault(); doSignup(); });
    on($('#signupSubmit'),'click', (e)=>{ e.preventDefault(); doSignup(); });

    // close on ESC
    on(document, 'keydown', (e)=>{
      if (e.key === 'Escape'){
        if (loginModal?.open) loginModal.close();
        if (signupModal?.open) signupModal.close();
      }
    });

    // click on backdrop closes
    [loginModal, signupModal].forEach(d => {
      if (!d) return;
      on(d, 'click', (e)=>{
        const rect = d.querySelector('form')?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX, y = e.clientY;
        if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom){
          d.close();
        }
      });
    });

    // open via routes/links
    function maybeOpenFromURL(){
      const h = (location.hash||'').toLowerCase();
      const q = new URLSearchParams(location.search);
      if (h === '#login'  || q.get('login')  === '1') openLogin();
      if (h === '#signup' || q.get('signup') === '1') openSignup();
    }
    maybeOpenFromURL();
    on(window, 'hashchange', maybeOpenFromURL);

    // expose minimal API
    window.auth = Object.freeze({ openLogin, openSignup });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindAuth);
  } else {
    bindAuth();
  }
})();
/* UNOBITS AUTH END */
