import InnerPageHero from '@/components/common/InnerPageHero';
import Footer from '@/components/Footer';
import ZigZagLayout from '@/components/product/ZigZagLayout';

// Helper to capitalize the first letter of a string
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// Sample data - in a real app, this would be fetched based on the slug
const sampleFeatures = [
  {
    name: 'Real-time Collaboration',
    title: 'Collaborate without compromise',
    description:
      'Work together in real-time on documents, spreadsheets, and presentations. See cursors move, comments appear, and changes happen instantly, eliminating version control issues.',
    imageUrl: 'https://placehold.co/800x600/00d4ff/white?text=Collaboration',
    highlights: [
      'Live cursors and presence indicators.',
      'Threaded comments and @mentions.',
      'Version history and easy rollbacks.',
    ],
  },
  {
    name: 'Powerful Automations',
    title: 'Automate your repetitive tasks',
    description:
      'Build powerful, no-code automations to handle your grunt work. From sending follow-up emails to updating your CRM, let UNOBITS do the heavy lifting so you can focus on what matters.',
    imageUrl: 'https://placehold.co/800x600/4f46e5/white?text=Automations',
    highlights: [
      'Visual, drag-and-drop workflow builder.',
      'Connects with all your UNOBITS tools.',
      'Integrates with Zapier for external connections.',
    ],
  },
    {
    name: 'Integrated CRM',
    title: 'A single source of truth for your customers',
    description:
      'Manage your entire sales pipeline, from lead to close, right within UNOBITS. Track interactions, manage contacts, and get a 360-degree view of your customer relationships.',
    imageUrl: 'https://placehold.co/800x600/050507/white?text=CRM',
    highlights: [
      'Visual pipeline management.',
      'Automatic contact data enrichment.',
      'Email and calendar integration.',
    ],
  },
];


export default function ProductPage({ params }: { params: { slug: string } }) {
  const productName = capitalize(params.slug.replace(/-/g, ' '));

  return (
    <div className="bg-white dark:bg-slate-900">
      <main className="isolate">
        <InnerPageHero
          title={productName}
          subtitle={`Learn everything about the ${productName} feature and how it can supercharge your workflow.`}
          breadcrumbs={[
            { name: 'Product', href: '#' }, // A generic product landing page might exist
            { name: productName, href: `/product/${params.slug}` },
          ]}
        />

        <ZigZagLayout features={sampleFeatures} />

      </main>
      <Footer />
    </div>
  );
}
