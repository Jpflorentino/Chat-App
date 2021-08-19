import React from "react";
import { Menu, Segment, Header } from "semantic-ui-react";
import logo from "../../images/logo192.png";
import { removeUser } from "../db/dbOperations";
import { handlerLogout } from "../handlerCollection/handlers";

export function Navbar({ user }) {
  if (user) {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Segment inverted compact>
            <Header as="h1" image={logo} size="small" content="Chat-App" />
          </Segment>
          <Menu.Item
            position="right"
            name="logout"
            onClick={() => {
              removeUser(user);
              handlerLogout();
            }}>
            Logout
          </Menu.Item>
        </Menu>
      </Segment>
    );
  } else {
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Segment inverted compact>
            <Header as="h1" image={logo} size="small" content="Chat-App" />
          </Segment>
        </Menu>
      </Segment>
    );
  }
}
