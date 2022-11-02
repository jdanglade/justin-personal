import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <header>
      <Navbar sticky="top" id="navbar" className="navbar" bg="dark" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Link to="/">Justin</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/photography">Photography</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
