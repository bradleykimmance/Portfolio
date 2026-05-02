import { Code } from 'lucide-react';

const architectureProjects = [
  {
    description:
      'Multi-provider payment orchestration with retry logic and event sourcing.',
    mermaid: `graph LR
      A[API Gateway] --> B[Validation Service]
      B --> C{Event Bus}
      C --> D[Stripe Provider]
      C --> E[PayPal Provider]
      D --> F[Database]
      E --> F`,
    title: 'Global Payment Pipeline',
  },
  {
    description:
      'Dynamic IVR routing based on real-time customer data and intent analysis.',
    mermaid: `graph TD
      A[Customer Call] --> B[Speech Recognition]
      B --> C{Route Logic}
      C --> D[Self Service]
      C --> E[Agent Transfer]`,
    title: 'IVR Workflow Engine',
  },
];

export const ArchitectureGallery = () => {
  return (
    <section
      className="py-20 px-4"
      id="architecture"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Architecture Gallery
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {architectureProjects.map((project) => (
            <div
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700"
              key={project.title}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code
                  color="#2b7fff"
                  size={24}
                />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                {project.description}
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-slate-200 dark:border-slate-800 font-mono text-sm overflow-x-auto">
                <pre className="text-blue-600 dark:text-blue-400">
                  {project.mermaid}
                </pre>
                <div className="mt-4 pt-4 border-t dark:border-slate-800 text-xs text-slate-400 italic">
                  * Mermaid.js rendering engine ready for implementation
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
