import React from "react";
import { List, Image, Container, Grid, Segment, Input, Button } from "semantic-ui-react";

export function ListChats({ user }) {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={16}>
            <Segment inverted>
              <Input inverted placeholder="Create chat..." />
              <Button color="teal">Create</Button>
              <List relaxed="very" size="large" divided inverted selection verticalAlign="middle">
                <List.Item>
                  <Image avatar src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                  <List.Content>
                    <List.Header>Snickerdoodle</List.Header>
                    An excellent companion
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
                  <List.Content>
                    <List.Header>Poodle</List.Header>A poodle, it's pretty basic
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src="https://react.semantic-ui.com/images/avatar/small/daniel.jpg" />
                  <List.Content>
                    <List.Header>Paulo</List.Header>
                    He's also a dog
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
