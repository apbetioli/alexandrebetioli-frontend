import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class ActionButton extends React.Component {
  render() {
    if (this.props.href) {
      return (
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <Button
            className={this.props.className}
            color={this.props.color}
            size={this.props.size}
            block={this.props.block}
            type={this.props.type}
          >
            {this.props.text}
          </Button>
        </a>
      );
    }

    return (
      <Link to={this.props.to}>
        <Button
          className={this.props.className}
          color={this.props.color}
          size={this.props.size}
          block={this.props.block}
          type={this.props.type}
        >
          {this.props.text}
        </Button>
      </Link>
    );
  }
}

ActionButton.defaultProps = {
  className: "",
  color: "primary",
  text: "Saiba mais",
  size: "",
  block: false,
  type: "",
};

export default ActionButton;
