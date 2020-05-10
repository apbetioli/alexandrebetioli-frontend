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
            <p className="lead">
              Olá, eu sou Alexandre Betioli e sou apaixonado por impressão 3D e
              empreendedorismo. Desde 2015 estou em contato com essa tecnologia,
              construí várias impressoras 3D do zero e fui co-fundador do
              Mania3D, um e-commerce de peças impressas em 3D.
            </p>
            <p className="lead">
              Aprenda comigo tudo sobre impressão 3D, desde o básico até ao
              avançado, construção de impressoras e como gerar uma renda extra e
              iniciar seu negócio com impressão 3D.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QuemSouEu;
