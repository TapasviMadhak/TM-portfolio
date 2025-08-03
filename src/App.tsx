import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Medium from './components/Medium';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
        <Header />
        <div className="pt-16">
          <div className="mx-auto max-w-7xl px-6">
            <main className="py-10">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Medium />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
