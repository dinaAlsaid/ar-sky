import React from "react";
import { Table } from "react-bootstrap";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faFlag,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const InvoiceCell = (props) => {
  const { accountNumber, companyName, categoryName, addresses, contacts } =
    props;
  return (
    <div>
      <div className="text-secondary fw-lighter">{categoryName}</div>
      <div className="fw-bold">
        A/R #{accountNumber}:{companyName}{" "}
        <span className="text-secondary fw-lighter fs-6">
          -{addresses[0].address}
        </span>{" "}
      </div>
      <div className="text-secondary fs-6 fw-lighter">
        Contact:{contacts[0].name}-{contacts[0].phoneNumber}&nbsp;+
        {contacts[0].email}
      </div>
      <Link
        to={"/company/profile"}
        state={{ company: { ...props } }}
        className="fw-lighter"
      >
        Edit
      </Link>
    </div>
  );
};

const Company = () => {
  return (
    <Table className="my-2" hover borderless responsive>
      <thead>
        <tr>
          <th>Company</th>
          <th>Credit Limit</th>
          <th>Balance</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.Companies.map((company) => (
          <tr>
            <td>
              <InvoiceCell {...company} />
            </td>
            <td>
              {company.creditLimit} <span>USD</span>
            </td>
            <td>
              {company.Balance} <span>USD</span>
            </td>
            <td>
              <FontAwesomeIcon icon={faFileLines} />
              <FontAwesomeIcon icon={faFlag} />
              <FontAwesomeIcon icon={faPaperclip} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Company;
