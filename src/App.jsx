import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollTop from './utils/ScrollTop';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { AppContext } from './contexts/AppContext';  // <-- aqui o segredo

function App() {
  const appContext = useContext(AppContext);

  if (appContext.loading) {
    return <LoadingSpinner/>
  }

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
