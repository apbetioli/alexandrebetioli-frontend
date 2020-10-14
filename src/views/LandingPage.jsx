import ActionButton from "components/ActionButton";
import Footer from "components/Footer";
import React from "react";
import MetaTags from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import View from "./View";

class LandingPage extends View {
  render() {
    const convite = "https://discord.gg/sVXPeBn";

    return (
      <div ref="main">
        <MetaTags>
          <title>Impressão 3D - Alexandre Betioli</title>
          <meta
            name="description"
            content="Aprenda sobre impressão 3D, participe de comunidades de discussão e potencialize seu aprendizado."
          />
          <meta
            name="keywords"
            content="impressão 3d,comunidade,3d printing,impressora 3d,fdm,sla,empreendedorismo,planilha,curso,aula,grátis"
          />
          <meta name="robots" content="index,follow"></meta>
        </MetaTags>

        <section className="section black">
          <Container className="hero">
            <Row>
              <Col lg="6">
                <h1>
                  <span>Impressão 3D</span> direto ao ponto e do jeito certo
                </h1>
                <p className="lead">
                  No meio de tanta informação que surge todos os dias, você
                  precisa de alguém que te leve na direção certa.
                </p>
                <ActionButton
                  text="IR PARA O CANAL DO YOUTUBE"
                  href="https://www.youtube.com/channel/UCsW8AqQR62iwXoiWYfe-ovA"
                />
              </Col>
              <Col lg="6">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="list"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/qnijiarBWpk"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <h1>
                  <i className="fa fa-rocket" />
                  <span> Acelere seu aprendizado</span>
                </h1>

                <p className="lead">
                  E para você que não quer perder tempo, você pode seguir as
                  trilhas de estudo que vão te levar mais rápido aos seus
                  objetivos.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h2>
                  <i className="fa fa-user-graduate" />
                  <span> Starter</span>
                </h2>
                <p>
                  Curso 100% online para você dar os primeiros passos. E o
                  melhor, de graça!
                </p>
                <ActionButton text="Garantir meu acesso" to="/starter" />
              </Col>
              <Col lg="6">
                <h2>
                  <i className="fa fa-shopping-cart" />
                  <span> 3D Commerce</span>
                </h2>
                <p>
                  Para quem quer dar o próximo passo e começar a lucrar com esta
                  tecnologia.
                </p>
                <ActionButton text="Reservar minha vaga" to="/curso" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="comunidade" className="section discord black">
          <Container>
            <Row>
              <Col lg="8">
                <h1>
                  <i className="fa fa-users" />
                  <span> Potencialize seu aprendizado</span>
                </h1>

                <p className="lead">
                  Participe da comunidade de impressão 3D e empreendedorismo
                  AB3D. Tire suas dúvidas e interaja com outros profissionais do
                  mercado de impressão 3D.
                </p>

                <ActionButton color="primary" to="/comunidade" />
              </Col>
              <Col lg="4" className="centered">
                <a href={convite} target="_blank" rel="noopener noreferrer">
                  <img alt="..." src={require("assets/img/discord.png")} />
                </a>
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
