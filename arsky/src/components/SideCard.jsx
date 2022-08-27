import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
export const RelatedReports = ({ items }) => {
  return (
    <Card className="m-2 side">
      <Card.Header style={{ backgroundColor: "#37475a", color: "#fff" }}>
        <h5>Related Reports</h5>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {" "}
          {items.map((item) => (
            <a className="d-block" href={item.href}>
              {item.label}
            </a>
          ))}{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export const FollowUp = ({ FollowUpItems }) => {
  return (
    <Card className="m-2 side">
      <Card.Header style={{ backgroundColor: "#37475a", color: "#fff" }}>
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mr-auto">Due Follow-Up</h5>
          <span>
            <FontAwesomeIcon icon={faSquarePlus} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        {FollowUpItems.map((item) => (
          <>
            <Card.Text>
              <div className="d-block">
                <strong>{item.companyName}</strong> - {item.body}
              </div>
              <div style={{ color: "gray", fontSize: 12 }}>
                Due by: {item.dueBy}
              </div>
              <hr />
            </Card.Text>
          </>
        ))}
      </Card.Body>
    </Card>
  );
};
