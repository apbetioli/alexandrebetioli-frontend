import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from "reactstrap";
import api from "../services/api";

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    let email = localStorage.getItem("email");
    this.state = { email: email ? email : "" };
  }

  emailChanged(event) {
    this.setState({ email: event.target.value });
  }

  async onSubmit(event) {
    event.preventDefault();
    localStorage.setItem('email', this.state.email); 

    try {
      let form = {
        email: this.state.email
      };

      await api.post('/subscribe', form);

      this.props.history.push(
        this.props.redirect +
          "?email=" +
          this.state.email
      );

    } catch (error) {
        console.log(error);
        alert("Ocorreu um erro ao se inscrever. Tente novamente mais tarde.");
    }

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
