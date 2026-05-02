import {
  Cloud,
  CreditCard,
  Network,
  Server,
  Workflow,
  Zap,
} from 'lucide-react';

const competencies = [
  {
    description:
      'Payment service provider integrations covering transaction lifecycles, provider-specific workflows, and reliable API boundaries.',
    details: ['Authorisation', 'Settlement', 'Tokenisation', '3D Secure'],
    Icon: CreditCard,
    title: 'Payment Integrations',
  },
  {
    description:
      'Backend-focused TypeScript and Node.js services designed around maintainability, clear boundaries, and practical production use.',
    details: ['TypeScript', 'Node.js', 'API Design', 'Clean Architecture'],
    Icon: Server,
    title: 'Backend Engineering',
  },
  {
    description:
      'Cloud-native services and deployment patterns using infrastructure that supports scalable, dependable applications.',
    details: ['AWS', 'Kubernetes', 'Services', 'Reliability'],
    Icon: Cloud,
    title: 'Cloud-Native Systems',
  },
  {
    description:
      'Asynchronous workflows and integration patterns for systems that need to handle events, retries, and background processing.',
    details: ['RabbitMQ', 'Redis', 'Queues', 'Event Flows'],
    Icon: Workflow,
    title: 'Event-Driven Architecture',
  },
  {
    description:
      'Contact-centre and telephony integrations that bring operational call context into useful web application experiences.',
    details: ['Genesys Cloud CX', 'Avaya AES', 'Call Context', 'Web Apps'],
    Icon: Network,
    title: 'Telephony Integrations',
  },
  {
    description:
      'A practical approach to solving complex integration problems with systems that remain understandable and maintainable.',
    details: ['Problem Solving', 'System Design', 'Maintainability'],
    Icon: Zap,
    title: 'Practical Architecture',
  },
];

export const Competencies = () => {
  return (
    <section
      className="bg-cream-100/60 px-4 py-20 dark:bg-espresso-900/50"
      id="competencies"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-300">
            Core Competencies
          </p>
          <h2 className="text-3xl font-bold text-espresso-950 dark:text-cream-50">
            Backend-focused engineering for complex integration environments.
          </h2>
          <p className="mt-4 text-warm-gray-600 dark:text-cream-200/70">
            Practical strengths across payments, telephony, cloud services,
            event-driven systems, and clean TypeScript architecture.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {competencies.map(({ Icon, ...comp }) => (
            <div
              className="rounded-2xl border border-cream-200 bg-white/80 p-8 shadow-sm transition-transform hover:-translate-y-1 dark:border-espresso-800 dark:bg-espresso-950/70"
              key={comp.title}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-500 ring-1 ring-gold-400/20 dark:text-gold-300">
                <Icon
                  color="currentColor"
                  size={32}
                />
              </div>

              <h3 className="mb-4 text-xl font-bold text-espresso-950 dark:text-cream-50">
                {comp.title}
              </h3>

              <p className="mb-6 leading-7 text-warm-gray-600 dark:text-cream-200/75">
                {comp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {comp.details.map((detail) => (
                  <span
                    className="rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-espresso-800 ring-1 ring-gold-400/20 dark:text-gold-300"
                    key={detail}
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
