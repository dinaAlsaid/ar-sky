import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={9} sm={12} >
            <Row>{children}</Row>
          </Col>
          <Col md={3} sm={12}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
