import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [loginErr, setLoginErr] = useState(null);

  const navigate = useNavigate();

  const LoginUser = () => {
    setLoginErr(null);
    // CALL API
    axios
      .post(`${API_URL}/adminLogin`, {
        email,
        pass,
      })
      .then((res) => {
        localStorage.setItem("isLoggedIn", res.data.success);
        if (res.data.success) {
          navigate("/admin");
        } else {
          setLoginErr("Please check username or pass");
        }
      });
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Form className="mt-5" style={{ width: "50%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <h4 style={{ color: "red" }}>{loginErr}</h4>
        <Button variant="primary" onClick={LoginUser}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
