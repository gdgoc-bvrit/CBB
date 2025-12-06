import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PillNavbar from './components/PillNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Loader from './components/Loader_cbb'; // ✅ Adjust name if needed

// Scroll to top on every route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLoader(false), 700); // fade duration match
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <PillNavbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      {showLoader && (
        <div className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-700 ease-in-out ${loading ? 'opacity-100' : 'opacity-0'}`}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
