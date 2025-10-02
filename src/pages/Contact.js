import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      {/* Petit espace sous la navbar fixe */}
      <div style={{ marginTop: 56 }} />

      <Container className="text-center my-5">
        <h1 className="fw-bold">Contact</h1>
        <p className="text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <hr className="mx-auto" style={{ width: 80, borderTop: "3px solid #0d6efd" }} />
      </Container>

      <Container className="pb-5">
        <Card className="shadow-sm">
          <Card.Body>
            <Row className="gy-4">
              <Col md={6}>
                <h5 className="fw-bold mb-3">Formulaire de contact</h5>
                <hr className="mt-0" style={{ borderTop: "3px solid #0d6efd" }} />
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Control className="mb-2" placeholder="Votre nom" />
                  <Form.Control className="mb-2" type="email" placeholder="Votre adresse email" />
                  <Form.Control className="mb-2" placeholder="Votre numéro de téléphone" />
                  <Form.Control className="mb-2" placeholder="Sujet" />
                  <Form.Control as="textarea" rows={7} className="mb-3" placeholder="Votre message" />
                  <Button type="submit">Envoyer</Button>
                </Form>
              </Col>

              <Col md={6}>
                <h5 className="fw-bold mb-3">Mes coordonnées</h5>
                <hr className="mt-0" style={{ borderTop: "3px solid #0d6efd" }} />
                <div className="small mb-3">
                  <div className="fw-semibold">John Doe</div>
                  <div><i className="bi bi-geo-alt me-2" />40 rue Laure Diebold</div>
                  <div><i className="bi bi-geo me-2" />69009 Lyon, France</div>
                  <div><i className="bi bi-telephone me-2" />10 20 30 40 50</div>
                  <div><i className="bi bi-envelope me-2" />john.doe@gmail.com</div>
                </div>

                {/* Google Map intégrée (remplacez l’URL si besoin) */}
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
