import React from "react";
import GoogleButton from "react-google-button";
import { Form, Button, Container, Grid, Divider } from "semantic-ui-react";
import { signInWithGoogle } from "../authentication/signInWithGoogle";

export function MyForm() {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={9}>
            <Form inverted>
              <Form.Group widths="equal" grouped>
                <Form.Input fluid icon="user" iconPosition="left" label="Email" type="text" placeholder="Insert Email..." required />
                <p />
                <Form.Input fluid icon="lock" iconPosition="left" label="Password" type="password" placeholder="Insert Password..." required />
              </Form.Group>
              <Button type="submit">Submit</Button>
              <Divider horizontal inverted>
                Or
              </Divider>
              <GoogleButton
                type="dark"
                onClick={() => {
                  signInWithGoogle();
                }}
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
