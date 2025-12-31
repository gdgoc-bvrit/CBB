import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PillNavbar from './components/PillNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Scroll to top on every route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
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
    </div>
  );
}

export default App;
