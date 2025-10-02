import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <a href="https://github.com/github-johndoe/" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-icon me-3">
          <i className="bi bi-github" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="https://x.com/johndoe/" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-icon me-3">
          <i className="bi bi-twitter" style={{ fontSize: '20px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/john-doe-0238541b6?trk=people-guest_people_search-card/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-icon">
          <i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i>
        </a>
      </p>
          </Col>
          <Col md={4}>
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Me contacter</Link></li>
              <li><Link to="/legal">Mentions légales</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
              <li><Link to="/portfolio">Création d'une API</Link></li>
              <li><Link to="/portfolio">Maquette d'un site</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default React.memo(Footer);
