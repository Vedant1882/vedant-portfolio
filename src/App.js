import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import Skills from './components/Skills';
import NotFound from './components/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="bg-gray-950 text-white">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </main>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
