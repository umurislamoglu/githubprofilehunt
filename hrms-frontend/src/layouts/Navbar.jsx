import React from "react";
import { Button, Menu, Container ,Dropdown} from "semantic-ui-react";

import { BrowserRouter as Router, Switch,  Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Navbar() {
  return (
    <Router>
      <Menu fixed="top" inverted size="mini">
        <Container>
          <Menu.Item>
            <img
              src="https://thumbs.dreamstime.com/z/job-icon-logo-design-element-can-be-used-as-as-complement-to-95717136.jpg"
              alt="logo"
            />
          </Menu.Item>
          <Menu.Item>
            <Link to="/AdvertList" name="advertSearch">
              İlan ara
            </Link>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Link to="/EmployerSignUp">
                <Button inverted color="blue">
                  İş veren
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/SeekerSignUp">
                <Button inverted color="yellow">
                  Arayan
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/Login">
                <Button inverted color="green">
                  Giriş
                </Button>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Dropdown item text="Profile">
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/ProfilePage">Hesabım</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>Çıkış Yap</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <Switch>
        
        <Dashboard />
      </Switch>
    </Router>
  );
}
