import React from "react";

import { NavItem, NavLink, UncontrolledTooltip } from "reactstrap";

class MenuItem extends React.Component {
  render() {
    return (
      <NavItem>
        <NavLink
          className="nav-link-icon"
          href={this.props.href}
          target={this.props.target}
          id={this.props.id}
        >
          <i className={this.props.icon} />
          <span className={"nav-link-inner--text ml-2 " + this.props.textClass}>
            {this.props.text}
          </span>
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
  icon: "fa fa-rocket",
  target: "",
  tooltip: "",
};

export default MenuItem;
