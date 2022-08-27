import { Form } from "react-bootstrap";

const ErrorSection = ({ error }) => {
    return <span className="text-danger">{error?.message}&nbsp;</span>;
  };
  
  const Field = ({ type, form, required, name, label, placeholder, options }) => {
    return (
      <Form.Group className="mb-3" controlId={name}>
        <Form.Label>{label}</Form.Label>
        {required ? "*" : ""}
        {type === "select" ? (
          <Form.Select
            placeholder={placeholder}
            {...form?.register(name, {
              required: { value: required, message: "This field is required" },
            })}
          >
            {options?.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </Form.Select>
        ) : (
          <Form.Control
            type={type ? type : ""}
            placeholder={placeholder}
            {...form?.register(name, {
              required: { value: required, message: "This field is required" },
            })}
          />
        )}
        <ErrorSection error={form?.formState.errors[name]} />
      </Form.Group>
    );
  };

  export default Field;