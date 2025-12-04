
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import TechnicalArsenal from './components/TechnicalArsenal';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Shell */}
      <div className="relative flex-1 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95">
        {/* Glow / Grid Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-x-0 top-[-10%] mx-auto h-[24rem] max-w-4xl rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.1),_transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        </div>

        <Navbar />
        <Hero />
      </div>

      {/* Content Sections */}
      <Projects />
      <TechnicalArsenal />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
