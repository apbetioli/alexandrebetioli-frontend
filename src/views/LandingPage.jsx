import React, { useState } from "react";

import {
  Button,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import ActionButton from "components/ActionButton";
import Footer from "components/Footer";
import Header from "components/Header";

class LandingPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Header />
        <main ref="main">
          <section className="section">
            <Container className="hero">
              <Row>
                <Col lg="6">
                  <h1>Impressão 3D direto ao ponto e do jeito certo</h1>
                  <p className="lead">
                    No meio de tanta informação que surge todos os dias, você
                    precisa de alguém que te leve na direção certa.
                  </p>
                  <ActionButton text="É ISSO QUE EU QUERO" href="/starter" />
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
                    Curso 100% online para você dar os primeiros passos neste
                    mundo da impressão 3D. E o melhor, de graça!
                  </p>
                  <ActionButton text="Garantir meu acesso" href="/starter" />
                </Col>
                <Col lg="6">
                  <h2>
                    <i className="fa fa-rocket" />
                    <span> PRO</span>
                  </h2>

                  <p className="lead">
                    Para quem quer dar o próximo passo e obter o máximo da
                    impressão 3D.
                  </p>
                  <ActionButton text="Reservar minha vaga" href="/curso" />
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section discord">
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
                    Potencialize o seu aprendizado. Tire suas dúvidas e interaja com outros profissionais do mercado de impressão 3D.
                  </p>

                  <ActionButton
                    text="Acessar comunidade"
                    color="primary"
                    href="/comunidade"
                  />
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

                  <form>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="email"
                          placeholder="Insira seu melhor email :)"
                          type="email"
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <Button block color="white" type="submit">
                      Cadastrar
                    </Button>
                  </form>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
