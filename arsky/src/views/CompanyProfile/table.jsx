import React,{ useState } from "react";
import { Table, Badge, Modal, Button } from "react-bootstrap";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFileLines,
  faFlag,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Field from "./FormField";
import { useForm } from "react-hook-form";


const badgeColor = (status) => {
  switch (status) {
    case "Issued":
      return "danger";
    case "Submitted":
      return "warning";
    case "Paid":
    default:
      return "success";
  }
};

const InvoiceCell = ({ number, contant, status, date, note }) => {
  return (
    <div>
      <div className="text-secondary">{date}</div>
      <div className="fw-bold">
        INV #{number}:{contant}{" "}
        <span className="text-secondary fw-lighter fs-6">-folio #1235</span>{" "}
        <Badge bg={badgeColor(status)}>{status}</Badge>
      </div>
      <div className="text-secondary fs-6">{note}</div>
    </div>
  );
};

const CompanyInvoiceTable = () => {
  const [isOpen, openModal] = useState(false);
  const [selectedInv, setSelectedInv] = useState(null);
  const RHForm = useForm();

  const selectMenu = {
    type: "select",
    required: true,
    name: "template",
    label: "template",
    options: [{ value: "option1" }, { value: "option2" }],
  };
  return (
    <>
      <Table hover responsive borderless>
        <thead>
          <tr>
            <th>Invoice</th>
            <th>Amount</th>
            <th>Remaining</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.Companies[0].invoices.map((invoice) => (
            <tr>
              <td>
                <InvoiceCell {...invoice} />
              </td>
              <td>
                {invoice.amount} <span>USD</span>
              </td>
              <td>
                {invoice.remaining} <span>USD</span>
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faDownload}
                  onClick={() => {
                    setSelectedInv(invoice);
                    openModal(true);
                  }}
                />
                <FontAwesomeIcon icon={faPaperPlane} />
                <FontAwesomeIcon icon={faFileLines} />
                <FontAwesomeIcon icon={faFlag} />
                <FontAwesomeIcon icon={faPaperclip} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        show={isOpen}
        onHide={() => {
          openModal(false);
        }}
        size="lg"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <span className="fs-3 fw-light">Download Invoice Copy</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border p-2 my-2">
            <InvoiceCell {...selectedInv} />
          </div>
          <Field form={RHForm} {...selectMenu }/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => {RHForm.handleSubmit()}}>
            Download
          </Button>
          <Button
            variant="light"
            onClick={() => {
              openModal(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompanyInvoiceTable;
