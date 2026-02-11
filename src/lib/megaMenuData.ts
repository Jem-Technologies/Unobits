// src/lib/megaMenuData.ts
import {
  Briefcase,
  BarChart3,
  CheckSquare,
  MessageSquare,
  Users,
  Building,
  Rocket,
  Palette,
  FileText,
  LayoutDashboard,
  Unplug,
  Webhook,
  ShieldCheck,
  Lock,
  Zap,
  Mail
} from 'lucide-react';

export const productMenu = {
  featuredTitle: 'Featured',
  gridTitle: 'Core Tools',
  featured: [
    {
      name: 'The UNOBITS Ecosystem',
      description: 'See how all your tools connect in one seamless OS for your business.',
      href: '/product/ecosystem',
      icon: Rocket,
    },
    {
      name: 'Mobile Powerhouse',
      description: 'Run your entire business from your pocket with our fully-featured mobile app.',
      href: '/product/mobile-app',
      icon: Briefcase,
    },
  ],
  grid: [
    {
      name: 'Communication',
      description: 'Chat, Email & Video calls.',
      href: '/product/communication',
      icon: MessageSquare,
    },
    {
      name: 'Productivity',
      description: 'Docs, Sheets & Whiteboards.',
      href: '/product/productivity',
      icon: CheckSquare,
    },
    {
      name: 'Growth',
      description: 'CRM, Email Marketing & Funnels.',
      href: '/product/growth',
      icon: BarChart3,
    },
    {
      name: 'Operations',
      description: 'Project Mgmt & HR.',
      href: '/product/operations',
      icon: Palette,
    },
  ],
};

export const solutionsMenu = {
  featuredTitle: 'Featured',
  gridTitle: 'Use Cases',
  featured: [
    {
      name: 'For Startups',
      description: 'Get off the ground faster with an all-in-one suite built to scale with you.',
      href: '/solutions/startups',
      icon: Rocket,
    },
     {
      name: 'For Agencies',
      description: 'Manage clients, projects, and your team in one place, from pitch to payment.',
      href: '/solutions/agencies',
      icon: Palette,
    },
  ],
  grid: [
    {
      name: 'By Industry',
      description: 'Tailored solutions for tech, marketing, real estate, and more.',
      href: '/solutions/industry',
      icon: Building,
    },
    {
      name: 'By Team Size',
      description: 'From solo founders to teams of 500+, find the perfect fit.',
      href: '/solutions/team-size',
      icon: Users,
    },
    {
      name: 'Client Portal',
      description: 'A clean, secure place for clients to view progress and approve work.',
      href: '/client-portal',
      icon: Users,
    },
    {
      name: 'Team Portal',
      description: 'Keep internal updates, resources, and execution aligned in one hub.',
      href: '/team-portal',
      icon: Building,
    },
    {
      name: 'CRM + Shared Inbox',
      description: 'One app for CRM and communication — stop bouncing between tools.',
      href: '/one-app-for-crm-and-shared-inbox',
      icon: MessageSquare,
    },
    {
      name: 'Replace 10 Tools',
      description: 'A practical breakdown of consolidating subscriptions into one OS.',
      href: '/replace-10-business-subscriptions',
      icon: CheckSquare,
    },
  ],
};

export const resourcesMenu = {
  featuredTitle: 'Start here',
  gridTitle: 'Explore resources',
  featured: [
    {
      name: 'Blog & Guides',
      description: 'Practical playbooks to reduce tab overload and improve execution.',
      href: '/resources',
      icon: FileText,
    },
    {
      name: 'Templates Library',
      description: 'Ready-to-use templates for onboarding, delivery, ops, and workflows.',
      href: '/templates',
      icon: LayoutDashboard,
    },
  ],
  grid: [
    {
      name: 'Alternatives',
      description: 'See how UNOBITS compares to common stacks and tool combos.',
      href: '/alternatives',
      icon: Unplug,
    },
    {
      name: 'Reviews',
      description: 'What teams are saying — wins, use cases, and real outcomes.',
      href: '/reviews',
      icon: BarChart3,
    },
    {
      name: 'Tab Overload Guide',
      description: 'A deep dive into reducing context switching and tool fatigue.',
      href: '/tab-overload',
      icon: CheckSquare,
    },
    {
      name: 'Help Center',
      description: 'Answers, setup guides, and common workflows to get started fast.',
      href: '/help-center',
      icon: MessageSquare,
    },
    {
      name: 'Developers (API)',
      description: 'Build custom workflows with webhooks, endpoints, and integrations.',
      href: '/developers',
      icon: Webhook,
    },
    {
      name: 'Changelog',
      description: 'See what’s new and what we’re shipping next.',
      href: '/changelog',
      icon: Zap,
    },
  ],
};

export const companyMenu = {
  featuredTitle: 'Company',
  gridTitle: 'More',
  featured: [
    {
      name: 'About',
      description: 'Why UNOBITS exists and the mission behind the OS.',
      href: '/about',
      icon: Building,
    },
    {
      name: 'Careers',
      description: 'Join the team building the one-tab business OS.',
      href: '/careers',
      icon: Briefcase,
    },
  ],
  grid: [
    {
      name: 'Contact',
      description: 'Talk to sales, partnerships, or support.',
      href: '/contact',
      icon: Mail,
    },
    {
      name: 'Security',
      description: 'How we protect your data and keep your workspace safe.',
      href: '/security',
      icon: ShieldCheck,
    },
    {
      name: 'Status',
      description: 'Live status and operational updates.',
      href: '/status',
      icon: Zap,
    },
    {
      name: 'Legal',
      description: 'Terms, privacy, and policies.',
      href: '/legal',
      icon: Lock,
    },
    {
      name: 'Community',
      description: 'Connect with other builders and UNOBITS users.',
      href: '/community',
      icon: Users,
    },
    {
      name: 'Pricing',
      description: 'Plans and pricing details.',
      href: '/pricing',
      icon: LayoutDashboard,
    },
  ],
};
