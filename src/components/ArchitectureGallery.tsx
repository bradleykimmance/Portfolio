import paymentOrchestrationDark from '../assets/diagrams/payment-orchestration-dark.svg';
import paymentOrchestrationLight from '../assets/diagrams/payment-orchestration-light.svg';
import selectiveCallRecordingDark from '../assets/diagrams/selective-call-recording-dark.svg';
import selectiveCallRecordingLight from '../assets/diagrams/selective-call-recording-light.svg';
import { Code } from 'lucide-react';

// SVGs are pre-rendered from the Mermaid sources in diagrams/*.mmd.
// After editing a .mmd file, regenerate them with `npm run diagrams`.
const architectureProjects = [
  {
    alt: 'Flow diagram: recording servers and an Avaya AES WTI service publish events to RabbitMQ. A selective recording worker consumes them, maintains per-call state, and either issues a resume-recording command for registered agents or leaves recording paused.',
    description:
      'A RabbitMQ-based state machine that synchronises events from recording servers and a real-time telephony service so that only registered agents are ever recorded. The worker maintains per-call state across both event streams and issues resume-recording commands — running against thousands of concurrent calls in production.',
    diagram: {
      dark: selectiveCallRecordingDark,
      light: selectiveCallRecordingLight,
    },
    title: 'Selective Call Recording Worker',
  },
  {
    alt: 'Flow diagram: an application API passes requests through a validation layer to a payment orchestrator, which routes each transaction to one of several providers. Results land in a single transaction store that publishes events.',
    description:
      'A single orchestration layer routes transactions across multiple payment providers, so adding a provider or handling an outage never touches application code. All transactions land in one store and publish events for downstream consumers like reconciliation and reporting.',
    diagram: {
      dark: paymentOrchestrationDark,
      light: paymentOrchestrationLight,
    },
    title: 'Payment Provider Orchestration',
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
            Simplified views of real systems I have designed and run in
            production — implementation details abstracted out of respect for
            employer and client confidentiality.
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

              <div className="overflow-x-auto rounded-xl border border-cream-200 bg-cream-50 p-6 dark:border-espresso-800 dark:bg-espresso-950">
                <img
                  alt={project.alt}
                  className="mx-auto max-h-80 w-auto max-w-full md:max-h-150 dark:hidden"
                  src={project.diagram.light}
                />
                <img
                  alt={project.alt}
                  className="mx-auto hidden max-h-80 w-auto max-w-full md:max-h-150 dark:block"
                  src={project.diagram.dark}
                />

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
