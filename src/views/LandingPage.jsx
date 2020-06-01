import ActionButton from "components/ActionButton";
import EmailForm from "components/EmailForm";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import MetaTags from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";

class LandingPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <div ref="main">
        <MetaTags>
          <title>Impressão 3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Aprenda sobre impressão 3D, participe de comunidades de discussão e potencialize seu aprendizado."
          />
        </MetaTags>

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
                <i className="fa fa-user-graduate" />
                  <span> STARTER</span>
                </h2>
                <p>
                  Curso 100% online para você dar os primeiros passos. 
                  E o melhor, de graça!
                </p>
                <ActionButton text="Garantir meu acesso" to="/starter" />
              </Col>
              <Col lg="6">
                <h2>
                  <i className="fa fa-rocket" />
                  <span> 3D COMMERCE</span>
                </h2>
                <p>
                  Para quem quer dar o próximo passo e começar a lucrar com esta tecnologia.
                </p>
                <ActionButton text="Reservar minha vaga" to="/curso" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="comunidade" className="section discord d-none">
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

                <p>
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

        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h2>
                  <i className="fa fa-envelope" />
                  <span> Newsletter</span>
                </h2>
                <p className="lead">Receba notificações de novidades e conteúdos exclusivos.</p>
                <p>Prometemos não enviar spam!</p>

                <form
                  action="https://app.convertkit.com/forms/1377394/subscriptions"
                  method="post"
                  data-sv-form="1377394"
                  data-uid="4c0c66ac49"
                  data-version="5"
                  data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Sucesso! Now check your email to confirm your subscription.","redirect_url":"https://alexandrebetioli.com.br/obrigado-news"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                >
                  <EmailForm buttonText="Fazer meu cadastro" />
                </form>
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
