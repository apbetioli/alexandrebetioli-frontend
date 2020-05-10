import EmailForm from "components/EmailForm";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { Col, Container, Form, Row } from "reactstrap";

class CursoStarter extends React.Component {
  render() {
    return (
      <>
        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h1 className="centered">
                  Comece a explorar tudo o que a impressão 3D tem a te oferecer
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg="2"></Col>
              <Col lg="8">
                <p className="lead">Cadastre-se para ser aviso quando o curso estiver disponível!</p>

                <Form
                  action="https://app.convertkit.com/forms/1327091/subscriptions"
                  method="post"
                  data-sv-form="1327091"
                  data-uid="031c6dfcb0"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-espera"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                >
                  <EmailForm/>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section inverse">
          <QuemSouEu/>
        </section>
      </>
    );
  }
}

export default CursoStarter;
