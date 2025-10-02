import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    // Ici on traiterait l'envoi (ex : appel API)
  };

  return (
    <>
  {/* Espace sous la navbar fixe */}
      <div style={{ marginTop: 56 }} />

      <Container className="text-center my-5">
        <h1 className="fw-bold">Contact</h1>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </p>
  <hr className="section-divider mx-auto" />
      </Container>

      <Container className="pb-5">
        <Card className="shadow-sm">
          <Card.Body>
            <Row className="gy-4">
              <Col md={6}>
                <h5 className="fw-bold mb-3">Formulaire de contact</h5>
                <hr className="section-divider full mt-0" />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-2">
                    <Form.Control required placeholder="Votre nom" />
                    <Form.Control.Feedback type="invalid">Veuillez indiquer votre nom.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Control required type="email" placeholder="Votre adresse email" />
                    <Form.Control.Feedback type="invalid">Veuillez fournir une adresse email valide.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Control required placeholder="Votre numéro de téléphone" />
                    <Form.Control.Feedback type="invalid">Veuillez indiquer votre numéro de téléphone.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-2">
                    <Form.Control required placeholder="Sujet" />
                    <Form.Control.Feedback type="invalid">Veuillez indiquer le sujet.</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={14} required placeholder="Votre message" style={{ minHeight: 220 }} />
                    <Form.Control.Feedback type="invalid">Veuillez écrire votre message.</Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    <Button type="submit">Envoyer</Button>
                  </div>
                </Form>
              </Col>

              <Col md={6}>
                <h5 className="fw-bold mb-3">Mes coordonnées</h5>
                <hr className="section-divider full mt-0" />
                <div className="small mb-3">
                  <div className="fw-semibold">John Doe</div>
                  <div><i className="bi bi-map me-2" />40 rue Laure Diebold</div>
                  <div><i className="bi bi-geo-alt me-2" />69009 Lyon, France</div>
                  <div><i className="bi bi-phone me-2" />10 20 30 40 50</div>
                  <div><i className="bi bi-envelope-at me-2" />john.doe@gmail.com</div>
                </div>

                {/* Carte Google intégrée (changer l'URL si nécessaire) */}
                <div className="ratio ratio-4x3">
                  <iframe
                    title="Adresse John Doe"
                    loading="lazy"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
