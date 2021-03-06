import Footer from "components/Footer";
import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import View from "views/View";
import { MetaTags } from "react-meta-tags";

class PreLancamento extends View {
  render() {
    let pl1_liberado = new Date() >= this.props.dates.pl1;
    let pl2_liberado = new Date() >= this.props.dates.pl2;

    let pl1_content;
    if (pl1_liberado) {
      pl1_content = (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="pl1"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/l9Mi7w78Mig?rel=0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    } else {
      pl1_content = (
        <img
          className="hero-img"
          alt="Clique e assista"
          src={require("assets/img/pl1.png")}
        />
      );
    }

    let pl2_content;
    if (pl2_liberado) {
      pl2_content = (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="pl2"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/FVL-5P9t80E?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    } else {
      pl2_content = (
        <img
          className="hero-img"
          alt="Clique e assista"
          src={require("assets/img/pl2.png")}
        />
      );
    }

    return (
      <div ref="main">
        <MetaTags>
          <title>
            Crie seu negócio online de impressão 3D - Alexandre Betioli
          </title>
          <meta
            name="description"
            content="Treinamento para quem não tem tempo a perder e quer começar a lucrar com impressão 3D."
          />
          <meta
            name="keywords"
            content="impressão 3d,comunidade,3d printing,impressora 3d,fdm,sla,empreendedorismo,planilha,curso,aula,grátis"
          />
          <meta
            name="robots"
            content="index,follow,noarchive,noimageindex"
          ></meta>
        </MetaTags>

        <section className="section-sm black">
          <Container>
            <Row>
              <Col xs="6">
                <Link
                  to="/pl1"
                  className={this.props.active === "pl1" ? "text-primary" : ""}
                >
                  <Row>
                    <Col lg="3">
                      <img
                        className="thumb-video"
                        alt="Clique e assista"
                        src={require("assets/img/pl1.png")}
                      />
                    </Col>
                    <Col lg="9">
                      <p>
                        <span className="legenda-video">PARTE 1</span>
                        <span className="legenda-video">
                          {pl1_liberado
                            ? "LIBERADO"
                            : format(
                                this.props.dates.pl1,
                                "'Estreia' dd/MM 'às' HH'h'"
                              )}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col xs="6">
                <Link
                  to="/pl2"
                  className={this.props.active === "pl2" ? "text-primary" : ""}
                >
                  <Row>
                    <Col lg="3">
                      <img
                        className="thumb-video"
                        alt="Clique e assista"
                        src={require("assets/img/pl2.png")}
                      />
                    </Col>
                    <Col lg="9">
                      <p>
                        <span className="legenda-video">PARTE 2</span>
                        <span className="legenda-video">
                          {pl2_liberado
                            ? "LIBERADO"
                            : format(
                                this.props.dates.pl2,
                                "'Estreia' dd/MM 'às' HH'h'"
                              )}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                {this.props.active === "pl1" && pl1_content}
                {this.props.active === "pl2" && pl2_content}
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <Row>
              <Col lg="12">
                <div className="centered">
                  <h3>Deixe seu comentário:</h3>
                  <div
                    className="fb-comments"
                    data-href="https://www.alexandrebetioli.com.br/pl"
                    data-numposts="10"
                    data-width=""
                  ></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

PreLancamento.defaultProps = {
  active: "pl1",
};

export default PreLancamento;
