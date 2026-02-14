// src/lib/integrationSphereData.ts
import { slugify } from './slugify';

export type IntegrationSphereStatus = 'Available' | 'Coming soon';

export type IntegrationSphereItem = {
  id: string;
  name: string;
  href: string;
  category: string;
  status: IntegrationSphereStatus;
  spriteIndex: number;
};

const RAW_INTEGRATIONS: Array<Omit<IntegrationSphereItem, 'id' | 'href' | 'spriteIndex'>> = [
  { name: 'Slack', category: 'Communication', status: 'Available' },
  { name: 'Microsoft Teams', category: 'Communication', status: 'Available' },
  { name: 'Discord', category: 'Communication', status: 'Available' },
  { name: 'Google Chat', category: 'Communication', status: 'Coming soon' },
  { name: 'Zoom', category: 'Meetings', status: 'Available' },
  { name: 'Google Meet', category: 'Meetings', status: 'Available' },
  { name: 'Microsoft Outlook', category: 'Email', status: 'Available' },
  { name: 'Gmail', category: 'Email', status: 'Available' },
  { name: 'IMAP / SMTP', category: 'Email', status: 'Available' },
  { name: 'Google Calendar', category: 'Calendar', status: 'Available' },
  { name: 'Outlook Calendar', category: 'Calendar', status: 'Available' },
  { name: 'Calendly', category: 'Calendar', status: 'Available' },
  { name: 'Notion', category: 'Docs', status: 'Available' },
  { name: 'Confluence', category: 'Docs', status: 'Coming soon' },
  { name: 'Jira', category: 'Projects', status: 'Available' },
  { name: 'Trello', category: 'Projects', status: 'Available' },
  { name: 'Asana', category: 'Projects', status: 'Available' },
  { name: 'Monday.com', category: 'Projects', status: 'Available' },
  { name: 'ClickUp', category: 'Projects', status: 'Available' },
  { name: 'Linear', category: 'Projects', status: 'Available' },
  { name: 'Basecamp', category: 'Projects', status: 'Coming soon' },
  { name: 'Smartsheet', category: 'Projects', status: 'Coming soon' },
  { name: 'Airtable', category: 'Database', status: 'Available' },
  { name: 'Google Drive', category: 'Storage', status: 'Available' },
  { name: 'Dropbox', category: 'Storage', status: 'Available' },
  { name: 'Box', category: 'Storage', status: 'Available' },
  { name: 'OneDrive', category: 'Storage', status: 'Available' },
  { name: 'Google Sheets', category: 'Spreadsheets', status: 'Available' },
  { name: 'Google Docs', category: 'Docs', status: 'Available' },
  { name: 'Microsoft Excel', category: 'Spreadsheets', status: 'Available' },
  { name: 'Microsoft Word', category: 'Docs', status: 'Available' },
  { name: 'Figma', category: 'Design', status: 'Available' },
  { name: 'Miro', category: 'Design', status: 'Available' },
  { name: 'Loom', category: 'Video', status: 'Available' },
  { name: 'GitHub', category: 'Dev', status: 'Available' },
  { name: 'GitLab', category: 'Dev', status: 'Available' },
  { name: 'Azure DevOps', category: 'Dev', status: 'Coming soon' },
  { name: 'Jira Service Management', category: 'Support', status: 'Coming soon' },
  { name: 'Zendesk', category: 'Support', status: 'Available' },
  { name: 'Freshdesk', category: 'Support', status: 'Available' },
  { name: 'Help Scout', category: 'Support', status: 'Coming soon' },
  { name: 'Intercom', category: 'Support', status: 'Available' },
  { name: 'Twilio', category: 'Messaging', status: 'Available' },
  { name: 'SendGrid', category: 'Email', status: 'Available' },
  { name: 'Mailchimp', category: 'Marketing', status: 'Available' },
  { name: 'HubSpot', category: 'CRM', status: 'Available' },
  { name: 'Salesforce', category: 'CRM', status: 'Available' },
  { name: 'Pipedrive', category: 'CRM', status: 'Coming soon' },
  { name: 'Zoho CRM', category: 'CRM', status: 'Coming soon' },
  { name: 'Stripe', category: 'Payments', status: 'Available' },
  { name: 'PayPal', category: 'Payments', status: 'Available' },
  { name: 'Square', category: 'Payments', status: 'Coming soon' },
  { name: 'Flutterwave', category: 'Payments', status: 'Coming soon' },
  { name: 'Paystack', category: 'Payments', status: 'Coming soon' },
  { name: 'Shopify', category: 'Ecommerce', status: 'Available' },
  { name: 'WooCommerce', category: 'Ecommerce', status: 'Coming soon' },
  { name: 'QuickBooks', category: 'Finance', status: 'Available' },
  { name: 'Xero', category: 'Finance', status: 'Available' },
  { name: 'FreshBooks', category: 'Finance', status: 'Coming soon' },
  { name: 'Zapier', category: 'Automation', status: 'Available' },
  { name: 'Make', category: 'Automation', status: 'Available' },
  { name: 'n8n', category: 'Automation', status: 'Coming soon' },
  { name: 'IFTTT', category: 'Automation', status: 'Coming soon' },
  { name: 'Webhooks', category: 'Automation', status: 'Available' },
  { name: 'Google Analytics', category: 'Analytics', status: 'Available' },
  { name: 'Mixpanel', category: 'Analytics', status: 'Coming soon' },
  { name: 'Amplitude', category: 'Analytics', status: 'Coming soon' },
  { name: 'Segment', category: 'Data', status: 'Coming soon' },
  { name: 'Snowflake', category: 'Data', status: 'Coming soon' },
  { name: 'BigQuery', category: 'Data', status: 'Coming soon' },
  { name: 'PostgreSQL', category: 'Database', status: 'Available' },
  { name: 'MySQL', category: 'Database', status: 'Available' },
  { name: 'MongoDB', category: 'Database', status: 'Available' },
  { name: 'Supabase', category: 'Database', status: 'Coming soon' },
  { name: 'Firebase', category: 'Database', status: 'Coming soon' },
  { name: 'AWS S3', category: 'Infrastructure', status: 'Available' },
  { name: 'Google Cloud Storage', category: 'Infrastructure', status: 'Coming soon' },
  { name: 'Azure Blob Storage', category: 'Infrastructure', status: 'Coming soon' },
  { name: 'Cloudflare', category: 'Infrastructure', status: 'Available' },
  { name: 'Vercel', category: 'Dev', status: 'Available' },
  { name: 'Netlify', category: 'Dev', status: 'Coming soon' },
  { name: 'Sentry', category: 'Monitoring', status: 'Available' },
  { name: 'Datadog', category: 'Monitoring', status: 'Coming soon' },
  { name: 'New Relic', category: 'Monitoring', status: 'Coming soon' },
  { name: 'PagerDuty', category: 'Monitoring', status: 'Coming soon' },
  { name: 'Opsgenie', category: 'Monitoring', status: 'Coming soon' },
  { name: 'ServiceNow', category: 'ITSM', status: 'Coming soon' },
  { name: 'Okta', category: 'Security', status: 'Coming soon' },
  { name: 'Microsoft Entra ID', category: 'Security', status: 'Coming soon' },
  { name: '1Password', category: 'Security', status: 'Coming soon' },
  { name: 'Google Workspace', category: 'Platform', status: 'Available' },
  { name: 'Microsoft 365', category: 'Platform', status: 'Available' },
  { name: 'Facebook', category: 'Social', status: 'Coming soon' },
  { name: 'Instagram', category: 'Social', status: 'Coming soon' },
  { name: 'LinkedIn', category: 'Social', status: 'Coming soon' },
  { name: 'X (Twitter)', category: 'Social', status: 'Coming soon' },
  { name: 'TikTok', category: 'Social', status: 'Coming soon' },
  { name: 'YouTube', category: 'Social', status: 'Coming soon' },
  { name: 'Google Ads', category: 'Ads', status: 'Coming soon' },
  { name: 'Meta Ads', category: 'Ads', status: 'Coming soon' },
];

/**
 * Sprite sheet metadata.
 * - Single request (performance-friendly on mobile)
 * - 10x10 grid = 100 tiles
 */
export const INTEGRATION_SPRITE = {
  url: '/integrations/integration-sprite.png',
  tileSize: 162,
  columns: 10,
  rows: 10,
} as const;

export const INTEGRATION_SPHERE_LOGOS: IntegrationSphereItem[] = RAW_INTEGRATIONS.map((it, idx) => {
  const id = slugify(it.name);
  return {
    ...it,
    id,
    href: `/integrations#${id}`,
    spriteIndex: idx,
  };
});

/**
 * Utility for sprite-sheet background positioning (useful for static grid fallback).
 * `displayTileSize` is the rendered size in CSS pixels (e.g., 56).
 */
export function getIntegrationSpritePosition(index: number, displayTileSize: number) {
  const col = index % INTEGRATION_SPRITE.columns;
  const row = Math.floor(index / INTEGRATION_SPRITE.columns);
  return {
    x: col * displayTileSize,
    y: row * displayTileSize,
  };
}
