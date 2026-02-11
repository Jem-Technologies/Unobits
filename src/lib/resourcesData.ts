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

/**
 * NOTE
 * ----
 * These posts are intentionally written in a conversational, actionable style.
 * They render as plain paragraphs (no markdown), so keep lists as short paragraphs.
 */
export const RESOURCE_POSTS: ResourcePost[] = [
  // -------------------------
  // PRODUCTIVITY
  // -------------------------
  {
    slug: 'one-tab-operating-system',
    title: 'The One‑Tab Operating System: why tool sprawl quietly kills execution',
    excerpt:
      'If your “work” is mostly switching tabs, you don’t have a productivity problem — you have a system problem. Here’s how to get your time (and your focus) back.',
    date: '2026-02-05',
    readTime: '11 min read',
    category: 'Productivity',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'If you feel busy… but nothing is “done”',
        body: [
          'Let’s be honest: most teams don’t lose time because they’re lazy. They lose time because work is scattered. A message is in one place, the task is in another, the file is somewhere else, and the “latest update” is sitting inside a random thread.',
          'When your day is basically “open tab → copy info → paste → explain again → repeat”, you’re paying a hidden tax: context switching. It’s the kind of cost that doesn’t show up on a spreadsheet, but you feel it at 3:17pm when your brain refuses to keep going.',
          'If that’s you, you don’t need a new trick. You need a better system.',
        ],
      },
      {
        heading: 'Tool sprawl starts as convenience, then becomes friction',
        body: [
          'Tool sprawl usually begins with good intentions: “We’ll just use this one app for chat.” Then another for tasks. Then one for docs. Then something for CRM. Then a portal tool. Then a reporting dashboard. And suddenly your workday is a scavenger hunt.',
          'The real problem isn’t that you have many tools. The problem is that they don’t share a single model of reality. Your client exists in your CRM, but not in your inbox. Your task exists in your project tool, but not in the conversation where the decision was made.',
          'That disconnect forces humans to do the syncing. Humans are expensive. And humans forget.',
        ],
      },
      {
        heading: 'A One‑Tab OS is not “one giant app”',
        body: [
          'A business OS approach is different from “all‑in‑one” software that tries to cram everything into one screen. The goal isn’t to make you live inside a complicated UI. The goal is to keep context attached to work objects so you stop re‑explaining everything.',
          'Think of it like this: in a connected OS, a client is a first‑class object. Conversations, tasks, files, approvals, invoices, and reports can all attach to that client. You don’t “integrate” reality — you model it.',
          'When the model is connected, the UI becomes calmer because your team isn’t hunting for truth. They’re working from it.',
        ],
      },
      {
        heading: 'A practical way to consolidate without breaking your week',
        body: [
          'Most teams avoid consolidation because they picture a painful migration. So here’s a safer approach: consolidate around workflows, not features.',
          'Step 1: pick one workflow that currently leaks time (for example: “inbox → assignment → task → follow‑up”). Write down where each step lives today.',
          'Step 2: choose the “source of truth” for that workflow. If it starts in communication, your shared inbox (or communication hub) should lead the workflow.',
          'Step 3: attach context as you move. Every time you create a task, link it back to the conversation. Every time you upload a file, attach it to the client or project that needs it.',
          'Step 4: remove manual syncing. If your team is copying status into a spreadsheet every Friday, that’s a sign the system is broken. Replace the manual sync with a connected view or an automation.',
        ],
      },
      {
        heading: 'The “one place” rule that changes how your team thinks',
        body: [
          'Here’s a simple rule that sounds obvious, but fixes a lot: each work item should have one primary home.',
          'A client request shouldn’t live in six places. It should have one page (or one thread) where anyone can see: what was asked, who owns it, what’s next, and the current status.',
          'Once your team trusts that “the home” is accurate, you’ll notice something surprising: people stop asking for updates. They start shipping.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'If your team is switching tabs to keep work moving, you’re doing system work — not business work.',
          'The cure isn’t “more integrations.” The cure is a connected model where conversations, tasks, and files are naturally related.',
          'Start small: consolidate one workflow, attach context, and remove one manual sync. Do that a few times and you’ll feel the calm come back.',
        ],
      },
    ],
  },
  {
    slug: 'context-switching-tax',
    title: 'The context‑switching tax: how to stop losing hours without “working harder”',
    excerpt:
      'You don’t need more discipline. You need fewer resets. Here’s a human-friendly way to design your day (and your tools) so focus lasts longer.',
    date: '2026-01-22',
    readTime: '10 min read',
    category: 'Productivity',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Why your brain feels “full” by lunchtime',
        body: [
          'If you’re juggling sales calls, client delivery, team questions, and admin work, your brain is doing the equivalent of closing and reopening a dozen browser tabs — internally.',
          'Every switch has a cost: you lose the thread, you re‑read the last message, you re‑build the mental model, and only then you continue. That rebuild is the tax.',
          'The frustrating part is that it looks like you’re working. But the output doesn’t match the effort.',
        ],
      },
      {
        heading: 'A simple test: count your daily “resets”',
        body: [
          'A reset is any moment you have to ask: “Wait… where was I?”',
          'Resets happen when context is missing: the task doesn’t include the conversation, the file isn’t linked, or the decision is in someone’s DMs.',
          'For one day, keep a tiny tally. Don’t judge it. Just notice it. Most teams are shocked by the number.',
        ],
      },
      {
        heading: 'Design work so context travels with it',
        body: [
          'The most productive teams aren’t “faster.” They’re less interrupted and less forced to reconstruct context.',
          'So instead of telling people to “focus more,” change the environment: link messages to tasks, link tasks to projects, link files to both, and keep decisions visible.',
          'When you do that, you create a gentle kind of momentum. People can pick up work where they left it, even if they were pulled away for an hour.',
        ],
      },
      {
        heading: 'The 3‑window rule (and why it works)',
        body: [
          'Try this for a week: when you’re doing deep work, you only get three “windows” of context open.',
          'Window 1 is the work itself (task/project). Window 2 is the conversation or brief that explains what “good” looks like. Window 3 is the asset you’re editing (doc/file/design).',
          'If you need a fourth window, it usually means the system is missing links. Fix the system, not your attention span.',
        ],
      },
      {
        heading: 'Small changes that create a big focus upgrade',
        body: [
          'Add a “Definition of Done” to tasks. One sentence is enough. It stops back‑and‑forth and prevents rework.',
          'Turn recurring questions into a short doc, then link that doc inside the workflow. “Answer once, reuse forever” is a superpower.',
          'Set up a default “handoff template” for clients: request → scope → owner → due date → assets. When that template is consistent, your team’s brain doesn’t have to re‑learn the format every time.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'The fastest way to feel more productive is to reduce resets, not increase effort.',
          'Make context travel: link conversations, tasks, projects, and files so the system carries memory for you.',
          'If you keep opening “one more tab” to find what you need, that’s a signal to improve structure — not a personal failure.',
        ],
      },
    ],
  },
  {
    slug: 'weekly-review-without-meetings',
    title: 'The 30‑minute weekly review that keeps your team aligned (without adding meetings)',
    excerpt:
      'Alignment doesn’t require more calls. It requires shared visibility. Here’s a simple weekly rhythm that replaces status meetings with clarity.',
    date: '2025-12-18',
    readTime: '9 min read',
    category: 'Productivity',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Status meetings exist because status is invisible',
        body: [
          'Most “weekly syncs” are actually status reconstruction sessions. Everyone spends 10 minutes remembering what happened, then another 20 minutes figuring out what’s next.',
          'If you build a system where status is already visible, the meeting becomes optional. And when you do meet, it’s about decisions — not updates.',
        ],
      },
      {
        heading: 'The weekly review in 3 blocks',
        body: [
          'Block 1 (10 minutes): review what shipped. Not what you “worked on” — what actually moved to done. This creates healthy pressure and honest momentum.',
          'Block 2 (10 minutes): review what’s stuck. Every stuck item needs one of three things: a decision, a dependency removed, or a clearer definition of done.',
          'Block 3 (10 minutes): set the next week’s top 3 outcomes. Outcomes are not tasks. They are results. “Launch onboarding flow” beats “work on onboarding.”',
        ],
      },
      {
        heading: 'Make it visible so it stays lightweight',
        body: [
          'Put the weekly review in one place: a dashboard or a single doc that links to the work items underneath it.',
          'If someone asks “where is that,” the system should answer. Your team shouldn’t have to chase the person with the best memory.',
          'The moment the review becomes a copy/paste exercise, it stops working. Keep it connected.',
        ],
      },
      {
        heading: 'A tiny template you can reuse',
        body: [
          'Shipped: (link to 3–10 completed items).',
          'Stuck: (link to items + one sentence on what’s blocking them).',
          'Next outcomes: (3 outcomes + owners).',
          'Risks: (anything that could break the plan; keep it short).',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Meetings are a symptom. Visibility is the cure.',
          'A weekly review works when it is connected to real work items — not a separate report you have to maintain.',
          'Keep it small, consistent, and outcome-focused. Your team will feel the calm within two weeks.',
        ],
      },
    ],
  },

  // -------------------------
  // COMMUNICATION
  // -------------------------
  {
    slug: 'unified-inbox-to-workflow',
    title: 'From inbox to workflow: turning communication into execution',
    excerpt:
      'Email and chat are where work starts — but most teams treat messages like loose ends. Here’s how to route, assign, and track conversations so they become real progress.',
    date: '2026-01-30',
    readTime: '10 min read',
    category: 'Communication',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Your inbox is not a project manager (even if it feels like one)',
        body: [
          'If your team lives in inboxes, you’re managing work with “read/unread” as your workflow. It’s understandable — messages arrive all day, and you respond all day.',
          'But “responding” isn’t the same as “finishing.” A message can be answered and still create work that needs follow‑through.',
          'The fix is not “check email less.” The fix is to treat messages as the beginning of a workflow, not the end of it.',
        ],
      },
      {
        heading: 'The moment a message becomes work',
        body: [
          'A message becomes work when it requires one of these: a decision, a deliverable, a follow‑up, or coordination across people.',
          'When that happens, you need ownership. You need a due date (even if it’s soft). And you need the message linked to the next action.',
          'If you don’t assign it, the message just becomes “background anxiety.” Everyone sees it, nobody owns it, and it quietly ages.',
        ],
      },
      {
        heading: 'A simple routing system that scales',
        body: [
          'Start with three buckets: “Action needed”, “Waiting”, and “FYI”. You can get fancier later.',
          'Then add rules: client emails go to the client owner; billing questions go to finance; support issues get an SLA label.',
          'Routing doesn’t need to be perfect. It just needs to be consistent enough that people stop stepping on each other.',
        ],
      },
      {
        heading: 'Turn conversations into tasks without losing context',
        body: [
          'Here’s the important part: if you create a task, link the original conversation. Don’t copy/paste. Don’t “summarize from memory.” Link it.',
          'When the task and the conversation are connected, your team can work asynchronously without constant clarification.',
          'It also makes onboarding easier. New teammates can read the decision trail instead of asking the same questions again.',
        ],
      },
      {
        heading: 'One habit that instantly reduces inbox stress',
        body: [
          'At the end of the day, your inbox should contain only two kinds of messages: things you truly haven’t processed yet, and things that are waiting on someone else.',
          'If a message is actionable and owned, it should be in the workflow. If it’s not owned, it should be assigned or clarified.',
          'That one habit turns your inbox from “infinite obligations” into a manageable intake channel.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Messages are the start of work, not the container for work.',
          'Add ownership + routing + linkage to tasks and you’ll immediately reduce dropped balls.',
          'The goal is calm execution: fewer “did you see this?” pings and more visible progress.',
        ],
      },
    ],
  },
  {
    slug: 'shared-inbox-slas',
    title: 'Shared inbox SLAs: respond faster without burning out your team',
    excerpt:
      'Speed matters, but so does sanity. Here’s how to set response expectations, assign ownership, and keep quality high — without living in your inbox.',
    date: '2025-12-10',
    readTime: '9 min read',
    category: 'Communication',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The real goal of an SLA is trust',
        body: [
          'When clients email you, they’re not always asking for a full solution. Often they just want to know: “Did you see this?” and “Are you on it?”',
          'That’s what an SLA protects. It sets expectations so people don’t panic, and it protects your team from constant reactive mode.',
        ],
      },
      {
        heading: 'Start with two timeframes, not ten',
        body: [
          'Most teams overcomplicate SLAs. Keep it simple: “First response” and “Resolution target.”',
          'First response can be short: acknowledge, confirm ownership, ask one clarifying question, or give a timeline.',
          'Resolution target is flexible, but it’s important to track. It helps you spot recurring issues and workload bottlenecks.',
        ],
      },
      {
        heading: 'Ownership is the difference between “shared” and “shuffled”',
        body: [
          'A shared inbox without ownership becomes a game of hot potato. Everyone assumes someone else will handle it.',
          'Make one rule: every message that matters gets an owner. Not a department. Not “the team.” A person.',
          'If you want less burnout, rotate owners or create shifts. But don’t skip the ownership step.',
        ],
      },
      {
        heading: 'Use labels that reduce thinking',
        body: [
          'Labels should help people decide what to do next. Try: “Urgent”, “Needs info”, “Waiting on client”, “Scheduled”, and “Done”.',
          'If you have 40 labels, you’ve built a taxonomy, not a workflow. Fewer labels mean faster decisions.',
        ],
      },
      {
        heading: 'Quality stays high when templates stay human',
        body: [
          'Templates are great until they sound like robots. Use templates as a starting point, then add one human sentence.',
          'Example: “Got it — I’m looking into this now. Quick question: is this happening for all users or just one account?”',
          'That one sentence makes the response feel personal, even when you’re moving quickly.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'An SLA is a promise of clarity, not a promise of instant resolution.',
          'Keep it simple: first response + resolution target, with clear ownership.',
          'Protect your team with rotation and workflow labels that reduce thinking.',
        ],
      },
    ],
  },
  {
    slug: 'communication-hygiene-playbook',
    title: 'Communication hygiene: fewer pings, more progress',
    excerpt:
      'If everything is urgent, nothing is. This playbook helps your team reduce noise, keep decisions visible, and work calmly across chat, email, and meetings.',
    date: '2025-11-20',
    readTime: '8 min read',
    category: 'Communication',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Noise isn’t a culture problem — it’s a system problem',
        body: [
          'When teams are overloaded, they ping more. They ask for updates more. They schedule more calls. It’s not because they want to annoy each other. It’s because they can’t see what’s happening.',
          'The goal of communication hygiene is to make “what’s happening” visible so people can stop interrupting to find out.',
        ],
      },
      {
        heading: 'Create one place where decisions live',
        body: [
          'Decisions die in chat. Not because chat is bad, but because chat is fast.',
          'Pick one place where decisions are recorded: a task comment, a project update, or a lightweight decision log. Then link it in the thread.',
          'This is how you stop re‑deciding the same thing every two weeks.',
        ],
      },
      {
        heading: 'Use “async first response” to reduce meetings',
        body: [
          'Before you schedule a call, send an async first response: one paragraph that states your understanding, your recommendation, and what you need to decide.',
          'Half the time, that paragraph is enough. The other half, it turns the meeting into a quick decision instead of a vague discussion.',
        ],
      },
      {
        heading: 'Turn status questions into dashboards',
        body: [
          'If you hear the same status question three times, it belongs on a dashboard.',
          '“What’s the ETA?” “Who owns this?” “What’s blocked?” Those should be visible without asking.',
          'This is where connected work objects matter: a task should show owner, due date, and current status by default.',
        ],
      },
      {
        heading: 'A simple rule for urgent messages',
        body: [
          'Urgent should mean: “If we don’t act today, we lose money, trust, or safety.”',
          'If it doesn’t meet that bar, it gets a normal workflow. This protects attention and keeps “urgent” meaningful.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Less noise comes from more visibility.',
          'Record decisions where work lives, then link back to the conversation.',
          'Dashboards replace status questions. Async first responses replace many meetings.',
        ],
      },
    ],
  },

  // -------------------------
  // CLIENTS & BUSINESS
  // -------------------------
  {
    slug: 'agency-delivery-with-portals',
    title: 'Agency delivery without chaos: portals, approvals, and clear status',
    excerpt:
      'Clients want visibility and fast answers. Here’s a portal-driven workflow that cuts status meetings, prevents endless email threads, and makes your agency feel premium.',
    date: '2026-01-12',
    readTime: '12 min read',
    category: 'Clients & Business',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Clients ask for updates when they feel uncertain',
        body: [
          'Most clients aren’t trying to micromanage you. They’re trying to reduce risk. When they can’t see progress, their brain fills the gap with worst‑case stories.',
          'That’s why you get “Just checking in…” messages. Not because your work is bad, but because the system is invisible.',
          'A client portal is the simplest way to turn uncertainty into clarity.',
        ],
      },
      {
        heading: 'The real problem: status is scattered',
        body: [
          'In many agencies, status lives in too many places: a PM tool internally, emails with the client, Slack messages, a spreadsheet, and maybe a weekly report.',
          'That scattered status creates two painful behaviors: clients ask for updates, and your team spends time reconstructing the truth instead of delivering.',
          'A portal fixes this by creating one source of truth for deliverables, files, and approvals.',
        ],
      },
      {
        heading: 'Approvals should be a workflow, not a thread',
        body: [
          'Approval threads break for predictable reasons: someone misses the email, feedback is unclear, or “yes” arrives without the latest asset attached.',
          'In a portal workflow, approvals are owned, tracked, and timestamped. The asset being approved is always the asset being reviewed. No guessing.',
          'This single change reduces revisions, protects margins, and prevents the dreaded “I thought we approved it” moment.',
        ],
      },
      {
        heading: 'A portal structure clients actually understand',
        body: [
          'Keep it simple: Overview, Deliverables, Files, Messages, Approvals.',
          'Overview answers: what’s in progress, what’s blocked, what’s next. Deliverables shows the work items. Files holds assets. Messages keeps conversation in one place. Approvals shows what needs a decision.',
          'If clients can understand it in 15 seconds, they’ll use it.',
        ],
      },
      {
        heading: 'Make “next step” impossible to miss',
        body: [
          'Every deliverable should show one clear next step. Not a paragraph. One step.',
          'Example: “Client to approve copy by Friday” or “Agency to deliver first draft on Wednesday.”',
          'When next steps are visible, friction drops. Clients feel guided instead of confused.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Visibility is the real deliverable that makes clients feel calm.',
          'Portals reduce status meetings because they answer questions before they’re asked.',
          'Approvals as a workflow protects your time, your margins, and your relationship.',
        ],
      },
    ],
  },
  {
    slug: 'premium-client-onboarding',
    title: 'Client onboarding that feels premium (and doesn’t require 40 emails)',
    excerpt:
      'The first 7 days set the tone for the entire relationship. Here’s a clean, repeatable onboarding flow that makes clients feel taken care of — without creating more work for you.',
    date: '2025-11-28',
    readTime: '11 min read',
    category: 'Clients & Business',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Onboarding is where most agencies leak trust',
        body: [
          'You can do incredible work and still lose momentum in onboarding. Why? Because onboarding is operational, not creative — and operational friction feels like disorganization.',
          'Clients interpret messy onboarding as a preview of messy delivery. That’s unfair, but it’s real.',
          'The good news: onboarding becomes easy when it’s structured and repeatable.',
        ],
      },
      {
        heading: 'The 5 things clients need immediately',
        body: [
          'They need a clear owner (“who do I go to?”).',
          'They need a timeline (“what happens next?”).',
          'They need a place to upload assets (“where do I put things?”).',
          'They need a way to approve work (“how do we sign off?”).',
          'They need clarity on communication (“where do we talk?”).',
        ],
      },
      {
        heading: 'A simple onboarding flow you can copy',
        body: [
          'Step 1: Kickoff message with a single link to the portal or workspace. One link beats ten attachments.',
          'Step 2: Intake form (brand assets, logins, goals, target audience). Make it scannable and optional where possible.',
          'Step 3: “First week plan” visible in the portal: what you’ll deliver and what you need from them.',
          'Step 4: First micro‑win delivered in 7 days (even if it’s small). Momentum beats perfection.',
        ],
      },
      {
        heading: 'Keep communication centralized (or you’ll suffer later)',
        body: [
          'If onboarding happens across email, WhatsApp, Slack, and calls, you’ll spend the rest of the project chasing context.',
          'Pick one channel for official communication and keep it connected to the work. You can still be friendly elsewhere, but decisions should live in one place.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Premium onboarding feels simple to the client, not complex.',
          'One link to one place beats endless back-and-forth.',
          'Deliver a fast micro‑win to create confidence and momentum.',
        ],
      },
    ],
  },
  {
    slug: 'proposal-to-payment-handoff',
    title: 'From proposal to payment: build a sales‑to‑delivery handoff that doesn’t leak',
    excerpt:
      'Deals don’t fail only in sales — they fail in handoff. This guide shows you how to carry context from “yes” to delivery without dropping expectations.',
    date: '2025-10-30',
    readTime: '10 min read',
    category: 'Clients & Business',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Handoffs break when context stays in someone’s head',
        body: [
          'Sales closes a deal, delivery starts the work, and the client assumes everyone knows what was promised. That assumption is where pain begins.',
          'If the scope, timeline, and expectations are scattered across call notes, email threads, and memory, delivery will guess — and guessing creates rework.',
        ],
      },
      {
        heading: 'The 6 things delivery needs from sales',
        body: [
          'Goals: what the client actually wants (not just what they said they want).',
          'Constraints: deadlines, approvals, tools, budget limits.',
          'Stakeholders: who decides, who influences, who blocks.',
          'Scope boundaries: what is explicitly not included.',
          'Risks: what could derail the plan.',
          'Proof: call notes, key emails, and the proposal — linked, not pasted.',
        ],
      },
      {
        heading: 'Build a handoff doc that becomes a project',
        body: [
          'The best handoff document is not a PDF. It’s a living object that becomes the delivery project.',
          'Start with a short summary, then convert sections into tasks: onboarding, assets, milestones, approvals.',
          'When the handoff becomes the project, nothing gets lost in translation.',
        ],
      },
      {
        heading: 'Make payment feel like part of delivery',
        body: [
          'Clients hate surprise invoices. Make billing milestones visible from day one.',
          'If you invoice on delivery milestones, show those milestones in the same place as the work. This reduces awkward follow‑ups and speeds up cash flow.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Great delivery starts with clear context.',
          'Link proof (calls, emails, proposal) to the project so delivery never has to guess.',
          'When billing is visible alongside work, payment becomes smoother and more predictable.',
        ],
      },
    ],
  },

  // -------------------------
  // AUTOMATIONS
  // -------------------------
  {
    slug: 'automation-basics',
    title: 'Automation basics: 10 workflows every team should automate first',
    excerpt:
      'Automations are how you scale quality. These are the first workflows that remove repetitive work, reduce mistakes, and keep your team focused on real outcomes.',
    date: '2025-12-28',
    readTime: '12 min read',
    category: 'Automations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Automation is not about speed — it’s about consistency',
        body: [
          'Most teams think automation is about doing things faster. Sometimes it is. But the bigger win is doing things the same way every time.',
          'Consistency reduces mistakes, reduces training time, and makes your business feel reliable to clients.',
        ],
      },
      {
        heading: 'Start with routing and reminders',
        body: [
          'Auto-assign inbound requests by client or category.',
          'Auto-create tasks from form submissions (onboarding, support, requests).',
          'Auto-remind owners when a task is nearing its due date.',
          'Auto-follow up after meetings: notes → action items → owners.',
        ],
      },
      {
        heading: 'Then automate the lifecycle',
        body: [
          'When a deal closes, automatically create onboarding tasks and invite stakeholders.',
          'When onboarding is complete, automatically kick off delivery templates.',
          'When a deliverable is ready, automatically request approval and notify the client.',
          'When approval is granted, automatically move the project to the next stage.',
        ],
      },
      {
        heading: 'Finally, automate visibility',
        body: [
          'Send a weekly summary to clients (or internal stakeholders) with what shipped and what’s next.',
          'Update dashboards automatically from real work objects so reports aren’t manual.',
          'Trigger a “risk alert” when a project is blocked for more than X days.',
        ],
      },
      {
        heading: 'One guardrail that prevents automation chaos',
        body: [
          'Always make it easy to answer: “Why did this happen?”',
          'If an automation triggers, it should leave a clear trace: a comment, a label, a timestamp, or a log entry.',
          'That trace prevents blame and makes improvements obvious.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Automate the repetitive, not the important decisions.',
          'Start with routing, then lifecycle, then visibility.',
          'Always leave a trace so your team trusts the system.',
        ],
      },
    ],
  },
  {
    slug: 'automation-guardrails',
    title: 'Automation without chaos: guardrails, logs, and human overrides',
    excerpt:
      'Automations can save you hours… or create invisible messes. Here’s how to build workflows that stay reliable as your team and complexity grow.',
    date: '2025-11-05',
    readTime: '10 min read',
    category: 'Automations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The dark side of “set it and forget it”',
        body: [
          'Automations fail in boring ways: a field changes, a rule becomes outdated, someone adds a new workflow stage and forgets to update triggers.',
          'Then you get silent errors: wrong assignments, missed follow‑ups, duplicated tasks. People stop trusting the system and go back to manual work.',
        ],
      },
      {
        heading: 'Three guardrails that make automations safe',
        body: [
          'Guardrail 1: clear triggers. If a rule is vague, it will behave vaguely.',
          'Guardrail 2: visible logs. Every automation should leave a breadcrumb trail so you can audit what happened.',
          'Guardrail 3: human overrides. People should be able to pause, rerun, or reassign when reality changes.',
        ],
      },
      {
        heading: 'How to keep automation logic understandable',
        body: [
          'Name automations like sentences: “When a client approves, move deliverable to Ready to Publish.”',
          'Avoid stacking 12 rules that interact in unpredictable ways. Prefer fewer, clearer rules with explicit conditions.',
          'If an automation needs a paragraph to explain, it’s a sign you should simplify the workflow first.',
        ],
      },
      {
        heading: 'A simple maintenance routine',
        body: [
          'Once a month, review your top 10 automations. Ask: are they still relevant? are they still accurate? are they creating unintended side effects?',
          'If you have logs, you can spot issues quickly. If you don’t have logs, you’ll only notice when something breaks publicly.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Reliable automation needs guardrails: clear triggers, visible logs, and human overrides.',
          'Keep logic readable so the system remains maintainable when your team changes.',
          'A tiny monthly review prevents months of hidden mess.',
        ],
      },
    ],
  },
  {
    slug: 'no-code-ops-sops-to-workflows',
    title: 'No‑code operations: turning SOPs into workflows your team actually follows',
    excerpt:
      'Docs don’t run your business — workflows do. Here’s how to convert “process docs” into real execution with owners, triggers, and visibility.',
    date: '2025-10-14',
    readTime: '11 min read',
    category: 'Automations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'If your SOP lives in a doc, it’s already half-broken',
        body: [
          'SOPs are useful — until real life arrives. A new teammate forgets a step. A client asks for something unusual. The doc is outdated. Suddenly “the process” exists only in the head of your most experienced person.',
          'The goal isn’t to write more docs. The goal is to embed the process into the workflow so the system helps people do the right thing.',
        ],
      },
      {
        heading: 'Start by extracting the triggers and outcomes',
        body: [
          'Every SOP has a trigger (what starts it) and an outcome (what “done” looks like). Write those in one sentence each.',
          'Example trigger: “Client signs the contract.” Outcome: “Client is onboarded with assets, access, and first-week plan.”',
        ],
      },
      {
        heading: 'Convert steps into owned tasks',
        body: [
          'Each step should have an owner and a due date (even if it’s relative, like “within 48 hours”).',
          'If a step has no owner, it’s a suggestion — not a process.',
          'Once steps are tasks, you can automate reminders and handoffs. That’s where SOPs become real.',
        ],
      },
      {
        heading: 'Keep the “why” in the doc, put the “how” in the workflow',
        body: [
          'Docs are great for explaining why the process matters and what good looks like.',
          'Workflows are great for executing the steps consistently.',
          'Link the doc to the workflow so people can learn without hunting.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'A doc can describe a process, but it can’t enforce one.',
          'Turn SOPs into workflows by extracting triggers, outcomes, and owned tasks.',
          'Link the “why” to the “how” so your system teaches people as they work.',
        ],
      },
    ],
  },

  // -------------------------
  // DIGITAL TWIN
  // -------------------------
  {
    slug: 'digital-twin-explained',
    title: 'Digital Twin for teams: what it means and why it matters',
    excerpt:
      'A Digital Twin isn’t just for factories. For modern teams, it means your business data is structured and connected — making reporting, automation, and handoffs dramatically easier.',
    date: '2025-12-05',
    readTime: '10 min read',
    category: 'Digital Twin',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The problem: your business has “data”, but no model',
        body: [
          'Most teams have data everywhere: a CRM, spreadsheets, inboxes, project tools, and file storage.',
          'But “data everywhere” is not the same as “data connected.” When tools don’t share a model, you end up rebuilding relationships by hand in reports and meetings.',
        ],
      },
      {
        heading: 'What a Digital Twin actually means for a team',
        body: [
          'A Digital Twin is a connected representation of your business: clients, projects, assets, conversations, tasks, and outcomes — linked together in a consistent structure.',
          'When those objects are connected, you can ask better questions and get real answers: “Which clients are blocked?” “Which projects are at risk?” “What activities correlate with retention?”',
        ],
      },
      {
        heading: 'Why this changes reporting',
        body: [
          'Reporting stops being a manual spreadsheet exercise because relationships are already present in the system.',
          'Instead of exporting data and matching it up by hand, you can build dashboards that pull from connected objects: client → projects → time → delivery outcomes.',
        ],
      },
      {
        heading: 'Why this changes automation',
        body: [
          'Automations become more reliable when they can reference real objects and consistent fields.',
          'You can trigger workflows based on meaningful events (deal stage, onboarding status, approval state) rather than brittle hacks.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'A Digital Twin is connected structure, not just stored data.',
          'Connected objects make reporting and automation simpler, more accurate, and less fragile.',
          'If you want fewer spreadsheets and fewer “where’s the latest?” questions, start by connecting the model.',
        ],
      },
    ],
  },
  {
    slug: 'model-your-business-like-lego',
    title: 'Model your business like LEGO: entities, relationships, and a simple way to start',
    excerpt:
      'If your systems feel messy, it’s usually because your data model is messy. Here’s a non-technical way to think about entities and relationships so your tools work together naturally.',
    date: '2025-11-25',
    readTime: '11 min read',
    category: 'Digital Twin',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1581091870627-3b5f19ad9c58?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'You don’t need to be technical to model your business',
        body: [
          '“Data model” sounds like a developer term. But you already think in models. You know who your clients are. You know what a project is. You know what counts as a deliverable.',
          'The difference is whether your tools treat those things as connected objects or scattered notes.',
        ],
      },
      {
        heading: 'Start with 5 entities',
        body: [
          'Most service and SaaS businesses can start with: Clients, Projects, Tasks, Assets (files/docs), and Conversations.',
          'If you can connect these five consistently, everything else becomes easier: onboarding, approvals, reporting, support.',
        ],
      },
      {
        heading: 'Relationships are where the magic happens',
        body: [
          'A task belongs to a project. A project belongs to a client. A conversation relates to both. An asset attaches to the deliverable it supports.',
          'When relationships are explicit, you stop losing things. You stop duplicating things. And you stop “reconstructing reality” in meetings.',
        ],
      },
      {
        heading: 'A quick exercise you can do today',
        body: [
          'Pick a current client. List their active projects. For each project, list the top 5 tasks. For each task, link the supporting conversation and files.',
          'If you can’t do that easily in your current tools, that’s your signal: the system isn’t modeling your business well.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Modeling is not about complexity. It’s about clarity.',
          'Start with a small set of entities, then connect them consistently.',
          'When relationships are explicit, your team spends less time searching and more time shipping.',
        ],
      },
    ],
  },
  {
    slug: 'reporting-that-doesnt-lie',
    title: 'Reporting that doesn’t lie: how connected data fixes your dashboards',
    excerpt:
      'If your dashboards feel “off,” it’s often because your data is disconnected. Here’s how to build reports you can trust — and stop debating numbers in meetings.',
    date: '2025-10-22',
    readTime: '10 min read',
    category: 'Digital Twin',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'If you argue about numbers, you have a data connection problem',
        body: [
          'Teams often blame reporting tools when dashboards are wrong. But the root issue is usually upstream: data lives in silos and the relationships are guessed during reporting.',
          'That guesswork creates mismatched totals, missing fields, and “it depends” metrics.',
        ],
      },
      {
        heading: 'The two reports every business should trust',
        body: [
          'Workload: what is in progress, who owns it, what’s blocked, and what’s at risk.',
          'Revenue pipeline: which deals are active, what stage they’re in, and what activities are moving them forward.',
          'If those two reports are unreliable, everything else becomes stressful.',
        ],
      },
      {
        heading: 'Connected objects make metrics obvious',
        body: [
          'When a client, project, task, and time entries are connected, you can compute delivery health without manual spreadsheets.',
          'When conversations are linked, you can see leading indicators: response times, volume spikes, and approval delays.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Dashboards become trustworthy when relationships are real, not guessed.',
          'Start with workload + revenue pipeline and build from there.',
          'Connected data reduces debates and increases action.',
        ],
      },
    ],
  },

  // -------------------------
  // INTEGRATIONS
  // -------------------------
  {
    slug: 'integrations-roadmap',
    title: 'Integrations roadmap: what’s available today and what’s coming next',
    excerpt:
      'UNOBITS is designed to be the command center. Here’s how integrations, webhooks, and upcoming connectors fit into the ecosystem — without bringing back tab overload.',
    date: '2025-12-15',
    readTime: '9 min read',
    category: 'Integrations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'The “command center” integration philosophy',
        body: [
          'Integrations should reduce tool switching, not increase it.',
          'A healthy integration strategy moves information into your system of execution so you can act without bouncing between apps all day.',
        ],
      },
      {
        heading: 'Two kinds of integrations that matter most',
        body: [
          'Inbound signal integrations: capture events and messages (forms, inboxes, calendars) so work arrives in one place.',
          'Outbound action integrations: trigger updates (webhooks, notifications, exports) so other tools stay in sync when needed.',
        ],
      },
      {
        heading: 'Webhooks are the backbone of customization',
        body: [
          'When you need something specific, webhooks are often simpler than a full “native integration.”',
          'They let you react to real events (deal moved, task completed, approval granted) and send that data where it needs to go.',
        ],
      },
      {
        heading: 'Social media connectors (coming soon)',
        body: [
          'Social signals are work. DMs, comments, and mentions often trigger support needs, sales conversations, and reputation risks.',
          'The goal is to route those signals into the same workflows as email and chat — so your team can respond with consistency.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Integrations work best when they bring signals into your system of execution.',
          'Separate “inbound signals” from “outbound actions” so you design clean workflows.',
          'Use webhooks for flexibility and keep the system calm.',
        ],
      },
    ],
  },
  {
    slug: 'webhooks-101-for-founders',
    title: 'Webhooks 101 for founders: trigger actions without a giant integration project',
    excerpt:
      'Webhooks sound technical, but the idea is simple: “when this happens, tell that.” Here’s a beginner-friendly guide to using webhooks to automate real business workflows.',
    date: '2025-11-12',
    readTime: '10 min read',
    category: 'Integrations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'What a webhook is (in plain English)',
        body: [
          'A webhook is a message your system sends automatically when an event happens.',
          'It’s like a doorbell: when someone presses it (event), your house hears it (receiver) and you can decide what to do next.',
        ],
      },
      {
        heading: 'Common webhook workflows teams actually use',
        body: [
          'When a lead submits a form, create a deal and notify the sales channel.',
          'When a deal is won, create onboarding tasks and assign an owner.',
          'When an invoice is paid, move the client to “active” and send a welcome message.',
          'When a high-priority support ticket arrives, alert the on-call person.',
        ],
      },
      {
        heading: 'What to watch out for',
        body: [
          'Webhooks can fire more than once. Always design for duplicates.',
          'You need a way to see logs. If you can’t see what was sent, debugging becomes guesswork.',
          'Start with one workflow, test it, then expand. Don’t build ten at once.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Webhooks are event notifications: “when X happens, tell Y.”',
          'They’re perfect for automating handoffs and keeping systems in sync.',
          'Design for duplicates and keep logs so the system stays trustworthy.',
        ],
      },
    ],
  },
  {
    slug: 'integration-strategy-consolidate-connect-kill',
    title: 'Integration strategy: when to consolidate, when to connect, and when to kill a tool',
    excerpt:
      'Not every tool deserves an integration. Some tools should be replaced, some should be connected, and some should be removed. Here’s a simple decision framework.',
    date: '2025-10-03',
    readTime: '11 min read',
    category: 'Integrations',
    author: 'UNOBITS Team',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80',
    content: [
      {
        heading: 'Integrations can add value… or recreate chaos',
        body: [
          'A messy tool stack with lots of integrations is still a messy tool stack. Sometimes it’s worse, because failures become invisible.',
          'The question isn’t “can we integrate this?” The question is “should this exist in our system at all?”',
        ],
      },
      {
        heading: 'Consolidate when the work is core',
        body: [
          'If a tool holds core work objects (clients, projects, tasks, approvals), consolidating reduces friction and improves visibility.',
          'Core work should live where execution happens. Otherwise your team spends time syncing instead of shipping.',
        ],
      },
      {
        heading: 'Connect when the tool is best-in-class and stable',
        body: [
          'Some tools are specialists: accounting, HR payroll, niche analytics. If they are stable and well understood, connecting them makes sense.',
          'Use integrations for signals and summary data, not to recreate every feature inside your OS.',
        ],
      },
      {
        heading: 'Kill tools that create duplicates',
        body: [
          'If two tools both manage tasks, or both store client data, you will fight duplicates forever.',
          'Pick one source of truth per object. Then remove the duplicate tool or restrict it to read-only.',
        ],
      },
      {
        heading: 'Key takeaways',
        body: [
          'Consolidate core work. Connect specialists. Kill duplicates.',
          'Your goal is fewer resets and fewer “where is the latest?” moments.',
          'A calm system beats a complicated stack — even if the complicated stack has more features.',
        ],
      },
    ],
  },
]
  // Show newest first.
  .sort((a, b) => (a.date < b.date ? 1 : -1));

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
