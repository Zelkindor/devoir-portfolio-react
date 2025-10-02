import React from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5" id="about">
      <Card className="shadow p-4">
        <Row>
          {/* Colonne gauche - Image + texte */}
          <Col md={6} className="mb-4 mb-md-0">
            <h4 className="mb-2">À propos</h4>
            <div className="title-underline mb-3"></div>
            <img
              src="/images/john-doe-about.jpg"
              alt="John Doe"
              className="img-fluid rounded mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consequatur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consequatur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consequatur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat?
            </p>
          </Col>

          {/* Colonne droite - Compétences */}
          <Col md={6}>
            <h4 className="mb-2">Mes compétences</h4>
            <div className="title-underline mb-3"></div>

            <div className="mb-3">
              <strong>HTML5 90%</strong>
              <ProgressBar now={90} variant="danger" />
            </div>

            <div className="mb-3">
              <strong>CSS3 80%</strong>
              <ProgressBar now={80} variant="info" />
            </div>

            <div className="mb-3">
              <strong>JAVASCRIPT 70%</strong>
              <ProgressBar now={70} variant="warning" />
            </div>

            <div className="mb-3">
              <strong>PHP 60%</strong>
              <ProgressBar now={60} variant="success" />
            </div>

            <div className="mb-3">
              <strong>REACT 50%</strong>
              <ProgressBar now={50} variant="primary" />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default React.memo(About);
