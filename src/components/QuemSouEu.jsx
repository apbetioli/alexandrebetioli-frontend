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
            <h2>Alexandre Betioli</h2>
            <p>
              Apaixonado por impressão 3D e empreendedorismo. 
              Já construí várias impressoras 3D do zero e fui co-fundador do
              Mania3D, um e-commerce de peças decorativas impressas em 3D.
            </p>
            <p>
              Aprenda comigo tudo sobre impressão 3D e como gerar uma renda extra e
              iniciar seu negócio com impressão 3D.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default QuemSouEu;
