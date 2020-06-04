import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { MetaTags } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import {isLogged} from "../utils/login"

class CursoStarter extends React.Component {
  render() {
    const toRender = isLogged() ? this.pageCourse() : this.pageLogin();

    return (
      <div>
        <MetaTags>
          <title>Aulas gratuitas de impressão 3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Comece a explorar tudo o que a impressão 3D tem a te oferecer com estas aulas gratuitas."
          />
        </MetaTags>

        <Header />
        
        {toRender}

        <section className="section">
          <QuemSouEu />
        </section>
        <Footer />
      </div>
    );
  }

  pageCourse() {
    return (
      <section className="section black">
        <Container>
          <Row>
            <Col lg="6">
              <h1>
                Curso <span className="text-primary">STARTER</span> de
                impressão 3D
              </h1>
              <p className="lead">
                Estou preparando um super curso para iniciantes na impressão
                3D e vai ser <span className="text-primary">totalmente gratuito</span>.
              </p>
              <p>
                Cadastre-se para ser avisado quando o curso estiver
                disponível!
              </p>

              <form
                action="https://app.convertkit.com/forms/1386818/subscriptions"
                method="post"
                data-sv-form="1386818"
                data-uid="36d4e4ccc7"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-espera"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              >
                <EmailForm />
              </form>
            </Col>
            <Col lg="6" className="centered">
              <img
                alt="..."
                src={require("assets/img/starter.png")}
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>)    
  }

  pageLogin() {
    return (
      <section className="section black">
        <Container>
          <Row>
            <Col lg="6">
              <h1>
                Curso <span className="text-primary">STARTER</span> de
                impressão 3D
              </h1>
              <p className="lead">
                Você está a um simples passo de iniciar um super 
                curso <span className="text-primary">totalmente gratuito </span> 
                para iniciantes na impressão 3D.
              </p>
              <p>
                Basta nos informar seu melhor email para liberar seu acesso!!!
              </p>

              <form
                action="https://app.convertkit.com/forms/1386818/subscriptions"
                method="post"
                data-sv-form="1386818"
                data-uid="36d4e4ccc7"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-espera"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              >
                <EmailForm buttonText="LIBERAR ACESSO" />
              </form>
            </Col>
            <Col lg="6" className="centered">
              <img
                alt="..."
                src={require("assets/img/starter.png")}
                className="hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>)    
  }
}

export default CursoStarter;
