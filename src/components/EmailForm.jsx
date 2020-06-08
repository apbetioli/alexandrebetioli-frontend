import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from "reactstrap";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  emailChanged(event) {
    this.setState({ email: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: process.env.REACT_APP_CK_API_KEY,
        email: this.state.email,
      }),
    };
    fetch(
      "https://api.convertkit.com/v3/forms/" + this.props.formId + "/subscribe",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ subscription: data.subscription });
        this.props.history.push(
          this.props.redirect +
            "?email=" +
            this.state.email +
            "&ck_id=" +
            data.subscription.subscriber.id
        );
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <Row>
          <Col xs="12">
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-envelope" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  aria-label="Email"
                  id="email"
                  name="email_address"
                  placeholder="Insira seu melhor email :)"
                  type="email"
                  value={this.state.email}
                  onChange={this.emailChanged.bind(this)}
                  required
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>

        <Button type="submit" color="primary" size="lg" block>
          {this.props.buttonText}
        </Button>

        <Row>
          <Col xs="12">
            <div className="subtitle">
              <i className="fa fa-lock"></i>
              <span> Suas informações estão seguras</span>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}

EmailForm.defaultProps = {
  buttonText: "Quero ser avisado",
  redirect: "/obrigado-espera",
};

export default withRouter(EmailForm);
