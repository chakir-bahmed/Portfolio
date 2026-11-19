import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { GradientBlobs, GridBackground, NoiseOverlay } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress, BackToTop } from '@/components/ScrollUI';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Certifications } from '@/components/sections/Certifications';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <GradientBlobs />
      <GridBackground />
      <NoiseOverlay />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
