import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Medium from './components/Medium';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
