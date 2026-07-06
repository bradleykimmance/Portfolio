import { projects } from '../data/projects';
import { Briefcase } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

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
            Systems I have designed, built, and run in production — most
            described at a high level out of respect for employer and client
            confidentiality, plus an open-source project you can try live.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              className="flex h-full flex-col rounded-2xl border border-cream-200 bg-white/80 p-8 text-center shadow-sm transition-transform hover:-translate-y-1 md:text-left dark:border-espresso-800 dark:bg-espresso-950/70"
              key={project.title}
            >
              {project.kind === 'open-source' ? (
                <p className="mb-3 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 md:justify-start dark:text-gold-300">
                  <FaGithub
                    aria-hidden
                    size={14}
                  />
                  Open source
                </p>
              ) : (
                <p className="mb-3 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-warm-gray-500 md:justify-start dark:text-cream-200/50">
                  <Briefcase
                    aria-hidden
                    size={14}
                  />
                  Commercial work
                </p>
              )}

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

              {project.links ? (
                <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    className="rounded-full bg-gold-400 px-4 py-1.5 text-sm font-semibold text-espresso-950 transition-colors hover:bg-gold-300"
                    href={project.links.live}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live demo
                  </a>
                  <a
                    className="rounded-full px-4 py-1.5 text-sm font-semibold text-espresso-800 ring-1 ring-gold-400/40 transition-colors hover:bg-gold-400/10 dark:text-gold-300"
                    href={project.links.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source on GitHub
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
