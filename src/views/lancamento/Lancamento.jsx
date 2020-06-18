import ActionButton from "components/ActionButton";
import Footer from "components/Footer";
import QuemSouEu from "components/QuemSouEu";
import React from "react";
import { ReactTitle } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import Bonus from "./Bonus";
import Conteudo from "./Conteudo";
import FAQs from "./FAQs";
import Garantia from "./Garantia";
import Testemunhos from "./Testemunhos";
import Countdown from "react-countdown";

class Lancamento extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    let today = new Date();
    let videoURL = "https://www.youtube.com/embed/5y7SuLcMtO0?rel=0"; //with bonus
    let bonusSpecial = true;
    let ctaText = "Quero fazer minha matrícula com bônus especial";
    if (today >= new Date("2020-06-16 00:00:00")) {
      videoURL = "https://www.youtube.com/embed/N4WPz8pasxI?rel=0";
      bonusSpecial = false;
      ctaText = "Quero fazer minha matrícula";
    }

    let cta = (
      <Container>
        <Row>
          <Col lg="12">
            <ActionButton
              color="checkout"
              href="https://pay.hotmart.com/Q23252637E?split=12"
              text={ctaText}
              size="lg"
              block
            />
          </Col>
        </Row>
      </Container>
    );

    let countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <p>Matrículas encerradas!</p>;
      } else {
        if (days <= 2) {
          return (
            <>
              <Col lg="6" xs="12">
                <span className="h1 text-right d-none d-lg-block">Faltam apenas:</span>
                <span className="d-lg-none">Faltam apenas:</span>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {days} </span>
                <div>dias</div>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {hours} </span>
                <div>horas</div>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {minutes} </span>
                <div>minutos</div>
              </Col>
              <Col lg="1" xs="3">
                <span className="h1"> {seconds} </span>
                <div>segundos</div>
              </Col>
            </>
          );
        } else {
          return (
            <Col lg="12">
              <p>ATENÇÃO: Matrículas abertas somente até 21/06</p>
            </Col>
          );
        }
      }
    };

    return (
      <div ref="main">
        <ReactTitle title="Crie seu negócio online de impressão 3D - Alexandre Betioli" />

        <section className="section-sm black mt-0 pt-0 centered">
          <Container>
            <Row>
              <Countdown
                date={this.props.dates.end}
                renderer={countdownRenderer}
              />
              <Col lg="12">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="l1"
                    className="embed-responsive-item"
                    src={videoURL}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
          {cta}
        </section>

        <section className="section black">
          <Garantia />
        </section>

        <section className="section">
          <Container>
            <Row>
              <Col lg="6">
                <h2>Crie seu negócio online de impressão 3D</h2>
                <p>
                  Vou ensinar você tudo o que aprendi no campo de batalha tendo
                  um e-commerce de impressão 3D. Você vai aprender como vender
                  em redes sociais, marketplaces e no seu próprio e-commerce.
                </p>
                <p>
                  Coloque a sua impressora para aquecer pois ela vai trabalhar
                  como nunca!
                </p>
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

        <section className="section black">
          <Conteudo />
        </section>

        <section className="section">
          <Testemunhos />
        </section>

        <section className="section black">
          <Bonus special={bonusSpecial} />
        </section>

        <section className="section">
          <FAQs />
          {cta}
        </section>

        <section className="section">
          <QuemSouEu />
        </section>

        <Footer hideNav="true" />
      </div>
    );
  }
}
export default Lancamento;
