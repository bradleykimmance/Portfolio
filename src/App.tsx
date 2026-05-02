import { ArchitectureGallery } from './components/ArchitectureGallery';
import { Competencies } from './components/Competencies';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
// eslint-disable-next-line import/no-unassigned-import
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-cream-50 text-espresso-900 transition-colors dark:bg-espresso-950 dark:text-cream-50">
      <Navbar />
      <main>
        <Hero />
        <Competencies />
        <ArchitectureGallery />
        <Projects />
      </main>
      <footer className="border-t border-cream-200 px-4 py-12 text-center text-sm text-warm-gray-500 dark:border-espresso-800 dark:text-cream-200/70">
        <p>
          © {new Date().getFullYear()} Bradley Kimmance. Built with React,
          TypeScript & Vite.
        </p>
      </footer>
    </div>
  );
};

export default App;
