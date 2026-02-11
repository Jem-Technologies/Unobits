import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InnerPageHero from '@/components/common/InnerPageHero';
import OpenSignupButton from '@/components/common/OpenSignupButton';
import FaqSection from '@/components/common/FaqSection';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Reviews',
  description:
    'Help more founders discover UNOBITS. Leave a review on trusted, neutral platforms like G2, Capterra, or SoftwareSuggest.',
  path: '/reviews',
  keywords: ['UNOBITS reviews', 'G2 reviews', 'Capterra reviews', 'SoftwareSuggest', 'social proof'],
});

const faq = [
  {
    q: 'Why do reviews matter for software?',
    a: 'When founders search for alternatives to incumbents, third‑party review sites often rank above company websites. Reviews build trust and help people evaluate faster.',
  },
  {
    q: 'Where should I leave a review?',
    a: 'Neutral platforms like G2, Capterra, and SoftwareSuggest are common starting points. If UNOBITS isn’t listed yet, you can still share feedback via email or social and we’ll route it to the right place.',
  },
  {
    q: 'What should I include in my review?',
    a: 'Share your real workflow: what tools you replaced, what improved (time-to-response, delivery speed, visibility), and what you’d like us to add next.',
  },
];

export default function ReviewsPage() {
  return (
    <div className="u-page">
      <Navbar />
      <main className="isolate">
        <InnerPageHero
          title="Reviews & social proof"
          subtitle="Social proof is everything in software. If UNOBITS helps you reduce tab overload, a short review helps other founders find a better way to work."
          breadcrumbs={[{ name: 'Reviews', href: '/reviews' }]}
        />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h2 className="text-2xl font-bold text-headings dark:text-white">Leave a review (2 minutes)</h2>
                <p className="mt-3 text-body-copy dark:text-slate-400">
                  Reviews help us show up when people search for alternatives — especially for queries like “{`Zoho alternative`}`” or “{`replace 10 business subscriptions`}`”.
                </p>
                <div className="mt-6">
                  <OpenSignupButton className="inline-flex items-center justify-center rounded-lg bg-neon-teal px-6 py-3 text-sm font-semibold text-black hover:bg-opacity-80">
                    Start free trial
                  </OpenSignupButton>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    title: 'G2',
                    href: 'https://www.g2.com/',
                    desc: 'One of the most common review sites founders check first.',
                  },
                  {
                    title: 'Capterra',
                    href: 'https://www.capterra.com/',
                    desc: 'Great for comparisons and category browsing.',
                  },
                  {
                    title: 'SoftwareSuggest',
                    href: 'https://www.softwaresuggest.com/',
                    desc: 'Popular for “alternatives to…” searches in many markets.',
                  },
                ].map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:border-neon-teal transition dark:border-white/10 dark:bg-white/5"
                  >
                    <h3 className="text-lg font-bold text-headings dark:text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-body-copy dark:text-slate-300">{card.desc}</p>
                    <p className="mt-4 text-sm font-semibold text-neon-teal">Open →</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-black/20">
              <h3 className="text-lg font-bold text-headings dark:text-white">A simple review outline</h3>
              <p className="mt-2 text-body-copy dark:text-slate-400">
                If you’re not sure what to write, this structure works well:
              </p>
              <ol className="mt-4 space-y-3 text-body-copy dark:text-slate-300 list-decimal pl-6">
                <li>What your stack looked like before (how many tools/tabs).</li>
                <li>What workflow you moved first (inbox + CRM + onboarding is common).</li>
                <li>What improved (speed, clarity, visibility, fewer hand-offs).</li>
                <li>What you’d like to see next.</li>
              </ol>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Note: Please only share your real experience. Honest feedback helps us build a better product.
              </p>
            </div>
          </div>
        </section>

        <FaqSection title="Reviews FAQ" items={faq} />
      </main>
      <Footer />
    </div>
  );
}
