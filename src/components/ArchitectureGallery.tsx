import { Code } from 'lucide-react';

const architectureProjects = [
  {
    description: 'Example Architecture 1',
    mermaid: `graph LR
  A[Application API] --> B[Validation Layer]
  B --> C[Payment Orchestrator]
  C --> D{Provider Router}
  D --> E[Provider A]
  D --> F[Provider B]
  E --> G[Transaction Store]
  F --> G
  G --> H[Event Publisher]`,
    title: 'Payment Provider Orchestration',
  },
  {
    description: 'Example Architecture 2',
    mermaid: `graph TD
  A[Telephony Platform] --> B[Event Listener]
  B --> C[Integration Service]
  C --> D[Context Resolver]
  D --> E[Web Application]
  C --> F[Audit Trail]`,
    title: 'Telephony Context Integration',
  },
];

export const ArchitectureGallery = () => {
  return (
    <section
      className="px-4 py-20"
      id="architecture"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-300">
            Architecture Gallery
          </p>
          <h2 className="text-3xl font-bold text-espresso-950 dark:text-cream-50">
            Clear integration patterns for real-world software systems.
          </h2>
          <p className="mt-4 text-warm-gray-600 dark:text-cream-200/70">
            Simplified examples showing the kinds of system boundaries and data
            flows I work with.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {architectureProjects.map((project) => (
            <div
              className="min-w-0 rounded-2xl border border-cream-200 bg-white/80 p-8 text-center shadow-sm md:text-left dark:border-espresso-800 dark:bg-espresso-900/70"
              key={project.title}
            >
              <div className="mb-6 flex flex-col items-center gap-3 md:flex-row md:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 ring-1 ring-gold-400/20">
                  <div className="text-gold-500 dark:text-gold-300">
                    <Code
                      color="currentColor"
                      size={24}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-espresso-950 dark:text-cream-50">
                  {project.title}
                </h3>
              </div>

              <p className="mb-8 leading-7 text-warm-gray-600 dark:text-cream-200/75">
                {project.description}
              </p>

              <div className="overflow-x-auto rounded-xl border border-cream-200 bg-cream-50 p-6 font-mono text-sm dark:border-espresso-800 dark:bg-espresso-950">
                <pre className="text-espresso-800 dark:text-cream-100">
                  {project.mermaid}
                </pre>

                <div className="mt-4 border-t border-cream-200 pt-4 text-xs italic text-warm-gray-500 dark:border-espresso-800 dark:text-cream-200/60">
                  * Simplified architecture example. Detailed implementation
                  varies by provider, platform, and business requirements.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
