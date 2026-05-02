import { ArchitectureGallery } from './components/ArchitectureGallery';
import { Competencies } from './components/Competencies';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
// eslint-disable-next-line import/no-unassigned-import
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <Competencies />
        <ArchitectureGallery />
        <Projects />
      </main>
      <footer className="py-12 border-t dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Bradley Kimmance Portfolio. Built with
          React 19 & Vite.
        </p>
      </footer>
    </div>
  );
};

export default App;
