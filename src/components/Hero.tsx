export const Hero = () => {
  return (
    <section
      className="pt-32 pb-20 px-4"
      id="about"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Software Engineer specializing in{' '}
          <span className="text-blue-600 dark:text-blue-400">
            Payment Solutions
          </span>{' '}
          and{' '}
          <span className="text-blue-600 dark:text-blue-400">
            Event-Driven Architecture
          </span>
          .
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Passionate about building scalable, resilient systems and optimizing
          payment workflows. Expertise in Avaya, Genesys, and complex API
          integrations.
        </p>
      </div>
    </section>
  );
};
