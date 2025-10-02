import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; // styles globaux (hero, etc.)

// Pages (lazy-loaded)
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));

function App() {
  return (
    <Router>
      <MyNavbar />
      <Suspense fallback={<div className="text-center py-5">Chargement…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<MentionsLegales />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
