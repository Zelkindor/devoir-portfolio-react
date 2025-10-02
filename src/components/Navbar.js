import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/legal">MENTIONS LÉGALES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
