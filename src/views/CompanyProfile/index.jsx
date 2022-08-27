import React from "react";
import { Col, Tab, Tabs,  Row, Container } from "react-bootstrap";
import ContactCard from "../../components/ContactCard";
import CompanyProfileForm from "./form";
import CompanyInvoiceTable from "./table";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";

const CompanyProfile = () => {
  const location = useLocation();

  return (
    <Container>
      <Tabs defaultActiveKey="profile" className="mb-3 " justify>
        <Tab eventKey="profile" title="Profile" className="p-4">
          <CompanyProfileForm />
          <Row>
            <span className="link-primary">
              <FontAwesomeIcon icon={faPlus} />
              add contact
            </span>
          </Row>
          <Row>
            {location?.state?.company?.contacts.map((contact) => (
              <Col md={5} sm={12}>
                <ContactCard contact={contact} />
              </Col>
            ))}
          </Row>

          
        </Tab>
        <Tab eventKey="Invoice" title="Invoice" className="p-4">
          <CompanyInvoiceTable />
        </Tab>
        <Tab eventKey="Payments" title="Payments" disabled></Tab>
        <Tab eventKey="Activity Log" title="Activity Log" disabled></Tab>
        <Tab eventKey="Documents" title="Documents" disabled></Tab>
      </Tabs>
    </Container>
  );
};

export default CompanyProfile;
