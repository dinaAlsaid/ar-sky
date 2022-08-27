import React from "react";
import { Col } from "react-bootstrap";
import ActionCard from "../components/ActionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faReceipt,
  faFileInvoiceDollar,
  faFileContract,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  const actions = [
    {
      title: "company Profiles",
      subtitle: "The A/R accounts",
      icon: () => <FontAwesomeIcon icon={faBagShopping} />,
      link: "/Company",
    },
    {
      title: "Invoices",
      subtitle: "Invoices with standing balance",
      icon: () => <FontAwesomeIcon icon={faReceipt} />,
    },
    {
      title: "Payments",
      subtitle: "Recived Payments & statements",
      icon: () => <FontAwesomeIcon icon={faFileInvoiceDollar} />,
    },
    {
      title: "Aging",
      subtitle: "Invoice Aging",
      icon: () => <FontAwesomeIcon icon={faFileContract} />,
    },
    {
      title: "Reports",
      subtitle: "Current & History reports",
      icon: () => <FontAwesomeIcon icon={faChartSimple} />,
    },
  ];
  return actions.map((item) => (
    <Col md={6} sm={12}>
      <ActionCard {...item} />
    </Col>
  ));
};

export default LandingPage;
