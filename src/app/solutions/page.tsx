import InnerPageHero from '@/components/common/InnerPageHero';
import Footer from '@/components/Footer';

export default function SolutionsPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <main className="isolate">
        <InnerPageHero
          title="Solutions for Every Business"
          subtitle="Discover how UNOBITS can be tailored to fit the unique needs of your industry and team size."
          breadcrumbs={[{ name: 'Solutions', href: '/solutions' }]}
        />

        {/* Placeholder for solution details */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold leading-7 text-neon-teal">Placeholder</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-headings dark:text-white sm:text-5xl">
                Solution Details Go Here
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-body-copy dark:text-slate-400">
                The detailed content for different solutions (By Industry, By Team Size) will be added later.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
