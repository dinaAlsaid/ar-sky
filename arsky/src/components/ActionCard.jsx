import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
const ActionCard = ({ title, subtitle, icon, link }) => {
  const navigate = useNavigate();
  const navToPage = () => {
    navigate(link ? link : "/");
  };
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Body onClick={navToPage}>
        <Container>
          <Row>
            <Col md={2}>
              <div className="fs-2 text-info">{icon()}</div>
            </Col>
            <Col md="auto">
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {subtitle}
              </Card.Subtitle>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default ActionCard;
