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
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";

class MenuItem extends React.Component {
  render() {
    return (
      <NavItem>
        <NavLink
          className="nav-link-icon"
          href={this.props.href}
          id={this.props.id}
        >
          <i className="fa fa-users d-lg-none" />
          <span className="nav-link-inner--text ml-2">{this.props.text}</span>
        </NavLink>
        {this.props.tooltip && (
          <UncontrolledTooltip delay={0} target={this.props.id}>
            {this.props.tooltip}
          </UncontrolledTooltip>
        )}
      </NavItem>
    );
  }
}

MenuItem.defaultProps = {
  href: "#",
  target: "",
  tooltip: "",
};

export default MenuItem;
