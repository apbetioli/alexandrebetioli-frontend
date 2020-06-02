import Footer from "components/Footer";
import React from "react";
import { ReactTitle } from "react-meta-tags";
import { Col, Container, Row } from "reactstrap";
import ActionButton from "components/ActionButton";

class PreLancamento extends React.Component {
  render() {
    return (
      <div>
        <ReactTitle title="Crie seu negócio online de impressão 3D - Alexandre Betioli" />

        <section className="section-sm black">
          <Container>
            <Row>
              <Col lg="12">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="pl"
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/yr_qDX8ljlE"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <ActionButton
              color="checkout"
              href="#"
              text="Matrículas abrem dia 15/06 às 8h"
              size="lg"
              block
              enabled="false"
            />
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

export default PreLancamento;
