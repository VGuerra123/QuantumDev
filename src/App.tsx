import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebDevelopment from './pages/WebDevelopment';
import MobileApps from './pages/MobileApps';
import AIIntegration from './pages/AIIntegration';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App