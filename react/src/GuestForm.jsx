import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils";

const GuestForm = () => {
  const defaultState = {
    name: "",
    email: "",
    company: "",
    comments: "",
  };
  const [formData, setFormData] = useState(defaultState);
  const [apiErr, setApiErr] = useState(null);
  const [apiSucc, setApiSucc] = useState(null);

  const saveFeedback = () => {
    setApiErr(null);
    axios.post(`${API_URL}/feedbackSave`, formData).then((res) => {
      if (res.data.success) {
        setFormData(defaultState);
        setApiSucc("Saved Successfully");
      } else {
        console.log(res);
        setApiErr("Issues while saving");
      }
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter you name"
          onChange={(e) => {
            setFormData((old) => {
              return { ...old, name: e.target.value };
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          onChange={(e) => {
            setFormData((old) => {
              return { ...old, email: e.target.value };
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter you company"
          onChange={(e) => {
            setFormData((old) => {
              return { ...old, company: e.target.value };
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Comments</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => {
            setFormData((old) => {
              return { ...old, comments: e.target.value };
            });
          }}
        />
      </Form.Group>
      <h4 style={{ color: "green" }}>{apiSucc}</h4>
      <h4 style={{ color: "red" }}>{apiErr}</h4>
      <Form.Group className="mb-3">
        {/* <Form as="textarea" rows={3} /> */}
        <Button variant="primary" className="fullBtn" onClick={saveFeedback}>
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default GuestForm;
