// App.jsx
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTop from './components/ScrollToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <ScrollIndicator />

      {/* Dark Mode Toggle Top Right */}
      <div className="flex justify-end px-4 pt-2 max-w-7xl mx-auto">
      </div>

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="rooms">
        <Rooms />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
