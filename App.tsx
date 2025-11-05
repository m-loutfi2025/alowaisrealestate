
import React, { useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import About from './About';
import Team from './Team';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';
import WelcomePopup from './WelcomePopup';
import BackToTopButton from './BackToTopButton';
import AIChatWidget from './AIChatWidget';

const App: React.FC = () => {

  useEffect(() => {
    const animateItems = document.querySelectorAll('.animate-item');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      animateItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);


  return (
    <LanguageProvider>
      <div className="bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Team />
          <News />
          <Contact />
        </main>
        <Footer />
        <WelcomePopup />
        <BackToTopButton />
        <AIChatWidget />
      </div>
    </LanguageProvider>
  );
};

export default App;