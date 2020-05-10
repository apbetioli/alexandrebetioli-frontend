import React from "react";

import { Button } from "reactstrap";

class ActionButton extends React.Component {
  render() {
    let classes = "btn-icon mb-3 mb-sm-0 " + this.props.className;
    return (
      <div className="btn-wrapper btn-action">
        <Button
          className={classes}
          color={this.props.color}
          href={this.props.href}
          target={this.props.target}
        >
          <span className="btn-inner--text">{this.props.text}</span>
        </Button>
      </div>
    );
  }
}

ActionButton.defaultProps = {
  className: "",
  color: "primary",
  href: "#",
  target: "",
  text: "Saiba mais",
};

export default ActionButton;
