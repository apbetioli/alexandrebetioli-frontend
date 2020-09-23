import React from "react";
import MenuItem from "components/MenuItem";
import { Link, NavLink } from "react-router-dom";
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
  UncontrolledCollapse,
  UncontrolledDropdown
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
                <img alt="..." src={require("assets/img/logo192.png")} className="d-none d-lg-block" />
                <img alt="..." src={require("assets/img/logo.png")} className="d-lg-none" />
              </NavbarBrand>

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>

              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                        <img alt="..." src={require("assets/img/logo.png")} />
                      </NavbarBrand>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>

                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <MenuItem
                    id="cursostarter"
                    text="STARTER"
                    to="/starter"
                    icon="fa fa-user-graduate"
                  />
                  <MenuItem
                    id="cursolink"
                    text="3D COMMERCE"
                    to="/curso"
                    icon="fa fa-rocket"
                  />
                  <MenuItem
                    id="comunidadelink"
                    text="COMUNIDADE"
                    to="/comunidade"
                    icon="fa fa-users"
                  />
                  
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="fa fa-download mr-1" />
                      <span className="nav-link-inner--text">DOWNLOADS</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/planilha" tag={Link}>
                        <i className="fa fa-download" />
                        Planilha de precificação
                      </DropdownItem>
                      <DropdownItem
                        href="https://github.com/apbetioli/Marlin/tree/ender3"
                        target="_blank"
                      >
                        <i className="fa fa-download" />
                        Marlin 2.0 para Ender 3
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <MenuItem
                    id="facebooklink"
                    icon="fa fa-facebook-square"
                    text="Facebook"
                    textClass="d-lg-none"
                    href="https://www.facebook.com/alexandrebetioli3d"
                    tooltip="Curta nossa página no Facebook"
                  />

                  <MenuItem
                    id="instagramlink"
                    icon="fa fa-instagram"
                    text="Instagram"
                    textClass="d-lg-none"
                    href="https://www.instagram.com/alexandrebetioli3d"
                    tooltip="Siga-nos no Instagram"
                  />

                  <MenuItem
                    id="youtubelink"
                    icon="fa fa-youtube"
                    text="Youtube"
                    textClass="d-lg-none"
                    href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA"
                    tooltip="Inscreva-se no canal do YouTube"
                  />

                  <NavItem className="d-none">
                    <NavLink
                      className="nav-link-icon btn-primary btn-login d-none d-lg-block"
                      to="/login"
                      id="loginbtn"
                    >
                      <i className="fa fa-lock" />
                      <span className="nav-link-inner--text">Entrar</span>
                    </NavLink>

                    <NavLink
                      className="nav-link-icon d-lg-none"
                      to="/login"
                      id="loginlink"
                    >
                      <i className="fa fa-lock" />
                      <span className="nav-link-inner--text ml-2"> Entrar</span>
                    </NavLink>
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
