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
                  <MenuItem
                    id="facebooklink"
                    icon="fa fa-facebook-square"
                    text="Facebook"
                    textClass="d-none"
                    href="https://www.facebook.com/alexandrebetioli3d"
                    tooltip="Curta nossa página no Facebook"
                  />

                  <MenuItem
                    id="instagramlink"
                    icon="fa fa-instagram"
                    text="Instagram"
                    textClass="d-none"
                    href="https://www.instagram.com/alexandrebetioli3d"
                    tooltip="Siga-nos no Instagram"
                  />

                  <MenuItem
                    id="youtubelink"
                    icon="fa fa-youtube"
                    text="Youtube"
                    textClass="d-none"
                    href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA"
                    tooltip="Inscreva-se no canal do YouTube"
                  />

                </Nav>
              </Container>
            </Navbar>
          )}
          <Container>
            <Row>
              <Col lg="12" className="centered">
                <a className="footer-link" href="mailto:contato@alexandrebetioli.com.br">Contato</a>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <div className="copyright">
                  © {new Date().getFullYear()} - Alexandre Betioli
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
