// src/lib/megaMenuData.ts
import {
  Briefcase,
  BarChart3,
  CheckSquare,
  MessageSquare,
  Users,
  Building,
  Rocket,
  Palette
} from 'lucide-react';

export const productMenu = {
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
  ],
};
