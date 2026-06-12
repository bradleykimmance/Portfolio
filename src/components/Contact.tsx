import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const contactLinks = [
  {
    description: 'The fastest way to reach me for roles or collaboration.',
    external: false,
    href: 'mailto:bradleykimmance@hotmail.co.uk',
    Icon: Mail,
    label: 'bradleykimmance@hotmail.co.uk',
    title: 'Email',
  },
  {
    description: 'Connect for roles, referrals, or a longer conversation.',
    external: true,
    href: 'https://uk.linkedin.com/in/bradleykimmance',
    Icon: FaLinkedin,
    label: 'in/bradleykimmance',
    title: 'LinkedIn',
  },
  {
    description: 'Selected public work, experiments, and configuration.',
    external: true,
    href: 'https://github.com/bradleykimmance',
    Icon: FaGithub,
    label: 'GitHub Profile',
    title: 'GitHub',
  },
];

export const Contact = () => {
  return (
    <section
      className="px-4 py-20"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold-500 dark:text-gold-300">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-espresso-950 dark:text-cream-50">
            Open to backend and full-stack engineering roles.
          </h2>
          <p className="mt-4 text-warm-gray-600 dark:text-cream-200/70">
            Hiring, recruiting, or just want to talk integrations and
            architecture? The quickest paths are below.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              className="rounded-full bg-espresso-900 px-6 py-3 text-sm font-semibold text-cream-50 shadow-sm transition-colors hover:bg-espresso-800 dark:bg-gold-400 dark:text-espresso-950 dark:hover:bg-gold-300"
              href="mailto:bradleykimmance@hotmail.co.uk"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {contactLinks.map(({ external, Icon, ...link }) => (
            <a
              className="group rounded-2xl border border-cream-200 bg-white/80 p-6 text-center shadow-sm transition-transform hover:-translate-y-1 md:text-left dark:border-espresso-800 dark:bg-espresso-900/70"
              href={link.href}
              key={link.title}
              rel={external ? 'noopener noreferrer' : undefined}
              target={external ? '_blank' : undefined}
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/15 text-gold-500 ring-1 ring-gold-400/20 transition-colors group-hover:bg-gold-400/25 md:mx-0 dark:text-gold-300">
                <Icon
                  color="currentColor"
                  size={24}
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-espresso-950 dark:text-cream-50">
                {link.title}
              </h3>
              <p className="mb-3 text-sm leading-6 text-warm-gray-600 dark:text-cream-200/75">
                {link.description}
              </p>
              <p className="text-sm font-semibold text-gold-500 dark:text-gold-300">
                {link.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
