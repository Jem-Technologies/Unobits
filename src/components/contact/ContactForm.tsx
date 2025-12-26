'use client';

import { useMemo, useState } from 'react';
import { SUPPORT_EMAIL, SUPPORT_PHONE } from '@/lib/siteConfig';

type Topic = 'Support' | 'Sales' | 'Custom plan' | 'Partnerships' | 'Other';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [topic, setTopic] = useState<Topic>('Support');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = `[${topic}] ${company ? company + ' — ' : ''}${name || 'New message'}`;
    const body = [
      `Name: ${name || '—'}`,
      `Email: ${email || '—'}`,
      `Company: ${company || '—'}`,
      `Topic: ${topic}`,
      '',
      message || '—',
    ].join('\n');
    return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [company, email, message, name, topic]);

  const canSubmit = message.trim().length > 0;

  return (
    <div className="u-surface p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-headings dark:text-white">Contact us</h2>
          <p className="mt-3 text-body-copy dark:text-slate-400">
            Reach support, ask about Custom plans, or discuss integrations.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <p className="text-body-copy dark:text-slate-400">
              <span className="font-semibold text-headings dark:text-white">Phone:</span>{' '}
              <a className="text-neon-teal hover:underline" href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, '')}`}>
                {SUPPORT_PHONE}
              </a>
            </p>
            <p className="text-body-copy dark:text-slate-400">
              <span className="font-semibold text-headings dark:text-white">Email:</span>{' '}
              <a className="text-neon-teal hover:underline" href={`mailto:${SUPPORT_EMAIL}`}>
                {SUPPORT_EMAIL}
              </a>
            </p>
            <p className="text-body-copy dark:text-slate-400">
              <span className="font-semibold text-headings dark:text-white">Hours:</span> 24/7 support for Custom plans
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!canSubmit) return;
              window.location.href = mailtoHref;
            }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-headings dark:text-white">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-white/10 dark:bg-obsidian dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-headings dark:text-white">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-white/10 dark:bg-obsidian dark:text-white"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-headings dark:text-white">Company</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-white/10 dark:bg-obsidian dark:text-white"
                placeholder="Company"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-semibold text-headings dark:text-white">Topic</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value as Topic)}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-headings focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-white/10 dark:bg-obsidian dark:text-white"
              >
                <option>Support</option>
                <option>Sales</option>
                <option>Custom plan</option>
                <option>Partnerships</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-headings dark:text-white">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-headings placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-teal dark:border-white/10 dark:bg-obsidian dark:text-white"
                placeholder="Tell us what you’re trying to accomplish…"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send message
              </button>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-headings shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-obsidian dark:text-white dark:hover:bg-white/5"
              >
                Open in email app
              </a>
            </div>

            <p className="sm:col-span-2 text-xs text-slate-500 dark:text-slate-400">
              This form opens your email client (mailto) so it works on a statically hosted site.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
