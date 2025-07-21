import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import About from './components/About';
import Apps from './components/Apps';
import Blog from './components/Blog';
import HumanTouch from './components/HumanTouch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingFlowers from './components/FloatingFlowers';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>
            Bazhena Dementyeva (Maria Demy) - Senior Software Engineer |
            Backend, Cloud & AI Solutions
          </title>
          <meta
            name="description"
            content="Bazhena Dementyeva (Maria Dementyeva, Maria Demy, bashdemy) - Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions. Expert in Java, Python, React with focus on privacy-first engineering and scalable systems."
          />
          <meta
            name="keywords"
            content="Bazhena Dementyeva, Maria Dementyeva, Maria Demy, bashdemy, software engineer, backend developer, cloud architect, AI engineer, Java developer, Python developer, React developer, privacy-first engineering, scalable systems"
          />

          <meta
            property="og:title"
            content="Bazhena Dementyeva (Maria Demy) - Senior Software Engineer | Backend, Cloud & AI Solutions"
          />
          <meta
            property="og:description"
            content="Bazhena Dementyeva (Maria Dementyeva, Maria Demy, bashdemy) - Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions. Expert in Java, Python, React with focus on privacy-first engineering and scalable systems."
          />
          <meta property="og:url" content="https://maria-demy.github.io/" />
          <meta
            property="og:image"
            content="https://maria-demy.github.io/profile-picture.JPG"
          />

          <meta
            name="twitter:title"
            content="Bazhena Dementyeva (Maria Demy) - Senior Software Engineer | Backend, Cloud & AI Solutions"
          />
          <meta
            name="twitter:description"
            content="Bazhena Dementyeva (Maria Dementyeva, Maria Demy, bashdemy) - Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions. Expert in Java, Python, React with focus on privacy-first engineering and scalable systems."
          />
          <meta
            name="twitter:image"
            content="https://maria-demy.github.io/profile-picture.JPG"
          />

          <link rel="canonical" href="https://maria-demy.github.io/" />
        </Helmet>

        <FloatingFlowers />
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main className="pt-16">
          <About id="about" />
          <Apps id="apps" />
          <Blog id="blog" />
          <HumanTouch id="human-touch" />
          <Contact id="contact" />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
