import * as React from "react";
import { Button, Container } from "react-bootstrap";

export interface LoginButtonProps {
  updateLoginDisplay: Function;
}

export default function LoginButton(props: LoginButtonProps) {
  return (
    <Container>
      <Button
        onClick={() => {
          props.updateLoginDisplay();
        }}
      >
        Login
      </Button>
    </Container>
  );
}
