import React, { useEffect } from "react";
import { Container, Accordion } from "react-bootstrap";

export default function MentionsLegales() {
  useEffect(() => {
    // inject a robots meta tag to discourage indexing of this page
    const m1 = document.createElement('meta');
    m1.name = 'robots';
    m1.content = 'noindex, nofollow';
    document.head.appendChild(m1);

    const m2 = document.createElement('meta');
    m2.name = 'googlebot';
    m2.content = 'noindex, nofollow';
    document.head.appendChild(m2);

    return () => {
      // cleanup on unmount
      if (m1.parentNode) m1.parentNode.removeChild(m1);
      if (m2.parentNode) m2.parentNode.removeChild(m2);
    };
  }, []);
  return (
    <>
      {/* Décalage sous la navbar fixe */}
      <div style={{ marginTop: 56 }} />

      <Container className="text-center my-5">
        <h1 className="fw-bold">Mentions légales</h1>
        <hr className="section-divider mx-auto" />
      </Container>

      <Container className="pb-5" style={{ maxWidth: 900 }}>
        <Accordion defaultActiveKey="0" flush>
          {/* Editeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <p className="fw-bold mb-1">John Doe</p>

              <p className="mb-1 d-flex align-items-center">
                <i className="bi bi-map me-2" />
                <span>40 rue Laure Diebold</span>
              </p>

              <p className="mb-1 d-flex align-items-center">
                <i className="bi bi-geo-alt me-2" />
                <span>69009 Lyon, France</span>
              </p>

              <p className="mb-1 d-flex align-items-center">
                <i className="bi bi-phone me-2" />
                <span>10 20 30 40 50</span>
              </p>

              <p className="mb-0 d-flex align-items-center">
                <i className="bi bi-envelope-at me-2" />
                <span>john.doe@gmail.com</span>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <p className="fw-bold mb-1">alwaysdata</p>
              <p className="mb-1">
                91 Rue du Faubourg Saint-Honoré, 75008 Paris
              </p>
              <p className="mb-0">
                <i className="bi bi-globe me-2"></i>
                <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">
                  www.alwaysdata.com
                </a>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h6 className="fw-bold">Crédits</h6>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noreferrer">
                  Centre Européen de formation
                </a>.
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et ont été
                obtenues sur le site{" "}
                <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
                  Pixabay
                </a>.
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  John doe Icons erstellt von Freepik - Flaticon
                </a>.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
