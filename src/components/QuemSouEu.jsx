import React from "react";

import { Container, Row, Col } from "reactstrap";

class QuemSouEu extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="6">
            <img
              className="hero-img lead"
              alt="..."
              src={require("assets/img/foto.jpg")}
            />
          </Col>
          <Col lg="6">
            <h2 className="mt-4">
              <span className="text-primary">Alexandre</span> Betioli
            </h2>
            <p>
              Acredito que os empreendedores brasileiros precisam aproveitar
              mais as oportunidades que a impressão 3D tem a oferecer, por isso
              minha missão é levar todo o meu conhecimento de impressão 3D e
              empreendedorismo para o maior número de pessoas possível.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QuemSouEu;
