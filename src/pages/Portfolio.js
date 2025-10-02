import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const items = [
  {
    title: "Fresh Food",
    subtitle: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
    img: "/img/portfolio/fresh-food.jpg",
    url: "#"
  },
  {
    title: "Restaurant Akira",
    subtitle: "Site vitrine de restaurant",
    tech: "Site réalisé avec WordPress",
    img: "/img/portfolio/restaurant-akira.jpg",
    url: "#"
  },
  {
    title: "Espace bien-être",
    subtitle: "Site vitrine de produits/bien-être",
    tech: "Site réalisé avec LARAVEL",
    img: "/img/portfolio/espace-bien-etre.jpg",
    url: "#"
  },
  {
    title: "SEO",
    subtitle: "Amélioration du référencement d’un site e-commerce",
    tech: "Utilisation des outils SEO",
    img: "/img/portfolio/seo.jpg",
    url: "#"
  },
  {
    title: "Création d'une API",
    subtitle: "Création d’une API RESTful publique",
    tech: "PHP · SYMFONY",
    img: "/img/portfolio/api.jpg",
    url: "#"
  },
  {
    title: "Maquette d’un site web",
    subtitle: "Création d’un prototype de site",
    tech: "Réalisé avec FIGMA",
    img: "/img/portfolio/maquette.jpg",
    url: "#"
  }
];

export default function Portfolio() {
  return (
    <>
      {/* Héro bleu (même visuel que Services) */}
      <div
        style={{
          backgroundImage: "url(/img/hero-blue.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 250,
          marginTop: 56
        }}
      />

      <Container className="text-center my-5">
        <h1 className="fw-bold">Portfolio</h1>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
        <hr className="mx-auto" style={{ width: 80, borderTop: "3px solid #0d6efd" }} />
      </Container>

      <Container className="pb-5">
        <Row className="g-4">
          {items.map((p, i) => (
            <Col key={i} md={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <div style={{ height: 180, overflow: "hidden" }}>
                  <Card.Img
                    src={p.img}
                    alt={p.title}
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="mb-1">{p.title}</Card.Title>
                  <div className="text-muted small mb-2">{p.subtitle}</div>
                  <Button size="sm" variant="primary" href={p.url}>Voir le site</Button>
                </Card.Body>
                <Card.Footer className="text-center small text-muted">{p.tech}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
