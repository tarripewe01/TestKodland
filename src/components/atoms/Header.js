import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./Header.css";

function Header() {
  return (
    <Navbar expand="md" style={{ backgroundColor: "#ffbf69" }}>
      <Container className="container">
        <Navbar.Brand href="#home" className="navbarBrand">
          StartPlay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navLink">
            <Nav.Link className="navLink-link" href="#home">Home</Nav.Link>
            <Nav.Link className="navLink-link" href="#link">Product</Nav.Link>
            <Nav.Link className="navLink-link" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
