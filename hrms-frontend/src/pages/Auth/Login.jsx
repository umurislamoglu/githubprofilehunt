import React from "react";
import { Button, Form } from "semantic-ui-react";
export default function Login() {
  return (
    <div>
      <Form>
      <Form.Field  >
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field  >
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        
        <Button type="login" color="green">Log In</Button>
      </Form>
    </div>
  );
}
