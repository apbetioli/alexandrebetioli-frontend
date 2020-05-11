import React from "react";
import { Col, Container, Row } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col lg="12">
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
