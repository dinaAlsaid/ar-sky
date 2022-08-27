import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({ contact }) => {
  return (
    <Card>
      <Card.Header>
        <h5>{contact.name}</h5>
        <h6>{contact.role}</h6>
      </Card.Header>
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <Card.Text className="mx-2">{contact.email}</Card.Text>
        </div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faPhone} />
          <Card.Text className="mx-2">{contact.phoneNumber}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
