import { Suspense, lazy, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PillNavbar from './components/PillNavbar';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';

// Route-level code splitting: each page (and the heavy libs it pulls in —
// WebGL gallery, GSAP) downloads only when the user visits it.
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));

// Jump (never smooth-scroll) to the top on every route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center" role="status" aria-label="Loading">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#4cdef5]" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <PillNavbar />
      <main className="min-h-screen">
        <ErrorBoundary>
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;
