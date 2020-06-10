import Footer from "components/Footer";
import { format } from "date-fns";
import React from "react";
import { ReactTitle } from "react-meta-tags";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

class PreLancamento extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
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
            title="pl1"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/l9Mi7w78Mig?rel=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
        <ReactTitle title="Crie seu negócio online de impressão 3D - Alexandre Betioli" />

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
                            : format(this.props.dates.pl1, "'Estreia' dd/MM 'às' HH'h'")}
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
                            : format(this.props.dates.pl2, "'Estreia' dd/MM 'às' HH'h'")}
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
