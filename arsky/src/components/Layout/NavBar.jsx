import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons";
import data from "../../data.json";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">{data.nav.title}</Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="" className="text-light font-weight-light">
            <FontAwesomeIcon icon={faBuilding} />
            <span>{data.nav.company}</span>
          </Nav.Link>
          <Nav.Link href="" className="text-light font-weight-light">
            <FontAwesomeIcon icon={faUser} className="blue-icon" />
            <span>{data.nav.user}</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
