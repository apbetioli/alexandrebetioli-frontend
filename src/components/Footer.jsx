import React from "react";

import { Container, Col, Row, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="6">
                <NavLink href="/">
                  <img alt="..." src={require("assets/img/logo.png")} />
                </NavLink>
              </Col>
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()} - Todos os direitos reservados
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
