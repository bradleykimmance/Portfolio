import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', name: 'About' },
    { href: '#competencies', name: 'Competencies' },
    { href: '#architecture', name: 'Architecture' },
    { href: '#projects', name: 'Experience' },
  ];

  return (
    <nav className="fixed z-50 w-full border-b border-cream-200/80 bg-cream-50/90 shadow-sm backdrop-blur-md dark:border-espresso-800 dark:bg-espresso-950/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            className="flex items-center gap-3"
            href="#about"
          >
            <img
              alt=""
              className="h-9 w-9"
              src="/favicon.svg"
              style={{ colorScheme: 'only light' }}
            />
            <span className="text-lg font-bold text-espresso-900 dark:text-cream-50">
              Bradley Kimmance
            </span>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  className="rounded-md px-3 py-2 text-sm font-medium text-warm-gray-600 transition-colors hover:text-espresso-900 dark:text-cream-200/80 dark:hover:text-cream-50"
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </a>
              ))}
              <a
                className="ml-2 rounded-full bg-espresso-900 px-4 py-2 text-sm font-semibold text-cream-50 transition-colors hover:bg-espresso-800 dark:bg-gold-400 dark:text-espresso-950 dark:hover:bg-gold-300"
                href="https://uk.linkedin.com/in/bradleykimmance"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle navigation"
              className="inline-flex items-center justify-center rounded-md p-2 text-espresso-800 transition-colors hover:bg-cream-100 dark:text-cream-100 dark:hover:bg-espresso-800"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-cream-200 bg-cream-50 md:hidden dark:border-espresso-800 dark:bg-espresso-950">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <a
                className="block rounded-md px-3 py-2 text-base font-medium text-warm-gray-600 hover:text-espresso-900 dark:text-cream-200/80 dark:hover:text-cream-50"
                href={item.href}
                key={item.name}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              className="block rounded-md px-3 py-2 text-base font-semibold text-gold-500 dark:text-gold-300"
              href="https://uk.linkedin.com/in/bradleykimmance"
              onClick={() => setIsOpen(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
