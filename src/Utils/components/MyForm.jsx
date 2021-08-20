import React from "react";
import GoogleButton from "react-google-button";
import { Form, Button, Container, Grid, Divider } from "semantic-ui-react";
import { signInWithGoogle } from "../handlerCollection/handlers";

export function MyForm({ email, setEmail, password, setPassword, handlerLogin, handlerSignUp, hasAccount, setHasAccount }) {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={9}>
            <Form inverted>
              <Form.Group widths="equal" grouped>
                <Form.Input fluid icon="user" iconPosition="left" label="Email" type="email" placeholder="Insert Email..." required value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  placeholder="Insert Password..."
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {hasAccount ? (
                <>
                  <Button
                    onClick={() => {
                      handlerLogin(email, password);
                    }}>
                    Sign in
                  </Button>
                  <p>
                    Don´t have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                  </p>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      handlerSignUp(email, password);
                    }}>
                    Sign up
                  </Button>
                  <p>
                    Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                  </p>
                </>
              )}
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
