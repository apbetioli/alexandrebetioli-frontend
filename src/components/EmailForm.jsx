import React from "react";

import {
  Row,
  Col,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Input,
} from "reactstrap";

class EmailForm extends React.Component {
  render() {
    return (
      <>
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
                  required
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>

        <Button
          type="submit"
          color="primary"
          data-element="submit"
          size="lg"
          block
        >
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
      </>
    );
  }
}

EmailForm.defaultProps = {
  buttonText: "Quero ser avisado",
};

export default EmailForm;
