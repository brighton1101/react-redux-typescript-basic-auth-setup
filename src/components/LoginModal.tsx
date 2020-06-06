import * as React from "react";
import { Alert, Button, Container, Form, Modal } from "react-bootstrap";

export interface LoginModalProps {
  show: boolean;
  onHide: Function;
  performLogin: Function;
}

export default function LoginModal(props: LoginModalProps) {
  return (
    <Container>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={event => {
              event.preventDefault();
              console.log("here");
              props.performLogin(
                document.querySelector("#username").value,
                document.querySelector("#password").value
              );
            }}
          >
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
