import { projects } from '../data/projects';

export const Projects = () => {
  if (!projects) {
    return null;
  }

  return (
    <section
      className="py-20 bg-slate-50 dark:bg-slate-800/50 px-4"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-100 dark:border-slate-800 flex flex-col h-full shadow-sm"
              key={project.title}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    href={project.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Source
                  </a>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
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
