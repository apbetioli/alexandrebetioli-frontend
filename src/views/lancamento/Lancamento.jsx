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

class Lancamento extends React.Component {
  render() {
    let cta = (
      <Container>
        <Row>
          <Col lg="12">
            <ActionButton
              color="checkout"
              href="https://pay.hotmart.com/Q23252637E?split=12"
              text="Quero fazer minha matrícula"
              size="lg"
              block
            />
          </Col>
        </Row>
      </Container>
    );

    return (
      <div>
        <ReactTitle title="Crie seu negócio online de impressão 3D - Alexandre Betioli" />

        <section className="section-sm black">
          <Container>
            <Row>
              <Col lg="12">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="pl1"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/NKW25Kfw_JM"
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
          <Bonus />
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
