import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Preloader Component
import { AnimatePresence } from "framer-motion";
import Home from './pages/home/Home';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>
        {/* {loading && <PreLoaderPage />} */}
        {/* Routes */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/techstack" element={<TechStackPage />} />
          <Route path="/bookshelf" element={<BookShelfPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
