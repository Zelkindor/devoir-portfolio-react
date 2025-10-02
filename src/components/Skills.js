import React from "react";
import { Container, ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <Container className="my-5" id="skills">
      <h3>Mes compétences</h3>
      <p>Voici mes principales compétences :</p>
      <div className="mb-3">
        <span>HTML5</span>
        <ProgressBar now={90} label="90%" />
      </div>
      <div className="mb-3">
        <span>CSS3</span>
        <ProgressBar now={80} label="80%" />
      </div>
      <div className="mb-3">
        <span>JavaScript</span>
        <ProgressBar now={70} label="70%" />
      </div>
      <div className="mb-3">
        <span>PHP</span>
        <ProgressBar now={60} label="60%" />
      </div>
      <div className="mb-3">
        <span>React</span>
        <ProgressBar now={50} label="50%" />
      </div>
    </Container>
  );
}

export default Skills;