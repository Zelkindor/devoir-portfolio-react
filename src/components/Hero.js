import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Hero({ onOpenGitHub }) {
  const bgUrl = process.env.PUBLIC_URL + '/images/hero-bg.jpg';
  const style = { backgroundImage: `url(${bgUrl})` };

  return (
    <header className="hero-home" style={style}>
      <div className="hero-overlay" />
      <Container className="hero-content">
        <h1 className="hero-title">Bonjour, je suis John Doe</h1>
        <h2 className="hero-subtitle">Développeur web full-stack</h2>

        <Button size="lg" variant="primary" onClick={() => onOpenGitHub && onOpenGitHub()}>
          En savoir plus
        </Button>
      </Container>
    </header>
  );
}
