import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import About from "../components/About"; // <- ton composant fusionné (À propos + compétences)

export default function Home({ onOpenGitHubModal }) {
  return (
    <>
      <Hero onOpenGitHub={onOpenGitHubModal} />

      {/* bloc central qui chevauche légèrement le hero */}
      <Container className="section-overlap">
        <div className="section-card p-4 p-md-5">
          <About />
        </div>
      </Container>
    </>
  );
}
