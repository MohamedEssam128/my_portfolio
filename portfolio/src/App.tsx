// src/App.tsx
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Workflow } from './sections/Workflow';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Workflow />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
