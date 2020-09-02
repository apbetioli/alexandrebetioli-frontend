import React from "react";
import { Col, Container, Row } from "reactstrap";

class Garantia extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="3" className="garantia">
            <img alt="..." src={require("assets/img/garantia2.png")} />
          </Col>
          <Col lg="9">
            <br />
            <h3>
              Faça sua matrícula com{" "}
              <span className="checkout">30 dias de garantia</span>
            </h3>
            <p>
              Se dentro de 30 dias você decidir que o curso não é para você, não
              teve nenhuma evolução ou não era o que você esperava, é só mandar
              um e-mail e devolvemos 100% do seu investimento, sem perguntas.
              Isso mesmo, sem perguntas.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Garantia;
