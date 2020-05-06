import React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Col,
  Row,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledCollapse,
  UncontrolledTooltip,
} from "reactstrap";

class Header extends React.Component {

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-dark"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={require("assets/img/logo.png")} />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                      <img alt="..." src={require("assets/img/logo-black.png")} />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/starter"
                      id="starterlink"
                    >
                      <i className="fa fa-rocket" />
                      <span className="nav-link-inner--text ml-2">Starter</span>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="/starter"
                      id="starterlink"
                    >
                      <i className="fa fa-rocket" />
                      <span className="nav-link-inner--text ml-2">PRO</span>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/alexandrebetioli3d"
                      id="facebooklink"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="facebooklink">
                      Curta nossa página no Facebook
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/alexandrebetioli3d"
                      id="instagramlink"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="instagramlink">
                      Siga-nos no Instagram
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA"
                      id="youtubelink"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Youtube
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="youtubelink">
                      Inscreva-se no Youtube
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <Button
                      className="btn-primary btn-login"
                      href="/login"
                      id="loginbtn"
                    >
                      <i className="fa fa-lock" />
                      <span className="nav-link-inner--text">Entrar</span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="loginbtn">
                      Acesse a área de membros
                    </UncontrolledTooltip>
                  </NavItem>

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default Header;
