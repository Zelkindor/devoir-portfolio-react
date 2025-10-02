import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import GitHubModal from "./components/GitHubModal"; // fixed: component is under src/components

import "./App.css"; // +++ styles globaux (hero, etc.)

function App() {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  // ---------- Fetch GitHub une seule fois ----------
  const [ghData, setGhData] = useState(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [ghError, setGhError] = useState(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return; // évite double fetch en StrictMode
    fetchedRef.current = true;

    const controller = new AbortController();
    fetch("https://api.github.com/users/github-johndoe", { signal: controller.signal })
      .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then((json) => { setGhData(json); setGhError(null); })
      .catch((e) => { if (e.name !== "AbortError") setGhError(e); })
      .finally(() => setGhLoading(false));

    return () => controller.abort();
  }, []);
  // --------------------------------------------------

  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home onOpenGitHubModal={() => setShowGitHubModal(true)} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<MentionsLegales />} />
      </Routes>

      {/* Modal contrôlée par state, s'ouvre seulement sur clic */}
      {showGitHubModal && (
        <GitHubModal
          data={ghData}
          loading={ghLoading}
          error={ghError}
          onClose={() => setShowGitHubModal(false)}
        />
      )}

      <Footer />
    </Router>
  );
}

export default App;
