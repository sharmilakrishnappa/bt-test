import Button from "react-bootstrap/esm/Button";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";

function App() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Form App
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isLoggedIn ? (
              <Button
                variant="danger"
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  navigate("/");
                }}
              >
                Logout
              </Button>
            ) : (
              <Button variant="primary" onClick={() => navigate("/login")}>
                Admin Login
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin isLoggedIn={isLoggedIn} />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
}

export default App;
