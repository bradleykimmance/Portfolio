import { Briefcase, GraduationCap, Rocket, TrendingUp } from 'lucide-react';

const timeline = [
  {
    description:
      'Promoted within eight months. Owning integration projects end-to-end: payment-processing microservices, real-time telephony services on Kubernetes, and the compliance-critical Selective Call Recording Worker. Improved CI/CD workflows and brought automated testing with Vitest to legacy templates.',
    Icon: TrendingUp,
    organisation: 'UK secure-payments & contact-centre technology provider',
    period: 'Aug 2023 — Present',
    title: 'Software Engineer',
  },
  {
    description:
      'Built secure payment pages and web proxies for major clients in React, updated internal templates to secure coding standards, and configured Kamailio dial-plans routing calls between secure voice appliances and contact-centre agents.',
    Icon: Briefcase,
    organisation: 'UK secure-payments & contact-centre technology provider',
    period: 'Jan 2023 — Aug 2023',
    title: 'Junior Software Engineer',
  },
  {
    description:
      'Founded and ran a digital video-game sales business. Designed and built the stock management system integrating multiple REST APIs with Node.js, Express, and MySQL — and learned how software decisions translate into commercial outcomes.',
    Icon: Rocket,
    organisation: 'Litestocks LTD',
    period: '2019 — 2023',
    title: 'Company Director',
  },
  {
    description:
      'Master of Engineering in Computer Science, graduating with First Class Honours.',
    Icon: GraduationCap,
    organisation: 'University of Hertfordshire',
    period: '2014 — 2018',
    title: 'MEng (Hons) Computer Science — First Class',
  },
];

export const Timeline = () => {
  return (
    <section
      className="px-4 py-20"
      id="career"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-300">
            Career
          </p>
          <h2 className="text-3xl font-bold text-espresso-950 dark:text-cream-50">
            From founding a business to engineering production systems.
          </h2>
          <p className="mt-4 text-warm-gray-600 dark:text-cream-200/70">
            Three years of commercial software engineering, four years running
            my own company before that, and a first-class engineering degree
            underneath it all.
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {timeline.map(({ Icon, ...entry }) => (
            <div
              className="rounded-2xl border border-cream-200 bg-white/80 p-6 text-center shadow-sm md:text-left dark:border-espresso-800 dark:bg-espresso-900/70"
              key={`${entry.title}-${entry.period}`}
            >
              <div className="mb-4 flex flex-col items-center gap-3 md:flex-row md:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-500 ring-1 ring-gold-400/20 dark:text-gold-300">
                  <Icon
                    color="currentColor"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-espresso-950 dark:text-cream-50">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-warm-gray-600 dark:text-cream-200/70">
                    {entry.organisation}
                  </p>
                </div>

                <p className="text-sm font-semibold text-gold-500 md:ml-auto dark:text-gold-300">
                  {entry.period}
                </p>
              </div>

              <p className="text-sm leading-6 text-warm-gray-600 dark:text-cream-200/75">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
