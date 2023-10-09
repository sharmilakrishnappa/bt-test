import "./App.css";
import GuestForm from "./GuestForm";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Form App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="container-parent">
        <h1>Customer Form</h1>
        <GuestForm />
      </div>
    </>
  );
}

export default App;
