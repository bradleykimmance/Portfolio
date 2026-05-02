import { CreditCard, Server, Zap } from 'lucide-react';

const competencies = [
  {
    description:
      'Enterprise-grade telephony systems, IVR automation, and complex call routing logic.',
    details: ['IVR Development', 'SBC Configuration', 'SIP Protocols'],
    icon: (
      <Server
        color="#ef4444"
        size={32}
      />
    ),
    title: 'Avaya',
  },
  {
    description:
      'Cloud and on-premise contact center solutions, customer experience orchestration.',
    details: ['Genesys Cloud CX', 'Inbound/Outbound Logic', 'CRM Integration'],
    icon: (
      <Zap
        color="#f97316"
        size={32}
      />
    ),
    title: 'Genesys',
  },
  {
    description:
      'Deep-dives into Stripe, Adyen, and PayPal integrations with a focus on security and PCI compliance.',
    details: ['Tokenization', 'Webhooks', 'Fraud Detection'],
    icon: (
      <CreditCard
        color="#3b82f6"
        size={32}
      />
    ),
    title: 'Payment Gateway APIs',
  },
];

export const Competencies = () => {
  return (
    <section
      className="py-20 bg-slate-50 dark:bg-slate-800/50 px-4"
      id="competencies"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Core Competencies
        </h2>
        <div className="grid md:grid-row-3 lg:grid-cols-3 gap-8">
          {competencies.map((comp) => (
            <div
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-transform hover:-translate-y-1"
              key={comp.title}
            >
              <div className="mb-6">{comp.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {comp.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.details.map((detail) => (
                  <span
                    className="text-xs font-semibold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
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
