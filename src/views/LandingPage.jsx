import ActionButton from "components/ActionButton";
import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Col, Container, Form, Row } from "reactstrap";

class LandingPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <Header />
        <section className="section black">
          <Container className="hero">
            <Row>
              <Col lg="6">
                <h1>Impressão 3D direto ao ponto e do jeito certo</h1>
                <p className="lead">
                  No meio de tanta informação que surge todos os dias, você
                  precisa de alguém que te leve na direção certa.
                </p>
                <ActionButton text="É ISSO QUE EU QUERO" to="/starter" />
              </Col>
              <Col lg="6">
                <img
                  className="hero-img"
                  alt="..."
                  src={require("assets/img/lion.jpg")}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section inverse">
          <Container>
            <Row>
              <Col lg="6">
                <h2>
                  <i className="fa fa-rocket" />
                  <span> Starter</span>
                </h2>

                <p className="lead">
                  Curso 100% online para você dar os primeiros passos. E o
                  melhor, de graça!
                </p>
                <ActionButton text="Garantir meu acesso" to="/starter" />
              </Col>
              <Col lg="6">
                <h2>
                  <i className="fa fa-user-graduate" />
                  <span> PRO</span>
                </h2>

                <p className="lead">
                  Para quem quer dar o próximo passo e obter o máximo da
                  impressão 3D.
                </p>
                <ActionButton text="Reservar minha vaga" to="/curso" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="comunidade" className="section discord">
          <Container>
            <Row>
              <Col lg="6">
                <h2>
                  <i className="fa fa-users" />
                  <span>
                    {" "}
                    Acelere seu aprendizado participando da comunidade
                  </span>
                </h2>

                <p className="lead">
                  Potencialize o seu aprendizado. Tire suas dúvidas e interaja
                  com outros profissionais do mercado de impressão 3D.
                </p>

                <ActionButton color="primary" to="/comunidade">
                  Acessar comunidade
                </ActionButton>
              </Col>
              <Col lg="6" className="centered">
                <img alt="..." src={require("assets/img/discord.png")} />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section inverse">
          <Container>
            <Row>
              <Col lg="12">
                <h2>
                  <i className="fa fa-envelope" />
                  <span> Receba conteúdos exclusivos</span>
                </h2>
                <p className="lead">Prometemos não enviar spam</p>

                <Form
                  action="https://app.convertkit.com/forms/1377394/subscriptions"
                  method="post"
                  data-sv-form="1377394"
                  data-uid="4c0c66ac49"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-live"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                >
                  <EmailForm buttonText="Fazer meu cadastro" />
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
