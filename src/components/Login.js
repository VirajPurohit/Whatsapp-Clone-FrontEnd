import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";
import DemoVid from "../assets/Whatsapp-Clone-Demo.mp4";
import DemoVid2 from "../assets/Whatsapp-Clone-Demo-2.ogv";
import DemoVid3 from "../assets/Whatsapp-Clone-Demo-3.webm";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  }

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <h3> How to use application</h3>
      <video
        autoPlay
        controls
        width={600}
        height={300}
        style={{ marginTop: "5px" }}
      >
        <source src={DemoVid} />
        <source src={DemoVid2} />
        <source src={DemoVid3} />
      </video>

      <Form className="w-100 mt-5" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your Id: </Form.Label>
          <Form.Control type="text" ref={idRef} required />
          <Button type="submit" className="me-2">
            Login
          </Button>
          <Button variant="secondary" onClick={createNewId}>
            Create new ID
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
/**/
