import { useState, useCallback } from 'react';
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

export default function App() {
  const [bootDone, setBootDone] = useState(false);

  const handleBootComplete = useCallback(() => {
    setBootDone(true);
  }, []);

  return (
    <div className="min-h-screen bg-graphite">
      {!bootDone && <BootSequence onComplete={handleBootComplete} />}

      <main
        className={`transition-opacity duration-500 ${
          bootDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {bootDone && <Navbar />}
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Services />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
}
