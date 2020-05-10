import React from "react";

import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledCollapse,
  UncontrolledDropdown
} from "reactstrap";

import MenuItem from "components/MenuItem";

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
                <img alt="..." src={require("assets/img/logo192.png")} />
              </NavbarBrand>

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>

              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/logo-black.png")}
                        />
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

                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <MenuItem id="starterlink" text="STARTER" href="/starter" />
                  <MenuItem id="cursolink" text="PRO" href="/curso" icon="fa fa-user-graduate" />
                  <MenuItem
                    href="https://discord.gg/EZJgchr"
                    icon="fa fa-users"
                    id="comunidadelink"
                    tooltip="Participe da comunidade"
                    text="COMUNIDADE"
                    target="_blank"
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
                    target="_blank"
                    tooltip="Curta nossa página no Facebook"
                  />

                  <MenuItem
                    id="instagramlink"
                    icon="fa fa-instagram"
                    text="Instagram"
                    textClass="d-lg-none"
                    href="https://www.instagram.com/alexandrebetioli3d"
                    target="_blank"
                    tooltip="Siga-nos no Instagram"
                  />

                  <MenuItem
                    id="youtubelink"
                    icon="fa fa-youtube"
                    text="Youtube"
                    textClass="d-lg-none"
                    href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA"
                    target="_blank"
                    tooltip="Inscreva-se no canal do YouTube"
                  />

                  <MenuItem
                    id="telegramlink"
                    icon="fa fa-telegram-plane"
                    text="Telegram"
                    textClass="d-lg-none"
                    href="https://t.me/alexandrebetioli3d"
                    target="_blank"
                    tooltip="Entre no canal do Telegram"
                  />

                  <NavItem className="d-none">
                    <Button
                      className="btn-primary btn-login d-none d-lg-block"
                      href="/login"
                      id="loginbtn"
                    >
                      <i className="fa fa-lock" />
                      <span className="nav-link-inner--text">Entrar</span>
                    </Button>

                    <NavLink
                      className="nav-link-icon d-lg-none"
                      href="/login"
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
