import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from "react-bootstrap";
import MyNavbar from "../components/Navbar";

function Services() {
  return (
    <>
      <MyNavbar />

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: "url(/images/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          marginTop: "56px"
        }}
      ></div>

      {/* Title Section */}
      <Container className="text-center my-5">
        <h1 className="fw-bold">Mon offre de services</h1>
        <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
        <hr className="mx-auto" style={{ width: "60px", borderTop: "3px solid #0d6efd" }} />
      </Container>

      {/* Services Section */}
      <Container className="pb-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-brush"></i>
                </div>
                <Card.Title className="fw-bold">UX Design</Card.Title>
                <Card.Text className="text-muted small">
                  L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-code-slash"></i>
                </div>
                <Card.Title className="fw-bold">Développement web</Card.Title>
                <Card.Text className="text-muted small">
                  Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-search"></i>
                </div>
                <Card.Title className="fw-bold">Référencement</Card.Title>
                <Card.Text className="text-muted small">
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Services;
