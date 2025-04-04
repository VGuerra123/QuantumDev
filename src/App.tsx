import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebDevelopment from './pages/WebDevelopment';
import MobileApps from './pages/MobileApps';
import AIIntegration from './pages/AIIntegration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <section id="hero">
                <Hero />
              </section>
              <Services />
              <section id="methodology">
                <Methodology />
              </section>
              <Projects />
              <section id="contact">
                <Contact />
              </section>
            </main>
          } />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;