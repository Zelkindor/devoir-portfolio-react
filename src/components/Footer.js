import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold<br/>69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
      <p>
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-icon me-3">
          <i className="bi bi-github" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-icon me-3">
          <i className="bi bi-twitter" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-icon">
          <i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i>
        </a>
      </p>
          </Col>
          <Col md={4}>
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
