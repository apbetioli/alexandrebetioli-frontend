import React from "react";
import { NavItem, UncontrolledTooltip } from "reactstrap";
import { NavLink } from "react-router-dom";

class MenuItem extends React.Component {
  render() {
    return (
      <NavItem>

        {this.props.to && (
          <NavLink
            activeClassName="active"
            className="nav-link-icon"
            to={this.props.to}
            id={this.props.id}
          >
            <i className={this.props.icon} />
            <span
              className={"nav-link-inner--text ml-2 " + this.props.textClass}
            >
              {this.props.text}
            </span>
          </NavLink>
        )}

        {this.props.href && (
          <a
            className="nav-link-icon"
            href={this.props.href}
            id={this.props.id}
            target={this.props.target}
            rel="noopener noreferrer"
          >
            <i className={this.props.icon} />
            <span
              className={"nav-link-inner--text ml-2 " + this.props.textClass}
            >
              {this.props.text}
            </span>
          </a>
        )}

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
  icon: "fa fa-rocket",
  target: "_blank",
  text: "Link",
  textClass: ""
};

export default MenuItem;
