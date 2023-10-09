import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const GuestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    comments: "",
  });

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter you name"
          onChange={(e) => console.log(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Enter you company" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
        {/* <Form as="textarea" rows={3} /> */}
        <Button variant="primary" className="fullBtn">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default GuestForm;
