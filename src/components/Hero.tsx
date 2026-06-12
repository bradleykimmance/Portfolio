export const Hero = () => {
  return (
    <section
      className="px-4 pb-20 pt-32"
      id="about"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-4xl font-bold tracking-tight text-espresso-950 md:text-5xl dark:text-cream-50">
          Bradley Kimmance
        </p>

        <p className="mb-8 text-base font-semibold uppercase tracking-[0.22em] text-gold-500 md:text-xl dark:text-gold-300">
          Backend-Focused Software Engineer
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-espresso-950 md:text-5xl lg:text-6xl dark:text-cream-50">
          Practical problem solving.
          <span className="block text-gold-500 dark:text-gold-300">
            Clean architecture.
          </span>
          Reliable integrations.
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-warm-gray-600 md:text-xl dark:text-cream-200/80">
          I build backend TypeScript and Node.js systems around complex
          third-party integrations — payment workflows, real-time telephony
          platforms, and event-driven services running on Kubernetes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="rounded-full bg-espresso-900 px-6 py-3 text-sm font-semibold text-cream-50 shadow-sm transition-colors hover:bg-espresso-800 dark:bg-gold-400 dark:text-espresso-950 dark:hover:bg-gold-300"
            href="#projects"
          >
            View Experience
          </a>
          <a
            className="rounded-full border border-gold-400/60 px-6 py-3 text-sm font-semibold text-espresso-900 transition-colors hover:bg-gold-400/10 dark:text-cream-50 dark:hover:bg-gold-400/10"
            href="https://uk.linkedin.com/in/bradleykimmance"
            rel="noopener noreferrer"
            target="_blank"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-center md:grid-cols-3 md:text-left">
          <div className="rounded-2xl border border-cream-200 bg-white/70 p-5 shadow-sm dark:border-espresso-800 dark:bg-espresso-900/70">
            <h2 className="font-semibold text-espresso-950 dark:text-cream-50">
              Payments
            </h2>
            <p className="mt-2 text-sm leading-6 text-warm-gray-600 dark:text-cream-200/70">
              PSP integrations, transaction workflows, tokenisation, settlement,
              and 3D Secure flows.
            </p>
          </div>

          <div className="rounded-2xl border border-cream-200 bg-white/70 p-5 shadow-sm dark:border-espresso-800 dark:bg-espresso-900/70">
            <h2 className="font-semibold text-espresso-950 dark:text-cream-50">
              Telephony
            </h2>
            <p className="mt-2 text-sm leading-6 text-warm-gray-600 dark:text-cream-200/70">
              Contact-centre and telephony integrations that surface real-time
              operational data in web applications.
            </p>
          </div>

          <div className="rounded-2xl border border-cream-200 bg-white/70 p-5 shadow-sm dark:border-espresso-800 dark:bg-espresso-900/70">
            <h2 className="font-semibold text-espresso-950 dark:text-cream-50">
              Backend Systems
            </h2>
            <p className="mt-2 text-sm leading-6 text-warm-gray-600 dark:text-cream-200/70">
              TypeScript, Node.js, AWS, Kubernetes, Redis, RabbitMQ, and
              maintainable service architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
