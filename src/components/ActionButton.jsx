import React from "react";
import { Link } from "react-router-dom";

class ActionButton extends React.Component {
  render() {
    let classes =
      "btn btn-" + this.props.color + " btn-icon" + this.props.className;

    if (this.props.href) {
      return (
        <a
          href={this.props.href}
          target="_blank"
          className={classes}
          rel="noopener noreferrer"
        >
          {this.props.text}
        </a>
      );
    }

    return (
      <Link className={classes} to={this.props.to}>
        <span className="btn-inner--text">{this.props.text}</span>
      </Link>
    );
  }
}

ActionButton.defaultProps = {
  className: "",
  color: "primary",
  text: "Saiba mais",
};

export default ActionButton;
