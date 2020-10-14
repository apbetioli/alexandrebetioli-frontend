import MenuItem from "components/MenuItem";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Nav, Navbar, NavbarBrand, Row } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          {!this.props.hideNav && (
            <Navbar
              className="navbar-main navbar-dark"
              expand="lg"
              id="navbar-main"
            >
              <Container>
                <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                  <img alt="..." src={require("assets/img/logo.png")} />
                </NavbarBrand>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <a
                    className="nav-link-icon"
                    href="https://www.facebook.com/alexandrebetioli3d"
                    id="facebooklink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="" src={require("assets/img/facebook.png")} />
                  </a>

                  <a
                    className="nav-link-icon"
                    href="https://www.instagram.com/alexandrebetioli3d"
                    id="instagramlink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="" src={require("assets/img/instagram.png")} />
                  </a>

                  <a
                    className="nav-link-icon"
                    href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA"
                    id="youtubelink"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="" src={require("assets/img/youtube.png")} />
                  </a>
                </Nav>
              </Container>
            </Navbar>
          )}
          <Container>
            <Row>
              <Col lg="12" className="centered">
                <a
                  className="footer-link"
                  href="mailto:contato@alexandrebetioli.com.br"
                >
                  Contato
                </a>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="copyright">
                  © {new Date().getFullYear()} - Alexandre Betioli | Todos os direitos reservados
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
