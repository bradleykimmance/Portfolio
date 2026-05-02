import { projects } from '../data/projects';

export const Projects = () => {
  if (!projects) {
    return null;
  }

  return (
    <section
      className="bg-cream-100/60 px-4 py-20 dark:bg-espresso-900/50"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-300">
            Selected Experience
          </p>
          <h2 className="text-3xl font-bold text-espresso-950 dark:text-cream-50">
            Integration-heavy engineering across payments, telephony, and
            backend systems.
          </h2>
          <p className="mt-4 text-warm-gray-600 dark:text-cream-200/70">
            Examples of the kinds of systems, integrations, and architectural
            problems I work with professionally.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              className="flex h-full flex-col rounded-2xl border border-cream-200 bg-white/80 p-8 text-center shadow-sm transition-transform hover:-translate-y-1 md:text-left dark:border-espresso-800 dark:bg-espresso-950/70"
              key={project.title}
            >
              <h3 className="mb-4 text-2xl font-bold text-espresso-950 dark:text-cream-50">
                {project.title}
              </h3>

              <p className="mb-6 flex-grow leading-7 text-warm-gray-600 dark:text-cream-200/75">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {project.techStack.map((tech) => (
                  <span
                    className="rounded-full bg-gold-400/15 px-3 py-1 text-sm font-medium text-espresso-800 ring-1 ring-gold-400/20 dark:text-gold-300"
                    key={tech}
                  >
                    {tech}
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
