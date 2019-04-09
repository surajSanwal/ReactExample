import React, { Component } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" fixed="bottom" bg="dark" variant="dark">
          <Row className="justify-content-md-center footerContent">
            <Col sm={4} />
            <Col sm={4} >
              <Nav.Link className={"footerText"} href="/">&copy; Wraporians@2019</Nav.Link>
            </Col>
            <Col sm={4} />
          </Row>
        </Navbar>
      </Container>
    );
  }
}

export default Header;
