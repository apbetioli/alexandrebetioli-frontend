import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";

class CursoPro extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Crie seu negócio online de impressão 3D - Alexandre Betioli
          </title>
          <meta
            name="description"
            content="Treinamento para quem não tem tempo a perder e quer começar a lucrar com impressão 3D."
          />
        </MetaTags>

        <Header />
        <section className="section black">
          <Container>
            <Row>
              <Col lg="6">
                <h1>
                  Crie seu <span className="text-primary">negócio online</span>{" "}
                  de impressão 3D
                </h1>
                <p className="lead">
                  Treinamento para quem não tem tempo a perder e quer começar a
                  lucrar com impressão 3D
                </p>
                <p>
                  As matrículas serão abertas em breve dia{" "}
                  <span className="text-primary">15/05 às 8h</span>. Não perca
                  tempo e se cadastre para receber mais informações sobre o
                  curso.
                </p>

                <form
                  action="https://app.convertkit.com/forms/1327091/subscriptions"
                  method="post"
                  data-sv-form="1327091"
                  data-uid="031c6dfcb0"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-espera"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                >
                  <EmailForm buttonText="Quero saber mais" />
                </form>
              </Col>
              <Col lg="6">
                <img
                  alt="..."
                  src={require("assets/img/factory.jpg")}
                  className="hero-img"
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
          <QuemSouEu />
        </section>
        <Footer />
      </div>
    );
  }
}

export default CursoPro;
