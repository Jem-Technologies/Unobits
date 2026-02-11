// src/components/common/FaqSection.tsx

type FAQItem = { q: string; a: string };

export default function FaqSection({
  title = 'FAQ',
  items,
}: {
  title?: string;
  items: FAQItem[];
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="u-surface p-8 shadow-sm dark:border-white/10 dark:bg-obsidian">
          <h2 className="text-2xl font-bold text-headings dark:text-white">{title}</h2>

          <div className="mt-8 space-y-6">
            {items.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white/60 p-6 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-lg font-semibold text-headings dark:text-white">{item.q}</h3>
                <p className="mt-2 text-body-copy dark:text-slate-300 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
