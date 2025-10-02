import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About"; // composant : À propos + compétences
import GitHubModal from "../components/GitHubModal";

export default function Home() {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [ghData, setGhData] = useState(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [ghError, setGhError] = useState(null);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    const controller = new AbortController();
    setGhLoading(true);
    fetch("https://api.github.com/users/github-johndoe", { signal: controller.signal })
      .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then((json) => { setGhData(json); setGhError(null); })
      .catch((e) => { if (e.name !== "AbortError") setGhError(e); })
      .finally(() => setGhLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <>
      <Hero onOpenGitHub={() => setShowGitHubModal(true)} />
      <About />

      {showGitHubModal && (
        <GitHubModal
          data={ghData}
          loading={ghLoading}
          error={ghError}
          onClose={() => setShowGitHubModal(false)}
          /* avatarSrc laissé indéfini pour l'instant (optionnel) */
        />
      )}
    </>
  );
}
