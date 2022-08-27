import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Field from "./FormField"


const Checkbox = ({form,name,label}) => {
  return (
    <Form.Check
      inline
      label={label}
      name={name}
      type="checkbox"
      {...form?.register(name)}
    />
  );
};
const CompanyProfileForm = (props) => {
  const RHForm = useForm();

  const dataFieldsSet1 = [
    {
      required: true,
      name: "ARnumber",
      label: "A/R Number",
      placeholder: "The account number",
    },
    {
      required: true,
      name: "name",
      label: "Name",
      placeholder: "The company name",
    },
    {
      required: false,
      name: "nameAlt",
      label: "Name Alternate",
      placeholder: "The company name alternate",
    },
    {
      type: "select",
      required: true,
      name: "category",
      label: "category",
      placeholder: "the company category",
      options: [{ value: "option1" }, { value: "option2" }],
    },
    {
      type: "number",
      required: false,
      name: "VATnumber",
      label: "VAT Number",
      placeholder: "The company VAT number",
    },
    {
      type: "number",
      required: true,
      name: "Payment",
      label: "Payment Items (Days)",
      placeholder: "0",
    },
  ];
  const dataFieldsSet2 = [
    {
      type: "number",
      required: false,
      name: "creditLimit",
      label: "credit llimit (USD)",
      placeholder: "0.00",
    },
    {
      type: "number",
      required: false,
      name: "creditBalance",
      label: "credit Balance (USD)",
      placeholder: "0.00",
    },
    {
      type: "number",
      required: false,
      name: "groupBalance",
      label: "current group balance (USD)",
      placeholder: "0.00",
    },
    {
      type: "number",
      required: false,
      name: "days2pay",
      label: "Days to pay",
      placeholder: "0.00",
    },
    {
      type: "number",
      required: false,
      name: "categdays2pay",
      label: "category Days to pay",
      placeholder: "0.00",
    },
  ];
  const checkboxes =[
    {name:"active",label:"active"},
    {name:"isLocal",label:"local"},
    {name:"cashBasis",label:"cash Basis"},
    {name:"hidefromList",label:"hide from list"},
    {name:"hidefromAging",label:"hide from aging"},
    ]
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={RHForm.handleSubmit(onSubmit)}>
      <fieldset>
        <Row className="justify-content-end">
          <Col sm={1} md={2}>
            <ButtonGroup className="border">
              <Button variant="light" type="submit">
                <span>Edit</span>
              </Button>
              <Button
                variant="light"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col md={8} sm={12}>
            {dataFieldsSet1.map((item) => (
              <Field form={RHForm} {...item} />
            ))}
          </Col>
          <Col md={4} sm={12}>
            {dataFieldsSet2.map((item) => (
              <Field form={RHForm} {...item} />
            ))}
          </Col>
        </Row>
        <Row>{checkboxes.map((item) =><Col md="auto"> <Checkbox form={RHForm} {...item}/></Col>)}</Row>
      </fieldset>
    </Form>
  );
};

export default CompanyProfileForm;
